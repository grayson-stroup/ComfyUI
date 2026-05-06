const WebSocket = require("ws");
const fs = require("fs");
const path = require("path");
const http = require("http");
const {
  buildPositivePrompt,
  NEGATIVE_PROMPT,
  getNegativePrompt,
} = require("./portrait_config");

const SERVER_ADDRESS = process.env.COMFYUI_HOST || "127.0.0.1:8188";
const WORKFLOW_PATH = path.join(__dirname, "portrait_workflow.json");
const OUTPUT_DIR = path.join(__dirname, "generated_portraits");

function loadWorkflow() {
  return JSON.parse(fs.readFileSync(WORKFLOW_PATH, "utf-8"));
}

function httpRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, options, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const body = Buffer.concat(chunks);
        const text = body.toString();
        if (res.headers["content-type"]?.includes("application/json") || text.startsWith("{") || text.startsWith("[")) {
          try {
            resolve(JSON.parse(text));
            return;
          } catch {}
        }
        resolve(body);
      });
    });
    req.on("error", reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function queuePrompt(prompt, clientId) {
  const payload = JSON.stringify({
    prompt,
    client_id: clientId,
  });

  const res = await httpRequest(`http://${SERVER_ADDRESS}/prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
  });

  if (res.error) {
    throw new Error(`Prompt rejected: ${JSON.stringify(res.error).slice(0, 500)}`);
  }
  if (!res.prompt_id) {
    throw new Error(`No prompt_id in response: ${JSON.stringify(res).slice(0, 500)}`);
  }

  return res.prompt_id;
}

async function getHistory(promptId) {
  return httpRequest(`http://${SERVER_ADDRESS}/history/${promptId}`);
}

async function getImage(filename, subfolder, type) {
  const params = new URLSearchParams({ filename, subfolder, type });
  return httpRequest(`http://${SERVER_ADDRESS}/view?${params}`);
}

async function resolveCheckpointName(requestedCkptName) {
  try {
    const info = await httpRequest(
      `http://${SERVER_ADDRESS}/object_info/CheckpointLoaderSimple`
    );
    const ckptOptions =
      info?.CheckpointLoaderSimple?.input?.required?.ckpt_name?.[0];
    if (!Array.isArray(ckptOptions) || ckptOptions.length === 0) {
      throw new Error(
        "No checkpoints are available in ComfyUI. Add a model file to models/checkpoints (e.g. .safetensors) and restart ComfyUI."
      );
    }
    if (requestedCkptName && ckptOptions.includes(requestedCkptName)) {
      return requestedCkptName;
    }
    return ckptOptions[0];
  } catch (err) {
    if (err?.message?.includes("No checkpoints are available")) {
      throw err;
    }
    throw new Error(
      `Unable to validate checkpoints from ComfyUI at ${SERVER_ADDRESS}: ${err.message}`
    );
  }
}

function waitForCompletion(ws, promptId) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error(`Timeout waiting for prompt ${promptId}`)),
      1_800_000
    );

    const handler = (raw) => {
      const data = typeof raw === "string" ? raw : raw.toString();
      try {
        const message = JSON.parse(data);
        if (
          message.type === "executing" &&
          message.data.node === null &&
          message.data.prompt_id === promptId
        ) {
          clearTimeout(timeout);
          ws.off("message", handler);
          resolve();
        }
        if (
          message.type === "execution_error" &&
          message.data.prompt_id === promptId
        ) {
          clearTimeout(timeout);
          ws.off("message", handler);
          reject(
            new Error(
              `Execution error: ${JSON.stringify(message.data).slice(0, 500)}`
            )
          );
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    ws.on("message", handler);
  });
}

function connectWebSocket(clientId) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(
      `ws://${SERVER_ADDRESS}/ws?clientId=${clientId}`
    );
    ws.on("open", () => resolve(ws));
    ws.on("error", reject);
  });
}

async function generatePortrait({
  sex,
  ethnicity,
  age,
  attire,
  hairStyle,
  hairColor,
  facialHair,
  expression = "neutral",
  bodyType = "average",
  faceShape = "oval",
  pose = "straightOn",
  glasses = null,
  styleProfile = "professionalRealistic",
  checkpointName = null,
  seed,
  outputFilename,
  outputDir,
}) {
  const clientId = crypto.randomUUID();
  const ws = await connectWebSocket(clientId);

  try {
    const workflow = loadWorkflow();
    const workflowCkptName = workflow["4"]?.inputs?.ckpt_name;
    workflow["4"].inputs.ckpt_name = await resolveCheckpointName(
      checkpointName || workflowCkptName
    );

    if (styleProfile === "cartoonStylized") {
      const cartoonCheckpoint = process.env.COMFY_ARESENAL_CKPT;
      // Optional: force a cartoon checkpoint when the workflow has a standard CheckpointLoaderSimple node.
      if (
        cartoonCheckpoint &&
        workflow["4"]?.inputs &&
        typeof workflow["4"].inputs.ckpt_name === "string"
      ) {
        workflow["4"].inputs.ckpt_name = await resolveCheckpointName(cartoonCheckpoint);
      }
      // Cartoon profile uses a more stable portrait sampling setup.
      workflow["5"].inputs.steps = 36;
      workflow["5"].inputs.cfg = 6.2;
      workflow["5"].inputs.sampler_name = "dpmpp_2m";
      workflow["5"].inputs.scheduler = "karras";
      workflow["6"].inputs.width = 512;
      workflow["6"].inputs.height = 640;
    }

    const positivePrompt = buildPositivePrompt({
      sex,
      ethnicity,
      age,
      attire,
      hairStyle,
      hairColor,
      facialHair,
      expression,
      bodyType,
      faceShape,
      pose,
      glasses,
      styleProfile,
    });

    workflow["2"].inputs.text = positivePrompt;
    let negativePrompt =
      styleProfile === "professionalRealistic"
        ? NEGATIVE_PROMPT
        : getNegativePrompt(styleProfile);
    if (styleProfile === "cartoonStylized") {
      if (bodyType === "heavyset") {
        negativePrompt +=
          ", very slim body, skinny neck, narrow jawline, underweight frame, model-thin body";
      } else if (bodyType === "large") {
        negativePrompt +=
          ", very slim body, skinny neck, underweight frame, model-thin body";
      } else if (bodyType === "stocky") {
        negativePrompt +=
          ", extremely thin body, narrow shoulders, underweight frame";
      }
      if (sex === "male") {
        negativePrompt +=
          ", woman, female, feminine face, breasts, cleavage, curvy feminine figure, long eyelashes with glam makeup, lipstick";
        if (!facialHair) {
          negativePrompt +=
            ", beard, mustache, goatee, stubble, five o'clock shadow, facial hair";
        }
        negativePrompt +=
          ", bodybuilder, greek god physique, muscular body, visible abs, six pack, sculpted chest, ripped arms, vascular arms, fitness model, superhero body";
      } else if (sex === "female") {
        negativePrompt +=
          ", man, male, masculine face, beard, mustache, broad masculine jawline, flat masculine chest";
      }
      if (ethnicity === "african american") {
        negativePrompt +=
          ", pale skin, fair skin, caucasian facial features, light-skinned caucasian appearance, european facial features, straight caucasian hair, silky straight hair, straight fringe, light brown hair";
      }
    }
    workflow["3"].inputs.text = negativePrompt;
    workflow["5"].inputs.seed = typeof seed === "number" ? seed : hashSeed(seed);

    if (outputFilename) {
      workflow["8"].inputs.filename_prefix = outputFilename;
    }

    const promptId = await queuePrompt(workflow, clientId);
    await waitForCompletion(ws, promptId);

    const history = await getHistory(promptId);
    const outputs = history[promptId]?.outputs;
    if (!outputs) throw new Error("No outputs in history");

    const saveNodeOutput = outputs["8"];
    if (!saveNodeOutput?.images?.length) {
      throw new Error("No images in output");
    }

    const imageInfo = saveNodeOutput.images[0];
    const imageData = await getImage(
      imageInfo.filename,
      imageInfo.subfolder,
      imageInfo.type
    );

    const saveDir = outputDir || OUTPUT_DIR;
    fs.mkdirSync(saveDir, { recursive: true });

    const localFilename = outputFilename
      ? `${outputFilename}.png`
      : imageInfo.filename;
    const filepath = path.join(saveDir, localFilename);
    fs.writeFileSync(filepath, imageData);

    return {
      filename: localFilename,
      filepath,
      prompt: positivePrompt,
      seed: workflow["5"].inputs.seed,
      comfyFilename: imageInfo.filename,
    };
  } finally {
    ws.close();
  }
}

function hashSeed(str) {
  if (typeof str === "number") return str;
  let hash = 0;
  const s = String(str);
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

module.exports = { generatePortrait, connectWebSocket, SERVER_ADDRESS };

if (require.main === module) {
  (async () => {
    console.log("Generating a test portrait...");
    try {
      const result = await generatePortrait({
        sex: "male",
        ethnicity: "caucasian",
        age: 35,
        attire: "professional",
        hairStyle: "shortFlat",
        hairColor: "brown",
        facialHair: "beardLight",
        expression: "slight smile",
        bodyType: "average",
        faceShape: "square",
        pose: "slightLeft",
        glasses: null,
        seed: 42,
        outputFilename: "test_portrait",
      });
      console.log("Generated:", result);
    } catch (err) {
      console.error("Error:", err.message);
      process.exit(1);
    }
  })();
}

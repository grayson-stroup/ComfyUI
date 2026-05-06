const HAIR_STYLES_MALE = {
  shortFlat: "short flat cropped hair",
  shortRound: "short rounded hair",
  shortWaved: "short wavy hair",
  shortCurly: "short curly hair",
  theCaesar: "caesar cut hairstyle",
  theCaesarAndSidePart: "caesar cut with side part",
  sides: "tapered sides hairstyle",
  buzzCut: "buzz cut very short hair",
  crewCut: "crew cut hairstyle",
  combOver: "neat comb over hairstyle",
  slickedBack: "slicked back hair",
  texturedCrop: "textured crop hairstyle",
  fadeShort: "short fade hairstyle",
  partedSide: "neatly side-parted hair",
  shortCoilyCrop: "short coily textured crop",
  closeFade: "close-cropped fade haircut",
  shortTwists: "short twists hairstyle",
  shortLocs: "short neat locs pulled back",
  straightFringe: "short straight fringe haircut",
  straightSidePart: "short straight side-part hairstyle",
  recedingShort: "short mature receding hairline hairstyle",
  shavedHead: "shaved bald head",
  baldHead: "bald head",
  closeBuzz: "very close buzz cut",
  recedingBuzz: "receding hairline with very short buzz cut",
  blackCloseFade:
    "very short close-cropped fade with tightly coiled Black hair texture",
  blackCloseBuzz:
    "very close buzz cut with tightly coiled Black hair texture",
};

const HAIR_STYLES_FEMALE = {
  longButNotTooLong: "shoulder-length hair",
  straight01: "long straight hair",
  straight02: "medium straight hair",
  bob: "bob cut hairstyle",
  bun: "professional hair bun",
  curly: "curly hair",
  curvy: "wavy flowing hair",
  pixieCut: "pixie cut short hairstyle",
  layeredMedium: "layered medium-length hair",
  sideSweep: "side-swept bangs with long hair",
  lowPonytail: "low ponytail hairstyle",
  frenchTwist: "french twist updo",
  looseCurls: "loose voluminous curls",
  straightBangs: "straight hair with blunt bangs",
  naturalCoils: "natural coily shoulder-length hair",
  braidedBob: "neat braided bob hairstyle",
  shortLocs: "short neat locs hairstyle",
  coilyPixie: "short coily pixie cut",
  straightLob: "straight long bob hairstyle",
  neatStraightBob: "neat straight bob hairstyle",
};

const HAIR_COLORS = {
  brown: "brown",
  "dark brown": "dark brown",
  "light brown": "light brown",
  blonde: "blonde",
  auburn: "auburn",
  dark: "black",
  "very light blonde": "platinum blonde",
  red: "red",
  "white/gray": "gray",
};

const FACIAL_HAIR = {
  beardLight: "light stubble",
  beardMedium: "neatly trimmed medium beard",
  beardFull: "full well-groomed beard",
  goatee: "neatly trimmed goatee",
  moustacheFancy: "well-groomed handlebar mustache",
  moustacheMagnum: "thick full mustache",
};

const ATTIRE = {
  smartCasual: {
    male: [
      "navy chinos with a light blue open-collar Oxford shirt",
      "slim khaki trousers with a fitted merino crew-neck sweater",
      "dark chinos with a soft chambray button-up shirt, untucked",
      "grey slim trousers with a quarter-zip pullover sweater",
      "olive chinos with a white linen button-up shirt, sleeves rolled",
      "dark jeans with a fitted polo shirt",
      "charcoal slim trousers with a knit turtleneck sweater",
      "navy trousers with a casual striped button-up shirt",
    ],
    female: [
      "tailored dark trousers with a soft draped blouse",
      "slim chinos with a fitted knit top and delicate necklace",
      "dark slim trousers with a relaxed linen blouse",
      "midi wrap skirt with a fitted tucked-in blouse",
      "tailored wide-leg trousers with a silk camisole top",
      "dark jeans with an elegant off-shoulder blouse",
      "fitted turtleneck sweater with tailored trousers",
      "flowy midi skirt with a neat tucked-in button-up blouse",
    ],
  },
  professional: {
    male: [
      "tailored charcoal business suit with white dress shirt",
      "navy blue business suit with light blue dress shirt",
      "dark gray suit with crisp white shirt",
      "professional blazer and dress shirt with subtle tie",
      "medium gray suit with a soft blue dress shirt, no tie",
      "navy blazer with tailored trousers and open-collar dress shirt",
    ],
    female: [
      "tailored charcoal business suit with white blouse",
      "navy blue professional blazer with silk blouse",
      "dark business suit with elegant neckline top",
      "professional blazer with V-neck blouse",
      "structured blazer with tailored trousers and a soft blouse",
      "classic navy blazer with a fitted pencil skirt and blouse",
    ],
  },
  aresenal: {
    male: [
      "plain fitted athletic t-shirt with no logo, upper torso visible",
      "plain zip-up training hoodie with no logo, chest-up framing",
      "plain moisture-wicking performance tee with no branding, upper body only",
      "plain crew-neck workout shirt with no logo, upper torso visible",
      "plain lightweight quarter-zip athletic top with no logo, chest-up framing",
      "plain casual sweatshirt with no branding, upper torso visible",
      "plain casual henley shirt with no logo, upper torso visible",
    ],
    female: [
      "plain fitted athletic top with no logo, upper torso visible",
      "plain relaxed training hoodie with no logo, chest-up framing",
      "plain moisture-wicking performance tee with no branding, upper body only",
      "plain crew-neck workout shirt with no logo, upper torso visible",
      "plain lightweight zip-up athletic jacket with no logo, chest-up framing",
      "plain simple t-shirt with no branding, upper torso visible",
      "plain soft casual sweater with no logo, upper torso visible",
    ],
  },
};

const EXPRESSIONS = {
  neutral: "neutral calm expression",
  "slight smile": "slight warm professional smile",
  pleasant: "pleasant relaxed expression",
  confident: "confident composed expression",
  friendly: "friendly approachable expression",
  approachable: "warm approachable expression",
};

const BODY_TYPES = {
  slim: "slim lean build with narrower shoulders",
  average: "average build with a moderately soft midsection, not model-thin",
  athletic: "athletic fit build",
  large: "large above-average build, heavier than average but not fully heavyset",
  stocky: "stocky thick torso build with broader frame",
  heavyset:
    "very large heavyset plus-size build, approximately 200-250 pounds, with fuller cheeks, visible double chin, thicker neck, and broader torso",
};

const BODY_TYPES_BY_SEX = {
  male: {
    slim: "slim lean male build with narrower shoulders",
    average:
      "ordinary average male build with a soft midsection, no visible muscle definition",
    athletic:
      "average active male build, healthy but not muscular, no defined abs or sculpted chest",
    large:
      "large above-average male build, approximately 200-225 pounds, bigger than average, soft torso, no visible muscle definition",
    stocky:
      "stocky male build with thick soft torso, broader frame, solid neck, no visible muscle definition",
    heavyset:
      "large heavyset male build with thick neck, full face, bigger belly, thick soft arms, and non-muscular solid frame",
  },
  female: {
    slim: "slim lean female build with narrower shoulders",
    average: "average female build with a moderately soft midsection, not model-thin",
    athletic: "athletic fit female build, realistic activewear proportions",
    large:
      "large above-average female build, heavier than average but not fully plus-size",
    stocky: "stocky female build with broader torso, fuller arms, and solid frame",
    heavyset:
      "very large heavyset plus-size female build, approximately 200-250 pounds, with fuller cheeks, visible double chin, thicker neck, and broader torso",
  },
};

const BODY_TYPE_WEIGHTS = {
  slim: 0.18,
  average: 0.32,
  athletic: 0.20,
  stocky: 0.18,
  heavyset: 0.12,
};

const FACE_SHAPES = {
  oval: "oval face shape",
  round: "round face shape",
  square: "square jawline",
  heart: "heart-shaped face",
  oblong: "long oblong face",
  diamond: "diamond-shaped face with prominent cheekbones",
};

const POSES = {
  straightOn: "facing directly toward camera",
  slightLeft: "head turned slightly to the left, three-quarter view",
  slightRight: "head turned slightly to the right, three-quarter view",
  tiltLeft: "head tilted slightly to the left",
  tiltRight: "head tilted slightly to the right",
  quarterLeft: "quarter turn to the left looking at camera",
  quarterRight: "quarter turn to the right looking at camera",
};

const GLASSES = {
  thinRimmed: "wearing thin-rimmed rectangular glasses",
  roundWire: "wearing round wire-frame glasses",
  thickFrame: "wearing thick black-framed glasses",
  rimless: "wearing rimless glasses",
  aviator: "wearing aviator-style glasses",
};

const GLASSES_PROBABILITY = 0.08;

const LIGHTING_STYLES = [
  "soft professional studio lighting, shallow depth of field",
  "Rembrandt lighting with soft fill, shallow depth of field",
  "butterfly lighting with subtle rim light, shallow depth of field",
  "broad lighting with soft shadows, shallow depth of field",
  "loop lighting with gentle catchlights, shallow depth of field",
];

const CAMERA_STYLES = [
  "shot on Canon EOS R5 85mm f/1.4 lens",
  "shot on Sony A7IV 85mm f/1.8 lens",
  "shot on Nikon Z8 105mm f/2.8 lens",
  "shot on Canon EOS R5 70mm f/2.0 lens",
  "shot on Sony A7RV 90mm f/2.8 lens",
];

const ETHNICITIES = {
  caucasian: "Caucasian with fair-to-light skin tone",
  "african american":
    "unambiguously African American Black person with medium-to-dark brown skin, Black facial features, broader nose, fuller lips, and natural tightly coiled Black hair texture",
  asian:
    "East Asian with light-to-medium skin tone and East Asian facial features",
  hispanic:
    "Hispanic Latino with medium warm or olive skin tone and Latino facial features",
  "south asian": "South Asian Indian with medium-to-deep brown skin tone",
  "middle eastern": "Middle Eastern with olive-to-tan skin tone",
  "southeast asian": "Southeast Asian with warm medium skin tone",
  pacific_islander: "Pacific Islander with warm tan skin tone",
};

const BACKGROUND_COLORS = [
  "neutral gray",
  "neutral gray",
  "soft white",
  "navy blue",
  "charcoal",
  "dark blue",
  "warm cream",
];

const STYLE_PROFILES = {
  professionalRealistic: {
    imageType: "professional corporate headshot photograph",
    lightingStyles: LIGHTING_STYLES,
    cameraStyles: CAMERA_STYLES,
    qualityDescriptors: "8k, ultra detailed, photorealistic, RAW photo",
    negativePrompt: [
      "cartoon, illustration, painting, drawing, anime, CGI, 3d render",
      "deformed, ugly, blurry, low quality, watermark, text, logo",
      "extra fingers, mutated hands, poorly drawn face, disfigured",
      "t-shirt, hoodie, sneakers, athletic wear, sportswear",
      "busy background, outdoor, nature",
      "multiple people, cropped head, out of frame",
      "oversaturated, underexposed, overexposed",
      "duplicate face, clone, identical faces",
    ].join(", "),
  },
  cartoonStylized: {
    imageType:
      "stylized 3d animated avatar portrait, family-feature-film character design inspired by Moana-style animation, normal everyday person, single subject",
    backgroundColors: [
      "soft gray",
      "muted blue",
      "muted coral",
      "warm beige",
      "light teal",
      "pastel green",
      "off-white",
    ],
    lightingStyles: [
      "soft even front studio lighting with very minimal shadows",
      "flat softbox lighting, balanced brightness, no dramatic contrast",
      "gentle diffuse studio lighting with subtle soft shading",
    ],
    cameraStyles: [
      "centered head-and-shoulders avatar framing",
      "clean chest-up portrait composition",
      "symmetrical character portrait framing",
    ],
    qualityDescriptors:
      "high quality stylized 3d animation render, clearly cartoonized but believable human proportions, simplified facial planes, expressive but natural features, clean geometry, soft global illumination, smooth non-photoreal skin shading, warm feature-film character rendering, everyday realistic clothing details, moderate eye size, single character portrait",
    negativePrompt: [
      "photorealistic, hyperrealistic, RAW photo, realistic skin texture, pores, DSLR, camera sensor noise",
      "anime, manga, 2d illustration, cel shading, line art, comic style, chibi style",
      "beauty model, fashion model, glam makeup, doll face, baby face",
      "oversized eyes, huge eyes, exaggerated anime eyes",
      "bindi, forehead dot, forehead jewel, center forehead mark, third eye mark",
      "angry expression, rage face, scowl, sneer, furrowed eyebrows, clenched jaw, hostile look",
      "bodybuilder, greek god physique, muscular body, visible abs, sculpted chest, ripped arms, vascular arms, fitness model",
      "low quality, blurry, noisy, watermark, text, logo, brand logo, clothing logo, emblem, printed graphic, brand mark",
      "deformed anatomy, extra limbs, duplicate face, duplicate head, malformed hands, mirrored person",
      "busy background, crowd, multiple people, group shot, team photo, collage, movie poster",
      "second person, extra person, two people, two men, two women, twin, clone, duplicate body",
      "profile view, side view, extreme three-quarter view, head turned away, fashion pose, model pose",
      "full body action pose, dynamic action scene, complex scene composition",
      "gradient background, patterned background, ring backdrop, logo backdrop, prop objects",
      "wrinkles, skin pores, facial blemishes, harsh realism, gritty details",
    ].join(", "),
  },
};

function buildPositivePrompt({
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
  styleProfile = "professionalRealistic",
}) {
  const gender = sex === "male" ? "man" : "woman";
  const ethnicityDesc = ETHNICITIES[ethnicity] || ethnicity;
  const hairStyles = sex === "male" ? HAIR_STYLES_MALE : HAIR_STYLES_FEMALE;
  const hairDesc = hairStyles[hairStyle] || hairStyle;
  const hairColorDesc = HAIR_COLORS[hairColor] || hairColor;
  const expressionDesc = EXPRESSIONS[expression] || expression;
  const bodyTypeDesc =
    BODY_TYPES_BY_SEX[sex]?.[bodyType] || BODY_TYPES[bodyType] || "";
  const faceShapeDesc = FACE_SHAPES[faceShape] || "";
  const poseDesc = POSES[pose] || "";
  const glassesDesc = glasses && GLASSES[glasses] ? `, ${GLASSES[glasses]}` : "";
  const resolvedStyle =
    STYLE_PROFILES[styleProfile] || STYLE_PROFILES.professionalRealistic;
  const availableBackgrounds =
    resolvedStyle.backgroundColors || BACKGROUND_COLORS;
  const bgColor =
    availableBackgrounds[
      Math.floor(Math.random() * availableBackgrounds.length)
    ];
  const lighting =
    resolvedStyle.lightingStyles[
      Math.floor(Math.random() * resolvedStyle.lightingStyles.length)
    ];
  const camera =
    resolvedStyle.cameraStyles[
      Math.floor(Math.random() * resolvedStyle.cameraStyles.length)
    ];

  const attireOptions = ATTIRE[attire]?.[sex] || ATTIRE.professional[sex];
  const attireDesc =
    attireOptions[Math.floor(Math.random() * attireOptions.length)];

  let facialHairDesc = "";
  if (sex === "male" && facialHair && FACIAL_HAIR[facialHair]) {
    // For younger male portraits, keep facial hair color consistent with scalp hair.
    const colorLockPart =
      age <= 40 ? `, facial hair color matches ${hairColorDesc} scalp hair` : "";
    facialHairDesc = `, ${FACIAL_HAIR[facialHair]}${colorLockPart}`;
  } else if (sex === "male") {
    facialHairDesc = ", clean-shaven face, no facial hair";
  }

  const bodyPart = bodyTypeDesc ? ` ${bodyTypeDesc}` : "";
  const facePart = faceShapeDesc ? `, ${faceShapeDesc}` : "";
  const posePart = poseDesc ? `, ${poseDesc}` : "";
  const genderPresentationPart =
    sex === "male"
      ? "male-presenting face, adult man, natural non-muscular shoulders, flat chest, ordinary everyday American man"
      : "female-presenting face, feminine features, adult woman, feminine facial structure";
  const ethnicityGuardPart =
    styleProfile === "cartoonStylized" && ethnicity === "african american"
      ? "clearly Black African American appearance, medium-to-dark brown skin tone, visibly Black facial structure, not pale, not Caucasian-looking"
      : "";
  const ageStylePart =
    age >= 55
      ? sex === "male"
        ? "clearly older adult man, visible age lines, mature facial structure, older eyes, less youthful skin tone"
        : "clearly older adult woman, visible age lines, mature facial structure, older eyes, less youthful skin tone"
      : age >= 40
        ? "adult mature facial features, subtle signs of age"
        : "young adult facial features, age-appropriate face";
  const expressionGuardPart =
    styleProfile === "cartoonStylized"
      ? "calm approachable expression, relaxed eyebrows, no angry look"
      : "calm professional expression";
  const singleSubjectPart =
    styleProfile === "cartoonStylized"
      ? "exactly one person, single character only, one person only, solo avatar, single head only, single neck only, centered head-and-shoulders portrait, upper torso only, plain solid color background, looking at camera, no props, no extra elements, no reflections, no mirrored subject, no background people, no shoulder partner, front-facing portrait, face oriented straight toward camera, no dramatic head turn"
      : "single person only, centered headshot composition, upper torso only";
  const bodyTypeSpecificPart =
    bodyType === "heavyset"
      ? sex === "male"
        ? "clearly large-bodied male proportions, thick neck, fuller jawline, broad soft upper torso, bigger belly, no muscle tone"
        : "clearly plus-size female proportions, visible double chin, fuller jawline and neck, thicker upper torso"
      : bodyType === "large"
        ? sex === "male"
          ? "above-average large male proportions, soft upper torso, heavier than average but not fully heavyset, no muscle tone"
          : "above-average large female proportions, fuller arms and torso, heavier than average but not fully plus-size"
      : bodyType === "stocky"
        ? sex === "male"
          ? "broader neck, thicker soft torso proportions, no visible muscle definition"
          : "broader chest and neck, thicker torso proportions"
        : bodyType === "average"
          ? sex === "male"
            ? "ordinary average male proportions, no visible muscle definition"
            : "balanced non-slim body proportions"
          : bodyType === "athletic"
            ? sex === "male"
              ? "healthy average male proportions, not muscular, no sculpted chest"
              : "fit but not extreme body proportions"
            : "lean body proportions";
  const clothingCleanPart =
    styleProfile === "cartoonStylized"
      ? "plain clothing only, no logos, no branding, no printed graphics"
      : "clean professional clothing with no visible logos";

  return [
    `${resolvedStyle.imageType} of a${bodyPart} ${age} year old ${ethnicityDesc} ${gender}${facePart}`,
    `${hairColorDesc} ${hairDesc}${facialHairDesc}${glassesDesc}`,
    `wearing ${attireDesc}`,
    `${expressionDesc}${posePart}`,
    genderPresentationPart,
    ethnicityGuardPart,
    ageStylePart,
    expressionGuardPart,
    bodyTypeSpecificPart,
    singleSubjectPart,
    clothingCleanPart,
    styleProfile === "cartoonStylized"
      ? "simple rounded facial features, subtle smile, stylized proportions, semi-cartoon 3d character look, reduced micro-skin detail"
      : "natural lifelike facial proportions",
    `plain ${bgColor} studio background`,
    `${lighting}`,
    `${camera}`,
    resolvedStyle.qualityDescriptors,
  ].join(", ");
}

function getNegativePrompt(styleProfile = "professionalRealistic") {
  return (
    STYLE_PROFILES[styleProfile]?.negativePrompt ||
    STYLE_PROFILES.professionalRealistic.negativePrompt
  );
}

const NEGATIVE_PROMPT = getNegativePrompt("professionalRealistic");

module.exports = {
  HAIR_STYLES_MALE,
  HAIR_STYLES_FEMALE,
  HAIR_COLORS,
  FACIAL_HAIR,
  ATTIRE,
  EXPRESSIONS,
  BODY_TYPES,
  BODY_TYPE_WEIGHTS,
  FACE_SHAPES,
  POSES,
  GLASSES,
  GLASSES_PROBABILITY,
  LIGHTING_STYLES,
  CAMERA_STYLES,
  ETHNICITIES,
  BACKGROUND_COLORS,
  STYLE_PROFILES,
  NEGATIVE_PROMPT,
  getNegativePrompt,
  buildPositivePrompt,
};

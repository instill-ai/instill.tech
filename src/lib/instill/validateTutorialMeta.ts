import { TutorialMeta } from "@/types/instill";

type PartialTutorialMeta = Omit<TutorialMeta, "commit" | "slug">;

export const validateTutorialMeta = (
  path: string,
  data: { [key: string]: any }
): PartialTutorialMeta => {
  // Validate whether tutorial have necessary fields - title
  if (!data.hasOwnProperty("title")) {
    throw new Error(
      `Error occured when generate tutorials - missing title field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - lang
  if (!data.hasOwnProperty("lang")) {
    throw new Error(
      `Error occured when generate tutorials - missing lang field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - description
  if (!data.hasOwnProperty("description")) {
    throw new Error(
      `Error occured when generate tutorials - missing description field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - cvTask
  if (!data.hasOwnProperty("cvTask")) {
    throw new Error(
      `Error occured when generate tutorials - missing cvTask field at ${path}`
    );
  }

  // Validate the cvTask types
  const supportCvTasks = [
    "objectDetection",
    "ocr",
    "imageClassification",
    "instanceSegmentation",
    "keypointDetection",
    "objectDetection",
    "semanticSegmentation",
  ];

  if (!supportCvTasks.includes(data.cvTask)) {
    throw new Error(
      `Error occured when generate tutorials - wrong cvTask at ${path}, expect ${supportCvTasks.join(
        ", "
      )}. Found ${data.cvTask}`
    );
  }

  // Validate whether tutorial have necessary fields - sourceConnector
  if (!data.hasOwnProperty("sourceConnector")) {
    throw new Error(
      `Error occured when generate tutorials - missing sourceConnector field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - destinationConnector
  if (!data.hasOwnProperty("destinationConnector")) {
    throw new Error(
      `Error occured when generate tutorials - missing destinationConnector field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - publishedAt
  if (!data.hasOwnProperty("publishedAt")) {
    throw new Error(
      `Error occured when generate tutorials - missing publishedAt field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - placeholderColor
  if (!data.hasOwnProperty("placeholderColor")) {
    throw new Error(
      `Error occured when generate tutorials - missing placeholderColor field at ${path}`
    );
  }

  console.log(data);

  // Validate placeholderColor value
  const colorList = [
    "bg-instillWarmOrange50",
    "bg-instillLemonYellow50",
    "bg-instillBlue50",
    "bg-instillRed90",
    "bg-instillGreen50",
    "bg-instillNeonBlue50",
    "bg-instillYellow50",
  ];

  if (!colorList.includes(data.placeholderColor)) {
    throw new Error(
      `Error occured when generate tutorials - wrong placeholderColor at ${path}, expect ${colorList.join(
        ", "
      )}. Found ${data.placeholderColor}`
    );
  }

  return data as PartialTutorialMeta;
};

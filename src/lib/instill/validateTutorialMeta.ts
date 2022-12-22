/* eslint-disable @typescript-eslint/no-explicit-any */

import { TutorialMeta } from "@/types/instill";

type PartialTutorialMeta = Omit<TutorialMeta, "commit" | "slug">;

export const validateTutorialMeta = (
  path: string,
  data: { [key: string]: any }
): PartialTutorialMeta => {
  // Validate whether tutorial have necessary fields - title
  if (!Object.prototype.hasOwnProperty.call(data, "title")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing title field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - lang
  if (!Object.prototype.hasOwnProperty.call(data, "lang")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing lang field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - draft
  if (!Object.prototype.hasOwnProperty.call(data, "draft")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing draft field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - description
  if (!Object.prototype.hasOwnProperty.call(data, "description")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing description field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - aiTask
  if (!Object.prototype.hasOwnProperty.call(data, "aiTask")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing cvTask field at ${path}`
    );
  }

  // Validate the aiTask types
  const supportAiTasks = [
    "objectDetection",
    "ocr",
    "imageClassification",
    "instanceSegmentation",
    "keypointDetection",
    "objectDetection",
    "semanticSegmentation",
  ];

  if (!supportAiTasks.includes(data.aiTask)) {
    throw new Error(
      `Error occurred when validate tutorial meta - wrong cvTask at ${path}, expect ${supportAiTasks.join(
        ", "
      )}. Found ${data.aiTask}`
    );
  }

  // Validate whether tutorial have necessary fields - sourceConnector
  if (!Object.prototype.hasOwnProperty.call(data, "sourceConnector")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing sourceConnector field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - destinationConnector
  if (!Object.prototype.hasOwnProperty.call(data, "destinationConnector")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing destinationConnector field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - publishedOn
  if (!Object.prototype.hasOwnProperty.call(data, "publishedOn")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing publishedOn field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - placeholderColor
  if (!Object.prototype.hasOwnProperty.call(data, "placeholderColor")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing placeholderColor field at ${path}`
    );
  }

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
      `Error occurred when validate tutorial meta - wrong placeholderColor at ${path}, expect ${colorList.join(
        ", "
      )}. Found ${data.placeholderColor}`
    );
  }

  // Validate whether tutorial have necessary fields - themeImgSrc
  if (!Object.prototype.hasOwnProperty.call(data, "themeImgSrc")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing themeImgSrc field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - themeImgThumbnailSrc
  if (!Object.prototype.hasOwnProperty.call(data, "themeImgThumbnailSrc")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing themeImgThumbnailSrc field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - useCase
  if (!Object.prototype.hasOwnProperty.call(data, "useCase")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing useCase field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - author
  if (!Object.prototype.hasOwnProperty.call(data, "author")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing author field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - authorGitHubUrl
  if (!Object.prototype.hasOwnProperty.call(data, "authorGitHubUrl")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing authorGitHubUrl field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - authorAvatarSrc
  if (!Object.prototype.hasOwnProperty.call(data, "authorAvatarSrc")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing authorAvatarSrc field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - cvTask
  if (!Object.prototype.hasOwnProperty.call(data, "cvTask")) {
    throw new Error(
      `Error occurred when validate tutorial meta - missing cvTask field at ${path}`
    );
  }

  return data as PartialTutorialMeta;
};

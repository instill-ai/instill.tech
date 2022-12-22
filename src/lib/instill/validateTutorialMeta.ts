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
      `Error occurred when generate tutorials - missing title field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - lang
  if (!Object.prototype.hasOwnProperty.call(data, "lang")) {
    throw new Error(
      `Error occurred when generate tutorials - missing lang field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - description
  if (!Object.prototype.hasOwnProperty.call(data, "description")) {
    throw new Error(
      `Error occurred when generate tutorials - missing description field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - aiTask
  if (!Object.prototype.hasOwnProperty.call(data, "aiTask")) {
    throw new Error(
      `Error occurred when generate tutorials - missing aiTask field at ${path}`
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
      `Error occurred when generate tutorials - wrong aiTask at ${path}, expect ${supportAiTasks.join(
        ", "
      )}. Found ${data.aiTask}`
    );
  }

  // Validate whether tutorial have necessary fields - sourceConnector
  if (!Object.prototype.hasOwnProperty.call(data, "sourceConnector")) {
    throw new Error(
      `Error occurred when generate tutorials - missing sourceConnector field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - destinationConnector
  if (!Object.prototype.hasOwnProperty.call(data, "destinationConnector")) {
    throw new Error(
      `Error occurred when generate tutorials - missing destinationConnector field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - publishedOn
  if (!Object.prototype.hasOwnProperty.call(data, "publishedOn")) {
    throw new Error(
      `Error occurred when generate tutorials - missing publishedOn field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - placeholderColor
  if (!Object.prototype.hasOwnProperty.call(data, "placeholderColor")) {
    throw new Error(
      `Error occurred when generate tutorials - missing placeholderColor field at ${path}`
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
      `Error occured when generate tutorials - wrong placeholderColor at ${path}, expect ${colorList.join(
        ", "
      )}. Found ${data.placeholderColor}`
    );
  }

  // Validate whether tutorial have necessary fields - themeImgSrc
  if (!Object.prototype.hasOwnProperty.call(data, "themeImgSrc")) {
    throw new Error(
      `Error occured when generate tutorials - missing themeImgSrc field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - themeImgThumbnailSrc
  if (!Object.prototype.hasOwnProperty.call(data, "themeImgThumbnailSrc")) {
    throw new Error(
      `Error occured when generate tutorials - missing themeImgThumbnailSrc field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - useCase
  if (!Object.prototype.hasOwnProperty.call(data, "useCase")) {
    throw new Error(
      `Error occured when generate tutorials - missing useCase field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - author
  if (!Object.prototype.hasOwnProperty.call(data, "author")) {
    throw new Error(
      `Error occured when generate tutorials - missing author field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - authorGitHubUrl
  if (!Object.prototype.hasOwnProperty.call(data, "authorGitHubUrl")) {
    throw new Error(
      `Error occured when generate tutorials - missing authorGitHubUrl field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - authorAvatarSrc
  if (!Object.prototype.hasOwnProperty.call(data, "authorAvatarSrc")) {
    throw new Error(
      `Error occured when generate tutorials - missing authorAvatarSrc field at ${path}`
    );
  }

  return data as PartialTutorialMeta;
};

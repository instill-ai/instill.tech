/* eslint-disable @typescript-eslint/no-explicit-any */

import { BlogArticleMeta } from "@/types/instill";

type PartialBlogArticleMeta = Omit<BlogArticleMeta, "commit" | "slug">;

export const validateBlogArticleMeta = (
  path: string,
  data: { [key: string]: any }
): PartialBlogArticleMeta => {
  // Validate whether blog article have necessary fields - title
  if (!Object.prototype.hasOwnProperty.call(data, "title")) {
    throw new Error(
      `Error occured when validate blog article meta - missing title field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - lang
  if (!Object.prototype.hasOwnProperty.call(data, "lang")) {
    throw new Error(
      `Error occured when validate blog article meta - missing lang field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - draft
  if (!Object.prototype.hasOwnProperty.call(data, "draft")) {
    throw new Error(
      `Error occured when validate blog article meta - missing draft field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - description
  if (!Object.prototype.hasOwnProperty.call(data, "description")) {
    throw new Error(
      `Error occured when validate blog article meta - missing description field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - publishedOn
  if (!Object.prototype.hasOwnProperty.call(data, "publishedOn")) {
    throw new Error(
      `Error occured when validate blog article meta - missing publishedOn field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - placeholderColor
  if (!Object.prototype.hasOwnProperty.call(data, "placeholderColor")) {
    throw new Error(
      `Error occured when validate blog article meta - missing placeholderColor field at ${path}`
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
      `Error occured when validate blog article meta - wrong placeholderColor at ${path}, expect ${colorList.join(
        ", "
      )}. Found ${data.placeholderColor}`
    );
  }

  // Validate whether blog article have necessary fields - themeImgSrc
  if (!Object.prototype.hasOwnProperty.call(data, "themeImgSrc")) {
    throw new Error(
      `Error occured when validate blog article meta - missing themeImgSrc field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - themeImgThumbnailSrc
  if (!Object.prototype.hasOwnProperty.call(data, "themeImgThumbnailSrc")) {
    throw new Error(
      `Error occured when validate blog article meta - missing themeImgThumbnailSrc field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - author
  if (!Object.prototype.hasOwnProperty.call(data, "author")) {
    throw new Error(
      `Error occured when validate blog article meta - missing author field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - authorGitHubUrl
  if (!Object.prototype.hasOwnProperty.call(data, "authorGitHubUrl")) {
    throw new Error(
      `Error occured when validate blog article meta - missing authorGitHubUrl field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - authorAvatarSrc
  if (!Object.prototype.hasOwnProperty.call(data, "authorAvatarSrc")) {
    throw new Error(
      `Error occured when validate blog article meta - missing authorAvatarSrc field at ${path}`
    );
  }

  // Validate whether blog article have necessary fields - category
  if (!Object.prototype.hasOwnProperty.call(data, "category")) {
    throw new Error(
      `Error occured when validate blog article meta - missing category field at ${path}`
    );
  }

  return data as PartialBlogArticleMeta;
};

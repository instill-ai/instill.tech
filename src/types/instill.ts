import { CommitMeta } from "@/lib/github/type";

export type PositionInfo = {
  id: string;
  slug: string;
  name: string;
  description: string;
  workType: string;
  location: string;
  stockOptions: string;
  packageUK: string;
  packageTW: string;
  postDate: string;
};

export type MemberDetails = {
  id: string;
  name: string;
  githubLink: string;
  linkedinLink: string;
  avatarDesktop: string;
  avatarWithFrameDesktop: string;
  avatarWithFrameMobile: string;
  titles: string[];
  kernelColor: string;
  kernelColorRectLocation: string[];
  order: number;
  type: string;
  openRoleTitle: string;
  openRoleType: string;
  openRoleLocation: string;
  openRoleLink: string;
};

export type Nullable<T> = T | null;

export type TutorialMeta = {
  title: string;
  lang: string;
  draft: boolean;
  description: string;
  aiTask: AiTask;
  sourceConnector: string;
  destinationConnector: string;
  commit: CommitMeta;
  slug: string;
  publishedOn: string;
  placeholderColor: TutorialPlaceholderColor;
  themeImgSrc: string;
  themeImgAlt?: string;
  themeImgThumbnailSrc: string;
  useCase: string;
  author: string;
  authorAvatarSrc: string;
  authorGitHubUrl: string;
};

export type BlogArticleMeta = {
  title: string;
  lang: string;
  draft: boolean;
  description: string;
  commit: CommitMeta;
  slug: string;
  publishedOn: string;
  themeImgSrc: string;
  themeImgAlt?: string;
  themeImgThumbnailSrc: string;
  placeholderColor: TutorialPlaceholderColor;
  author: string;
  authorAvatarSrc: string;
  authorGitHubUrl: string;
  category: string;
};

export type AiTask =
  | "ObjectDetection"
  | "Ocr"
  | "ImageClassification"
  | "InstanceSegmentation"
  | "KeypointDetection"
  | "ObjectDetection"
  | "SemanticSegmentation"
  | "TextToImage"
  | "TextGeneration"
  | "Null";

export type TutorialPlaceholderColor =
  | "bg-instillWarmOrange50"
  | "bg-instillLemonYellow50"
  | "bg-instillBlue50"
  | "bg-instillRed90"
  | "bg-instillGreen50"
  | "bg-instillNeonBlue50"
  | "bg-instillYellow50";

export type PageMeta = {
  pageTitle: string;
  siteName: string;
  pageDescription?: string;
};

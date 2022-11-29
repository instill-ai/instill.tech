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
  cv_task: "string";
  source_connector: string;
  destination_connector: string;
  commit: CommitMeta;
};

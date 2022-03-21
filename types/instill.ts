export type TPositionDetails = {
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

export type TMemberDetails = {
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

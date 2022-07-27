export type SidebarElement = {
  header?: boolean;
  link?: string;
  text: string;
  collapsible?: boolean;
};

export type SidebarSection = {
  text: string;
  collapsible: boolean;
  children: SidebarElement[];
};

export type Sidebar = {
  leftSidebar: {
    items: SidebarElement[];
  };
  rightSidebar: {
    tableOfContentHeaders: string[];
  };
};

export type NavBar = {
  title: string;
  logo: {
    alt: string;
    src: string;
    srcDark?: string;
    width: number;
    height: number;
  };
  items: NavbarItem[];
};

export type NavBarInteriorLinkItem = {
  to: string;
  label: string;
  position: "right" | "left";
};

export type NavbarExteriorLinkItem = {
  href: string;
  className: string;
  position: "right" | "left";

  // If src is present, label will not be displayed, it will display the icon and the aria-label with label as value
  label: string;
  icon?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type NavbarItem = NavBarInteriorLinkItem | NavbarExteriorLinkItem;

export const isInteriorLink = (
  item: NavbarItem
): item is NavBarInteriorLinkItem => {
  if ("to" in item) return true;
  return false;
};

export const isExteriorLink = (
  item: NavbarItem
): item is NavbarExteriorLinkItem => {
  if ("href" in item) return true;
  return false;
};

/**
 *
 * Every time you add another frontmatter data key into markdown, we encourage you put the type here.
 * You could get some helps from IDE or get more error info from build failed message.
 */

export type Frontmatter = {
  title: string;
  description: string;
  lang?: string;
  date?: string;
  draft?: boolean;
  author?: string;
  dir?: string;
  feature?: {
    src: string;
    alt: string;
  };
};

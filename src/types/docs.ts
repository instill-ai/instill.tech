import { ReactElement } from "react-markdown/lib/react-markdown";

export type SidebarItem = {
  header?: boolean;
  link?: string;
  text: string;
  collapsible?: boolean;
};

export type SidebarSections = {
  collapsible?: boolean;
  text: string;
  link?: string;
  items: SidebarItem[];
};

export type SidebarSection = {
  text: string;
  collapsible: boolean;
  children: SidebarItem[];
};

export type Logo = {
  alt: string;
  src: string;
  srcDark?: string;
  width: number;
  height: number;
};

export type Sidebar = {
  leftSidebar: {
    sections: SidebarSections[];
    logo?: Logo;
  };
  rightSidebar: {
    tableOfContentHeaders: string[];
  };
};

export type NavBar = {
  title?: string;
  logo?: Logo;
  items: NavbarItem[];
};

export type NavBarInteriorLinkItem = {
  to: string;
  label: string;
  position: "right" | "left";
  iconElement?: ReactElement;
  icon?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type NavbarExteriorLinkItem = {
  href: string;
  className: string;
  position: "right" | "left";

  // If src is present, label will not be displayed, it will display the icon and the aria-label with label as value
  label: string;
  iconElement?: ReactElement;
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
};

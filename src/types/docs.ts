import { ReactElement } from "react";

export type SidebarItem = {
  link: string;
  text: string;
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

export type NAV = {
  title?: string;
  logo?: Logo;
  items: NavbarItem[];
};

export type NavInteriorLinkItem = {
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

export type NavExteriorLinkItem = {
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

export type NavbarItem = NavInteriorLinkItem | NavExteriorLinkItem;

export const isInteriorLink = (
  item: NavbarItem
): item is NavInteriorLinkItem => {
  if ("to" in item) return true;
  return false;
};

export const isExteriorLink = (
  item: NavbarItem
): item is NavExteriorLinkItem => {
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

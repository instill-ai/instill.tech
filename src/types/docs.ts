import { ReactElement } from "react";
import { InstillAppType } from "./instill";

export type SidebarItem = {
  link: string;
  text: string;
};

export type LogoConfig = { element: ReactElement; href: string };

export type SidebarSections = {
  collapsible?: boolean;
  text: string;
  link?: string;
  items: SidebarItem[];
  appType?: InstillAppType;
};

export type SidebarSection = {
  text: string;
  collapsible: boolean;
  children: SidebarItem[];
};

export type Sidebar = {
  leftSidebar: {
    sections: SidebarSections[];
    logo?: LogoConfig;
  };
  rightSidebar: {
    tableOfContentHeaders: string[];
  };
};

export type NavConfig = {
  title?: string;
  logo?: LogoConfig;
  items: NavbarItem[];
};

export type NavInteriorLinkItem = {
  key: string;
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
  key: string;
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

export type NavbarBorderItem = {
  key: string;
  position: "right" | "left";
  border: boolean;
};

export type NavbarItem =
  | NavInteriorLinkItem
  | NavExteriorLinkItem
  | NavbarBorderItem;

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

export const isBorder = (item: NavbarItem): item is NavbarBorderItem => {
  if ("border" in item) return true;
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

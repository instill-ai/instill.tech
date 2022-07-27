import { NavBar, Sidebar } from "@/types/docs";

export const SITE = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const SIDEBAR: Sidebar = {
  leftSidebar: {
    items: [
      { header: true, text: "Intro", collapsible: true },
      { text: "Astro", link: "astro" },
      { text: "React", link: "react" },
      { text: "Svelte", link: "svelte" },
      { text: "Vue", link: "vue" },
      { text: "Page 5", link: "page-5" },
      { text: "Page 6", link: "page-6" },
      { header: true, text: "Quick start", collapsible: false },
      { text: "Page 7", link: "page-7" },
      { text: "Page 8", link: "page-8" },
    ],
  },
  rightSidebar: {
    tableOfContentHeaders: ["h1", "h2", "h3"],
  },
};

export const NAVBAR: NavBar = {
  title: "Visual Data Preparation",
  logo: {
    src: "/logo.svg",
    width: 40,
    height: 30,
    alt: "Nitro logo",
  },
  items: [
    {
      href: "https://github.com/EiffelFly/nitro",
      className: "github-social-link",
      icon: {
        src: "/github.svg",
        width: 30,
        height: 30,
        alt: "github icon",
      },
      position: "right",
      label: "github",
    },
  ],
};

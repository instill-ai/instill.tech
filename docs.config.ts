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

/**
 *
 * ### About section.link
 * - If the section has link props, it will has its own hyperlink to target page, which is useful to overview page.
 * - If you have setup the section link, the section will automatically be un-collapsable. And we will hide the collapsable button. We suggest that you manually set collapsable to false if the section has its own link.
 *
 */

export const SIDEBAR: Sidebar = {
  leftSidebar: {
    sections: [
      {
        text: "Start here",
        collapsible: true,
        items: [
          { text: "Getting started", link: "/docs/start-here/getting-started" },
          {
            text: "Build your first pipeline",
            link: "/docs/start-here/build-your-first-pipeline",
          },
          { text: "Configuration", link: "/docs/start-here/configuration" },
          { text: "Roadmap", link: "/docs/start-here/roadmap" },
          { text: "FAQ", link: "/docs/start-here/faq" },
        ],
      },
      {
        text: "Core Concepts",
        collapsible: true,
        items: [
          { text: "Overview", link: "/docs/core-concepts/overview" },
          { text: "Pipeline", link: "/docs/core-concepts/pipeline" },
          { text: "Connector", link: "/docs/core-concepts/connector" },
          { text: "Model", link: "/docs/core-concepts/model" },
          { text: "CV Task", link: "/docs/core-concepts/cv-task" },
        ],
      },
      {
        text: "Connectors",
        collapsible: false,
        link: "/docs/connectors/overview",
        items: [],
      },
      {
        text: "Sources",
        collapsible: true,
        items: [
          {
            text: "Real-time Source HTTP",
            link: "/docs/connectors/definitions/source-http-directness",
          },
          {
            text: "Real-time Source gRPC",
            link: "/docs/connectors/definitions/source-grpc-directness",
          },
        ],
      },
      {
        text: "Destinations",
        collapsible: true,
        items: [
          {
            text: "Real-time Destination HTTP",
            link: "/docs/connectors/definitions/destination-http-directness",
          },
          {
            text: "Real-time Destination gRPC",
            link: "/docs/connectors/definitions/destination-grpc-directness",
          },
        ],
      },
      {
        text: "Create Models",
        collapsible: true,
        items: [],
      },
      {
        text: "Import Models",
        collapsible: true,
        items: [
          {
            text: "Import Local Models",
            link: "/docs/models/definitions/local",
          },
          {
            text: "Import Models from GitHub",
            link: "/docs/models/definitions/github",
          },
          {
            text: "Import ArtiVC Managed Models",
            link: "/docs/models/definitions/artivc",
          },
          {
            text: "Import Models from Hugging Face",
            link: "/docs/models/definitions/huggingface",
          },
        ],
      },
      {
        text: "Instill Cloud",
        collapsible: false,
        link: "/docs/instill-cloud",
        items: [],
      },
      {
        text: "Contribution",
        collapsible: false,
        link: "/docs/contribution",
        items: [],
      },
      {
        text: "Reference",
        collapsible: true,
        items: [
          {
            text: "API documentation",
            link: "/docs/reference/api-doc",
          },
        ],
      },
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
    alt: "Visual Data Preparation (VDP) logo",
  },
  items: [
    {
      href: "https://github.com/instill-ai/vdp",
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

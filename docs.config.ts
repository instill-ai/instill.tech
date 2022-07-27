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
    sections: [
      {
        text: "Concept",
        collapsible: true,
        items: [
          { text: "What is VDP", link: "/docs/concepts/vdp" },
          { text: "Pipeline", link: "/docs/concepts/pipeline" },
          { text: "Model", link: "/docs/concepts/model" },
          { text: "Connector", link: "/docs/concepts/connector" },
        ],
      },
      {
        text: "Connector",
        collapsible: true,
        items: [
          {
            text: "Real-time Destination gRPC",
            link: "/docs/connectors/definitions/destination-grpc-directness",
          },
          {
            text: "Real-time Destination HTTP",
            link: "/docs/connectors/definitions/destination-http-directness",
          },
          {
            text: "Real-time Source gRPC",
            link: "/docs/connectors/definitions/source-grpc-directness",
          },
          {
            text: "Real-time Source HTTP",
            link: "/docs/connectors/definitions/source-http-directness",
          },
        ],
      },
      {
        text: "Model",
        collapsible: true,
        items: [
          {
            text: "Import ArtiVC Managed Models",
            link: "/docs/models/definitions/artivc",
          },
          {
            text: "Import Models from GitHub",
            link: "/docs/models/definitions/github",
          },
          {
            text: "Import Models from Hugging Face",
            link: "/docs/models/definitions/huggingface",
          },
          {
            text: "Import Local Models",
            link: "/docs/models/definitions/local",
          },
        ],
      },
      {
        text: "VDP OS",
        collapsible: true,
        items: [
          {
            text: "Getting started",
            link: "/docs/vdp-os/getting-started",
          },
          {
            text: "Build your first pipeline",
            link: "/docs/vdp-os/build-your-first-pipeline",
          },
          {
            text: "Configuration",
            link: "/docs/vdp-os/configuration",
          },
        ],
      },
      {
        text: "VDP Cloud",
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/docs/vdp-cloud/overview",
          },
        ],
      },
      {
        text: "Troubleshoot",
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/docs/troubleshoot/troubleshooting-faq",
          },
        ],
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

import { NavBar, Sidebar } from "@/types/docs";
import { DiscordIcon, GitHubIcon } from "@instill-ai/design-system";

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
    logo: {
      src: "/images/vdp-logo-white-bg.svg",
      width: 152,
      height: 54,
      alt: "VDP's logo",
    },
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
          { text: "Instill Cloud", link: "/docs/start-here/instill-cloud" },
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
        text: "Prepare Models",
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/docs/prepare-models/overview",
          },
          {
            text: "Add model card",
            link: "/docs/prepare-models/model-card",
          },
          {
            text: "Prepare pre-processing model",
            link: "/docs/prepare-models/pre-processing",
          },
          {
            text: "Prepare post-processing model",
            link: "/docs/prepare-models/post-processing",
          },
        ],
      },
      {
        text: "Import Models",
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/docs/import-models/overview",
          },
          {
            text: "Import Local Models",
            link: "/docs/import-models/local",
          },
          {
            text: "Import Models from GitHub",
            link: "/docs/import-models/github",
          },
          {
            text: "Import ArtiVC Managed Models",
            link: "/docs/import-models/artivc",
          },
          {
            text: "Import Models from Hugging Face",
            link: "/docs/import-models/huggingface",
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
  logo: {
    src: "/images/vdp-logo-white-bg.svg",
    width: 152,
    height: 54,
    alt: "VDP's logo",
  },
  items: [
    {
      to: "/",
      className: "",
      position: "right",
      label: "Product website",
    },
    {
      href: process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK,
      className: "discord-social-link",
      iconElement: (
        <DiscordIcon
          width="w-[30px]"
          height="h-[30px]"
          color="fill-instillGrey95"
          position="my-auto"
        />
      ),
      position: "right",
      label: "discord",
    },
    {
      href: "https://github.com/instill-ai/vdp",
      className: "github-social-link",
      iconElement: (
        <GitHubIcon
          width="w-[30px]"
          height="h-[30px]"
          color="fill-instillGrey95"
          position="my-auto"
        />
      ),
      position: "right",
      label: "github",
    },
  ],
};

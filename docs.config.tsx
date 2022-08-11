import { NavBar, Sidebar } from "@/types/docs";
import { DiscordIcon, GitHubIcon } from "@instill-ai/design-system";

export const SITE = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
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
      width: 100,
      height: 36,
      alt: "VDP's logo",
    },
    sections: [
      {
        text: "Start here",
        collapsible: true,
        items: [
          { text: "Getting started", link: "/docs/start-here/getting-started" },
          { text: "Configuration", link: "/docs/start-here/configuration" },
          { text: "Roadmap", link: "/docs/start-here/roadmap" },
          { text: "FAQ", link: "/docs/start-here/faq" },
          { text: "Instill Cloud", link: "/docs/start-here/instill-cloud" },
        ],
      },
      {
        text: "Tutorials",
        collapsible: true,
        items: [
          {
            text: "Build a SYNC classification pipeline",
            link: "/docs/tutorials/build-a-sync-cls-pipeline",
          },
          {
            text: "Build an ASYNC object detection pipeline",
            link: "/docs/tutorials/build-an-async-det-pipeline",
          },
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
        text: "Source Connectors",
        collapsible: true,
        items: [
          { text: "Overview", link: "/docs/source-connectors/overview" },
          { text: "HTTP", link: "/docs/source-connectors/http" },
          { text: "gRPC", link: "/docs/source-connectors/grpc" },
        ],
      },
      {
        text: "Destination Connectors",
        collapsible: true,
        items: [
          { text: "Overview", link: "/docs/destination-connectors/overview" },
          { text: "HTTP", link: "/docs/destination-connectors/http" },
          { text: "gRPC", link: "/docs/destination-connectors/grpc" },
          { text: "Airbyte", link: "/docs/destination-connectors/airbyte" },
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
            text: "Model card",
            link: "/docs/prepare-models/model-card",
          },
          {
            text: "Pre-processing",
            link: "/docs/prepare-models/pre-processing",
          },
          {
            text: "Post-processing",
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
            text: "Local",
            link: "/docs/import-models/local",
          },
          {
            text: "GitHub",
            link: "/docs/import-models/github",
          },
          {
            text: "ArtiVC",
            link: "/docs/import-models/artivc",
          },
          {
            text: "Hugging Face",
            link: "/docs/import-models/huggingface",
          },
        ],
      },
      {
        text: "Development",
        collapsible: true,
        items: [
          {
            text: "Local setup",
            link: "/docs/development/setup-local-development",
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

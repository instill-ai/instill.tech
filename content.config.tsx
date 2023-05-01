import { NavConfig, Sidebar } from "@/types/docs";
import { DiscordIcon, GitHubIcon } from "@instill-ai/design-system";

const SITE = {
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

const SIDEBAR: Sidebar = {
  leftSidebar: {
    logo: {
      src: "/images/vdp-logo-white-bg.svg",
      width: 100,
      height: 36,
      alt: "VDP's logo",
    },
    sections: [
      {
        text: "Welcome",
        link: "/docs/welcome",
        items: [],
      },
      {
        text: "Instill Cloud",
        collapsible: true,
        items: [
          {
            text: "Getting started",
            link: "/docs/instill-cloud/getting-started",
          },
          {
            text: "Using Instill Cloud",
            link: "/docs/instill-cloud/using-instill-cloud",
          },
        ],
      },
      {
        text: "VDP",
        collapsible: true,
        items: [
          { text: "Getting started", link: "/docs/vdp/getting-started" },
          { text: "Configuration", link: "/docs/vdp/configuration" },
          { text: "Roadmap", link: "/docs/vdp/roadmap" },
          { text: "FAQ", link: "/docs/vdp/faq" },
        ],
      },
      {
        text: "Deploy VDP",
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/docs/deployment/overview",
          },
          {
            text: "Docker Compose",
            link: "/docs/deployment/docker-compose",
          },
          {
            text: "Kubernetes using Helm",
            link: "/docs/deployment/kubernetes-using-helm",
          },
        ],
      },
      {
        text: "Core Concepts",
        collapsible: true,
        items: [
          { text: "Overview", link: "/docs/core-concepts/overview" },
          { text: "Pipeline", link: "/docs/core-concepts/pipeline" },
          {
            text: "Data connector",
            link: "/docs/core-concepts/data-connector",
          },
          { text: "Model", link: "/docs/core-concepts/model" },
          { text: "AI task", link: "/docs/core-concepts/ai-task" },
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
            text: "System architecture",
            link: "/docs/development/system-architecture",
          },
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

const NAV: NavConfig = {
  logo: {
    src: "/images/vdp-logo-white-bg.svg",
    width: 100,
    height: 36,
    alt: "VDP's logo",
  },
  items: [
    {
      key: "docs-nav-blog",
      to: "/blog",
      className: "",
      position: "right",
      label: "Blog",
    },
    {
      key: "docs-nav-tutorials",
      to: "/tutorials",
      className: "",
      position: "right",
      label: "Tutorial",
    },
    {
      key: "docs-nav-product-webiste",
      to: "/",
      className: "",
      position: "right",
      label: "Product website",
    },
    {
      key: "docs-nav-instill-cloud-link",
      href: "https://console.instill.tech",
      className: "",
      position: "right",
      label: "Instill Cloud",
    },
    {
      key: "docs-nav-item-1",
      position: "right",
      border: true,
    },
    {
      key: "docs-nav-item-border-discord-link",
      href: process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK || "/",
      className: "discord-social-link",
      iconElement: (
        <DiscordIcon
          width="w-[24px]"
          height="h-[24px]"
          color="fill-instillGrey95 dark:fill-instillGrey15 hover:fill-instillBlue50 dark:hover:fill-instillBlue50"
          position="my-auto"
        />
      ),
      position: "right",
      label: "discord",
    },
    {
      key: "docs-nav-item--github-link",
      href: "https://github.com/instill-ai/vdp",
      className: "github-social-link",
      iconElement: (
        <GitHubIcon
          width="w-[24px]"
          height="h-[24px]"
          color="fill-instillGrey95 dark:fill-instillGrey15 hover:fill-instillBlue50 dark:hover:fill-instillBlue50"
          position="my-auto"
        />
      ),
      position: "right",
      label: "github",
    },
  ],
};

export const docsConfig = {
  site: SITE,
  nav: NAV,
  sidebar: SIDEBAR,
};

export const BlogCategories = [
  "Home",
  "Insights",
  "Our Story",
  "Product Updates",
] as const;

export type BlogCategory = typeof BlogCategories[number];

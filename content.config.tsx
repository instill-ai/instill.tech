import { getApplicationType } from "@/lib/instill";
import { applicationName } from "@/lib/instill/applicationType";
import { LogoConfig, NavConfig, Sidebar, SidebarSections } from "@/types/docs";
import { InstillAppType } from "@/types/instill";
import {
  DiscordIcon,
  GitHubIcon,
  Logo,
  ModelLogo,
  VdpLogo,
  Logos,
  Icons,
  TwitterIcon,
} from "@instill-ai/design-system";

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

const SECTIONS: SidebarSections[] = [
  {
    text: "Welcome",
    link: "/docs/instill-cloud/welcome",
    items: [],
    appType: "instill-cloud",
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
      { text: "FAQ", link: "/docs/instill-cloud/faq" },
    ],
    appType: "instill-cloud",
  },
  {
    text: "Welcome",
    link: "/docs/vdp/welcome",
    items: [],
    appType: "vdp",
  },
  {
    text: "VDP",
    collapsible: true,
    items: [
      { text: "Getting started", link: "/docs/vdp/getting-started" },
      { text: "Configuration", link: "/docs/vdp/configuration" },
      { text: "Roadmap", link: "/docs/vdp/roadmap" },
      { text: "License", link: "/docs/vdp/license" },
    ],
    appType: "vdp",
  },
  {
    text: "Deployment",
    collapsible: true,
    items: [
      {
        text: "Overview",
        link: "/docs/vdp/deployment/overview",
      },
      {
        text: "Docker Compose",
        link: "/docs/vdp/deployment/docker-compose",
      },
      {
        text: "Kubernetes using Helm",
        link: "/docs/vdp/deployment/kubernetes-using-helm",
      },
    ],
    appType: "vdp",
  },
  {
    text: "Core Concepts",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/core-concepts/overview" },
      { text: "Pipeline", link: "/docs/vdp/core-concepts/pipeline" },
      { text: "Connector", link: "/docs/vdp/connectors/overview" },
    ],
    appType: "vdp",
  },
  {
    text: "Operators",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/operators/overview" },
      { text: "Trigger", link: "/docs/vdp/operators/trigger" },
      { text: "Response", link: "/docs/vdp/operators/response" },
    ],
    appType: "vdp",
  },
  {
    text: "AI Connector",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/ai-connectors/overview" },
      { text: "Instill Model", link: "/docs/vdp/ai-connectors/instill-model" },
      { text: "Stability AI", link: "/docs/vdp/ai-connectors/stability-ai" },
      { text: "Open AI", link: "/docs/vdp/ai-connectors/openai" },
    ],
    appType: "vdp",
  },
  {
    text: "Blockchain Connector",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/blockchain-connectors/overview" },
      {
        text: "Numbers Protocol",
        link: "/docs/vdp/blockchain-connectors/numbers-protocol",
      },
    ],
    appType: "vdp",
  },
  {
    text: "Data Connector",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/data-connectors/overview" },
      { text: "Airbyte", link: "/docs/vdp/data-connectors/airbyte" },
    ],
    appType: "vdp",
  },
  {
    text: "Welcome",
    link: "/docs/model/welcome",
    items: [],
    appType: "model",
  },
  {
    text: "Instill Model",
    collapsible: true,
    items: [
      { text: "Getting started", link: "/docs/model/getting-started" },
      { text: "Roadmap", link: "/docs/model/roadmap" },
    ],
    appType: "model",
  },
  {
    text: "Deployment",
    collapsible: true,
    items: [
      {
        text: "Overview",
        link: "/docs/model/deployment/overview",
      },
      {
        text: "Docker Compose",
        link: "/docs/model/deployment/docker-compose",
      },
      {
        text: "Kubernetes using Helm",
        link: "/docs/model/deployment/kubernetes-using-helm",
      },
    ],
    appType: "model",
  },
  {
    text: "Core Concepts",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/model/core-concepts/overview" },
      { text: "AI task", link: "/docs/model/core-concepts/ai-task" },
    ],
    appType: "model",
  },
  {
    text: "Prepare Models",
    collapsible: true,
    items: [
      {
        text: "Overview",
        link: "/docs/model/prepare-models/overview",
      },
      {
        text: "Model card",
        link: "/docs/model/prepare-models/model-card",
      },
      {
        text: "Pre-processing",
        link: "/docs/model/prepare-models/pre-processing",
      },
      {
        text: "Post-processing",
        link: "/docs/model/prepare-models/post-processing",
      },
    ],
    appType: "model",
  },
  {
    text: "Import Models",
    collapsible: true,
    items: [
      {
        text: "Overview",
        link: "/docs/model/import-models/overview",
      },
      {
        text: "Local",
        link: "/docs/model/import-models/local",
      },
      {
        text: "GitHub",
        link: "/docs/model/import-models/github",
      },
      {
        text: "ArtiVC",
        link: "/docs/model/import-models/artivc",
      },
      {
        text: "Hugging Face",
        link: "/docs/model/import-models/huggingface",
      },
    ],
    appType: "model",
  },
  {
    text: "Development",
    collapsible: true,
    items: [
      {
        text: "System architecture",
        link: "/docs/vdp/development/system-architecture",
      },
      {
        text: "Local setup",
        link: "/docs/vdp/development/setup-local-development",
      },
    ],
    appType: "vdp",
  },
];

// Parse logo a/c to appType
export function getLogoConfig(
  appType: InstillAppType,
  isDark: boolean
): LogoConfig {
  if (appType === "vdp") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/docs/vdp/welcome",
    };
  }

  if (appType === "instill-cloud") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/docs/instill-cloud/welcome",
    };
  }

  if (appType === "model") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/docs/model/welcome",
    };
  }

  if (appType === "core") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/docs/core/welcome",
    };
  }

  throw new Error("Invalid appType");
}

// Parse menu items a/c to appType
export function getSidebarSections(appType: InstillAppType) {
  return SECTIONS.filter((section) => section?.appType === appType);
}

// Construct the sidebar items
export function getSideBar(appType: InstillAppType, isDark: boolean): Sidebar {
  return {
    leftSidebar: {
      logo: getLogoConfig(appType, isDark),
      sections: getSidebarSections(appType),
    },
    rightSidebar: {
      tableOfContentHeaders: ["h1", "h2", "h3"],
    },
  };
}

// Construct the navbar items
export function getNavbar(appType: InstillAppType, isDark: boolean): NavConfig {
  return {
    logo: getLogoConfig(appType, isDark),
    title: appType,
    items: [
      {
        key: "docs-nav-docs",
        href: "/docs/core/welcome",
        className: "navbar-dropdown-menu",
        position: "left",
        label: "Instill Core",
        iconElement: (
          <Icons.ChevronDown className="navbar-dropdown-menu my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
        ),
        items: [
          {
            key: "docs-nav-vdp-welcome",
            to: "/docs/vdp/welcome",
            className: "",
            position: "right",
            label: "VDP",
          },
          {
            key: "docs-nav-model-welcome",
            to: "/docs/model/welcome",
            className: "",
            position: "right",
            label: "Model",
          },
        ],
      },
      {
        key: "docs-nav-instill-cloud-welcome",
        to: "/docs/instill-cloud/welcome",
        className: "",
        position: "left",
        label: "Instill Cloud",
      },
      {
        key: "docs-nav-dropdown-menu",
        href: "/",
        className: "",
        position: "right",
        label: "",
        iconElement: (
          <Icons.Menu01 className="my-auto h-5 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
        ),
        items: [
          {
            key: "docs-nav-dropdown-resources",
            position: "right",
            border: true,
            label: "Resources",
          },
          {
            key: "docs-nav-dropdown-product-website",
            href: "/",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "Product Website",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-tutorials",
            href: "/tutorials",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "Tutorials",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-blog",
            href: "/blog",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "Blog",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-newsletter",
            href: "/newsletter",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "Newsletter",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-help",
            position: "right",
            border: false,
            label: "Help",
          },
          {
            key: "docs-nav-dropdown-help",
            position: "right",
            border: true,
            label: "Help",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-discord",
            href: process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK || "/",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "Discord",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-github-disussions",
            href: "https://github.com/orgs/instill-ai/discussions",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "GitHub Disussions",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-github-issues",
            href: "https://github.com/instill-ai/community/issues",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "GitHub Issues",
            iconElement: (
              <Icons.ArrowUpRight className="h-4 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
        ],
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
        label: "",
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
        label: "",
      },
      {
        key: "docs-nav-item--twitter-link",
        href: "https://twitter.com/instill_tech",
        className: "twitter-social-link",
        iconElement: (
          <TwitterIcon
            width="w-[24px]"
            height="h-[24px]"
            color="fill-instillGrey95 dark:fill-instillGrey15 hover:fill-instillBlue50 dark:hover:fill-instillBlue50"
            position="my-auto"
          />
        ),
        position: "right",
        label: "",
      },
    ],
  };
}

// main config function
export function docsConfig(appType: InstillAppType, isDark = false) {
  return {
    site: SITE,
    nav: getNavbar(appType, isDark),
    sidebar: getSideBar(appType, isDark),
  };
}

export const BlogCategories = [
  "Home",
  "Insights",
  "Our Story",
  "Product Updates",
] as const;

export type BlogCategory = typeof BlogCategories[number];

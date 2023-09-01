import { applicattionName } from "@/lib/instill/applicationType";
import { LogoConfig, NavConfig, Sidebar, SidebarSections } from "@/types/docs";
import { InstillAppType } from "@/types/instill";
import {
  DiscordIcon,
  GitHubIcon,
  Logos,
  Icons,
} from "@instill-ai/design-system";

import { useTranslation } from "next-i18next";

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
    text: "common:sidebarSections.welcome",
    link: "/docs/instill-cloud/welcome",
    items: [],
    appType: "instill-cloud",
  },
  {
    text: "common:sidebarSections.instillCloud",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.gettingStarted",
        link: "/docs/instill-cloud/getting-started",
      },
      {
        text: "common:sidebarSections.usingInstillCloud",
        link: "/docs/instill-cloud/using-instill-cloud",
      },
      {
        text: "common:sidebarSections.faq",
        link: "/docs/instill-cloud/faq",
      },
    ],
    appType: "instill-cloud",
  },
  {
    text: "common:sidebarSections.welcome",
    link: "/docs/vdp/welcome",
    items: [],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.vdp",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.gettingStarted",
        link: "/docs/vdp/getting-started",
      },
      {
        text: "common:sidebarSections.configuration",
        link: "/docs/vdp/configuration",
      },
      {
        text: "common:sidebarSections.roadmap",
        link: "/docs/vdp/roadmap",
      },
      {
        text: "common:sidebarSections.license",
        link: "/docs/vdp/license",
      },
    ],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.deployment",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/vdp/deployment/overview",
      },
      {
        text: "common:sidebarSections.dockerCompose",
        link: "/docs/vdp/deployment/docker-compose",
      },
      {
        text: "common:sidebarSections.kubernetesUsingHelm",
        link: "/docs/vdp/deployment/kubernetes-using-helm",
      },
    ],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.coreConcepts",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/vdp/core-concepts/overview",
      },
      {
        text: "common:sidebarSections.pipeline",
        link: "/docs/vdp/core-concepts/pipeline",
      },
      {
        text: "common:sidebarSections.connector",
        link: "/docs/vdp/connectors/overview",
      },
    ],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.operators",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/vdp/operators/overview",
      },
      {
        text: "common:sidebarSections.trigger",
        link: "/docs/vdp/operators/trigger",
      },
      {
        text: "common:sidebarSections.response",
        link: "/docs/vdp/operators/response",
      },
    ],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.aiConnector",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/vdp/ai-connectors/overview",
      },
      {
        text: "common:sidebarSections.instillModel",
        link: "/docs/vdp/ai-connectors/instill-model",
      },
      {
        text: "common:sidebarSections.stabilityAI",
        link: "/docs/vdp/ai-connectors/stability-ai",
      },
      {
        text: "common:sidebarSections.openAI",
        link: "/docs/vdp/ai-connectors/openai",
      },
    ],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.blockchainConnector",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/vdp/blockchain-connectors/overview",
      },
      {
        text: "common:sidebarSections.numbersProtocol",
        link: "/docs/vdp/blockchain-connectors/numbers-protocol",
      },
    ],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.dataConnector",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/vdp/data-connectors/overview",
      },
      {
        text: "common:sidebarSections.airbyte",
        link: "/docs/vdp/data-connectors/airbyte",
      },
    ],
    appType: "vdp",
  },
  {
    text: "common:sidebarSections.welcome",
    link: "/docs/model/welcome",
    items: [],
    appType: "model",
  },
  {
    text: "common:sidebarSections.instillModel",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.gettingStarted",
        link: "/docs/model/getting-started",
      },
      { text: "common:sidebarSections.roadmap", link: "/docs/model/roadmap" },
    ],
    appType: "model",
  },
  {
    text: "common:sidebarSections.deployment",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/model/deployment/overview",
      },
      {
        text: "common:sidebarSections.dockerCompose",
        link: "/docs/model/deployment/docker-compose",
      },
      {
        text: "common:sidebarSections.kubernetesUsingHelm",
        link: "/docs/model/deployment/kubernetes-using-helm",
      },
    ],
    appType: "model",
  },
  {
    text: "common:sidebarSections.coreConcepts",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/model/core-concepts/overview",
      },
      {
        text: "common:sidebarSections.aiTask",
        link: "/docs/model/core-concepts/ai-task",
      },
    ],
    appType: "model",
  },
  {
    text: "common:sidebarSections.prepareModels",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/model/prepare-models/overview",
      },
      {
        text: "common:sidebarSections.modelCard",
        link: "/docs/model/prepare-models/model-card",
      },
      {
        text: "common:sidebarSections.preProcessing",
        link: "/docs/model/prepare-models/pre-processing",
      },
      {
        text: "common:sidebarSections.postProcessing",
        link: "/docs/model/prepare-models/post-processing",
      },
    ],
    appType: "model",
  },
  {
    text: "common:sidebarSections.importModels",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.overview",
        link: "/docs/model/import-models/overview",
      },
      {
        text: "common:sidebarSections.local",
        link: "/docs/model/import-models/local",
      },
      {
        text: "common:sidebarSections.github",
        link: "/docs/model/import-models/github",
      },
      {
        text: "common:sidebarSections.artivc",
        link: "/docs/model/import-models/artivc",
      },
      {
        text: "common:sidebarSections.huggingFace",
        link: "/docs/model/import-models/huggingface",
      },
    ],
    appType: "model",
  },
  {
    text: "common:sidebarSections.development",
    collapsible: true,
    items: [
      {
        text: "common:sidebarSections.systemArchitecture",
        link: "/docs/vdp/development/system-architecture",
      },
      {
        text: "common:sidebarSections.localSetup",
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
      href: "/",
    };
  }

  if (appType === "instill-cloud") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/",
    };
  }

  if (appType === "model") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/",
    };
  }

  if (appType === "core") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/",
    };
  }

  if (appType === "base") {
    return {
      element: <Logos.InstillSquare className="h-12 w-12" />,
      href: "/",
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
        label: applicattionName[appType === "instill-cloud" ? "core" : appType],
        iconElement: (
          <Icons.ChevronDown className="navbar-dropdown-menu my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
        ),
        items: [
          {
            key: "docs-nav-instill-core-welcome",
            to: "/docs/core/welcome",
            className: "",
            position: "right",
            label: "common:navbar.instillCore",
          },
          {
            key: "docs-nav-instill-core-welcome",
            to: "/docs/base/welcome",
            className: "",
            position: "right",
            label: "common:navbar.instillBase",
          },
          {
            key: "docs-nav-vdp-welcome",
            to: "/docs/vdp/welcome",
            className: "",
            position: "right",
            label: "common:navbar.instillVDP",
          },
          {
            key: "docs-nav-model-welcome",
            to: "/docs/model/welcome",
            className: "",
            position: "right",
            label: "common:navbar.instillModel",
          },
        ],
      },
      {
        key: "docs-nav-instill-cloud-welcome",
        to: "/docs/instill-cloud/welcome",
        className: "",
        position: "left",
        label: "common:navbar.instillCloud",
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
            label: "common:navbar.resources",
          },
          {
            key: "docs-nav-dropdown-product-website",
            href: "/",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "common:navbar.productWebsite",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-tutorials",
            href: "/tutorials",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "common:navbar.tutorials",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-blog",
            href: "/blog",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "common:navbar.blog",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-newsletter",
            href: "/newsletter",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "common:navbar.newsletter",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-help",
            position: "right",
            border: false,
            label: "common:navbar.help",
          },
          {
            key: "docs-nav-dropdown-help",
            position: "right",
            border: true,
            label: "common:navbar.help",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-discord",
            href: process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK || "/",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "common:navbar.discord",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-github-disussions",
            href: "https://github.com/orgs/instill-ai/discussions",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "common:navbar.gitHubDisussions",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
          },
          {
            key: "docs-nav-dropdown-github-issues",
            href: "https://github.com/instill-ai/community/issues",
            className: "navbar-dropdown-menu",
            position: "right",
            label: "common:navbar.gitHubIssues",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
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
        iconElement: isDark ? (
          <Logos.TwitterLight className="h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
        ) : (
          <Logos.TwitterDark className="h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
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

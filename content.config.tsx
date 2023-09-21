import { applicationName } from "@/lib/instill/applicationType";
import { LogoConfig, NavConfig, Sidebar, SidebarSections } from "@/types/docs";
import { InstillAppType, InstillAppVersion } from "@/types/instill";
import {
  DiscordIcon,
  GitHubIcon,
  Logos,
  Icons,
} from "@instill-ai/design-system";
import { LATEST_VERSION } from "./version.mjs";

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

const getSections = (appVersion: InstillAppVersion): SidebarSections[] => {
  return [
    {
      text: "common:sidebarSections.welcome",
      link: `/docs/cloud/${appVersion}/welcome`,
      items: [],
      appType: "cloud",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.gettingStarted",
      link: `/docs/cloud/${appVersion}/getting-started`,
      items: [],
      appType: "cloud",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.usingInstillCloud",
      link: `/docs/cloud/${appVersion}/using-instill-cloud`,
      items: [],
      appType: "cloud",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.welcome",
      link: `/docs/core/${appVersion}/welcome`,
      items: [],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.gettingStarted",
      link: `/docs/core/${appVersion}/getting-started`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.faq",
      link: `/docs/core/${appVersion}/faq`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.contributingGuideline",
      link: `/docs/core/${appVersion}/contributing-guideline`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.systemArchitecture",
      link: `/docs/core/${appVersion}/system-architecture`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.welcome",
      link: `/docs/vdp/${appVersion}/welcome`,
      items: [],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.vdp",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.gettingStarted",
          link: `/docs/vdp/${appVersion}/getting-started`,
        },
        {
          text: "common:sidebarSections.configuration",
          link: `/docs/vdp/${appVersion}/configuration`,
        },
        {
          text: "common:sidebarSections.roadmap",
          link: `/docs/vdp/${appVersion}/roadmap`,
        },
        {
          text: "common:sidebarSections.license",
          link: `/docs/vdp/${appVersion}/license`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.deployment",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/vdp/${appVersion}/deployment/overview`,
        },
        {
          text: "common:sidebarSections.dockerCompose",
          link: `/docs/vdp/${appVersion}/deployment/docker-compose`,
        },
        {
          text: "common:sidebarSections.kubernetesUsingHelm",
          link: `/docs/vdp/${appVersion}/deployment/kubernetes-using-helm`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.coreConcepts",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/vdp/${appVersion}/core-concepts/overview`,
        },
        {
          text: "common:sidebarSections.pipeline",
          link: `/docs/vdp/${appVersion}/core-concepts/pipeline`,
        },
        {
          text: "common:sidebarSections.connector",
          link: `/docs/vdp/${appVersion}/connectors/overview`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.operator",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/vdp/${appVersion}/operators/overview`,
        },
        {
          text: "common:sidebarSections.start",
          link: `/docs/vdp/${appVersion}/operators/start`,
        },
        {
          text: "common:sidebarSections.end",
          link: `/docs/vdp/${appVersion}/operators/end`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.aiConnector",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/vdp/${appVersion}/ai-connectors/overview`,
        },
        {
          text: "common:sidebarSections.instillModel",
          link: `/docs/vdp/${appVersion}/ai-connectors/instill-model`,
        },
        {
          text: "common:sidebarSections.stabilityAI",
          link: `/docs/vdp/${appVersion}/ai-connectors/stability-ai`,
        },
        {
          text: "common:sidebarSections.openAI",
          link: `/docs/vdp/${appVersion}/ai-connectors/openai`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.blockchainConnector",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/vdp/${appVersion}/blockchain-connectors/overview`,
        },
        {
          text: "common:sidebarSections.numbersProtocol",
          link: `/docs/vdp/${appVersion}/blockchain-connectors/numbers-protocol`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.dataConnector",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/vdp/${appVersion}/data-connectors/overview`,
        },
        {
          text: "common:sidebarSections.pinecone",
          link: `/docs/vdp/${appVersion}/data-connectors/pinecone`,
        },
        {
          text: "common:sidebarSections.airbyte",
          link: `/docs/vdp/${appVersion}/data-connectors/airbyte`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.welcome",
      link: `/docs/model/${appVersion}/welcome`,
      items: [],
      appType: "model",
      versions: [],
    },
    {
      text: "common:sidebarSections.instillModel",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.gettingStarted",
          link: `/docs/model/${appVersion}/getting-started`,
        },
        {
          text: "common:sidebarSections.roadmap",
          link: `/docs/model/${appVersion}/roadmap`,
        },
      ],
      appType: "model",
      versions: [],
    },
    {
      text: "common:sidebarSections.deployment",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/model/${appVersion}/deployment/overview`,
        },
        {
          text: "common:sidebarSections.dockerCompose",
          link: `/docs/model/${appVersion}/deployment/docker-compose`,
        },
        {
          text: "common:sidebarSections.kubernetesUsingHelm",
          link: `/docs/model/${appVersion}/deployment/kubernetes-using-helm`,
        },
      ],
      appType: "model",
      versions: [],
    },
    {
      text: "common:sidebarSections.coreConcepts",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/model/${appVersion}/core-concepts/overview`,
        },
        {
          text: "common:sidebarSections.aiTask",
          link: `/docs/model/${appVersion}/core-concepts/ai-task`,
        },
      ],
      appType: "model",
      versions: [],
    },
    {
      text: "common:sidebarSections.prepareModels",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/model/${appVersion}/prepare-models/overview`,
        },
        {
          text: "common:sidebarSections.modelCard",
          link: `/docs/model/${appVersion}/prepare-models/model-card`,
        },
        {
          text: "common:sidebarSections.preProcessing",
          link: `/docs/model/${appVersion}/prepare-models/pre-processing`,
        },
        {
          text: "common:sidebarSections.postProcessing",
          link: `/docs/model/${appVersion}/prepare-models/post-processing`,
        },
      ],
      appType: "model",
      versions: [],
    },
    {
      text: "common:sidebarSections.importModels",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/model/${appVersion}/import-models/overview`,
        },
        {
          text: "common:sidebarSections.local",
          link: `/docs/model/${appVersion}/import-models/local`,
        },
        {
          text: "common:sidebarSections.github",
          link: `/docs/model/${appVersion}/import-models/github`,
        },
        {
          text: "common:sidebarSections.artivc",
          link: `/docs/model/${appVersion}/import-models/artivc`,
        },
        {
          text: "common:sidebarSections.huggingFace",
          link: `/docs/model/${appVersion}/import-models/huggingface`,
        },
      ],
      appType: "model",
      versions: [],
    },
    {
      text: "common:sidebarSections.development",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.localSetup",
          link: `/docs/vdp/${appVersion}/development/setup-local-development`,
        },
      ],
      appType: "vdp",
      versions: [],
    },
    {
      text: "common:sidebarSections.welcome",
      link: `/docs/base/${appVersion}/welcome`,
      items: [],
      appType: "base",
      versions: [],
    },
    {
      text: "common:sidebarSections.instillBase",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.gettingStarted",
          link: `/docs/base/${appVersion}/getting-started`,
        },
        {
          text: "common:sidebarSections.configuration",
          link: `/docs/base/${appVersion}/configuration`,
        },
      ],
      appType: "base",
      versions: [],
    },
    {
      text: "common:sidebarSections.deployment",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/base/${appVersion}/deployment/overview`,
        },
        {
          text: "common:sidebarSections.dockerCompose",
          link: `/docs/base/${appVersion}/deployment/docker-compose`,
        },
        {
          text: "common:sidebarSections.kubernetesUsingHelm",
          link: `/docs/base/${appVersion}/deployment/kubernetes-using-helm`,
        },
      ],
      appType: "base",
      versions: [],
    },
    {
      text: "common:sidebarSections.development",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.localSetup",
          link: `/docs/base/${appVersion}/development/setup-local-development`,
        },
      ],
      appType: "base",
      versions: [],
    },
  ];
};

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

  if (appType === "cloud") {
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
export function getSidebarSections(
  appType: InstillAppType,
  appVersion: InstillAppVersion
) {
  const sections = getSections(appVersion);
  return sections.filter((section) => section?.appType === appType);
}

// Construct the sidebar items
export function getSideBar(
  appType: InstillAppType,
  appVersion: InstillAppVersion,
  isDark: boolean
): Sidebar {
  return {
    leftSidebar: {
      logo: getLogoConfig(appType, isDark),
      sections: getSidebarSections(appType, appVersion),
    },
    rightSidebar: {
      tableOfContentHeaders: ["h1", "h2", "h3"],
    },
  };
}

// Construct the navbar items
export function getNavbar(
  appType: InstillAppType,
  appVersion: InstillAppVersion,
  isDark: boolean
): NavConfig {
  return {
    logo: getLogoConfig(appType, isDark),
    title: appType,
    items: [
      {
        key: "docs-nav-docs",
        href: `/docs/core/${appVersion}/welcome`,
        className: "navbar-dropdown-menu",
        position: "left",
        label: applicationName[appType === "cloud" ? "core" : appType],
        iconElement: (
          <Icons.ChevronDown className="navbar-dropdown-menu my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
        ),
        items: [
          {
            key: "docs-nav-core-welcome",
            to: `/docs/core/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "common:navbar.instillCore",
            appType: "core",
          },
          {
            key: "docs-nav-base-welcome",
            to: `/docs/base/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "common:navbar.instillBase",
            appType: "base",
          },
          {
            key: "docs-nav-vdp-welcome",
            to: `/docs/vdp/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "common:navbar.instillVDP",
            appType: "vdp",
          },
          {
            key: "docs-nav-model-welcome",
            to: `/docs/model/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "common:navbar.instillModel",
            appType: "model",
          },
        ],
        appType: null,
      },
      {
        key: "docs-nav-cloud-welcome",
        to: `/docs/cloud/${appVersion}/welcome`,
        className: "",
        position: "left",
        label: "common:navbar.instillCloud",
        appType: "cloud",
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
        appType: null,
        items: [
          {
            key: "docs-nav-dropdown-resources",
            position: "right",
            border: true,
            label: "common:navbar.resources",
            appType: null,
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
            appType: null,
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
            appType: null,
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
            appType: null,
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
            appType: null,
          },
          {
            key: "docs-nav-dropdown-help",
            position: "right",
            border: false,
            label: "common:navbar.help",
            appType: null,
          },
          {
            key: "docs-nav-dropdown-help",
            position: "right",
            border: true,
            label: "common:navbar.help",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
            ),
            appType: null,
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
            appType: null,
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
            appType: null,
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
            appType: null,
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
        appType: null,
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
        appType: null,
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
        appType: null,
      },
      {
        key: "docs-nav-item-1",
        position: "right",
        border: true,
        label: "",
        appType: null,
      },
      {
        key: "docs-nav-dropdown-version-menu",
        href: "/",
        className: "navbar-dropdown-menu",
        position: "right",
        label: `v${appVersion} ${
          appVersion === LATEST_VERSION ? "(latest)" : ""
        }`,
        // iconElement: (
        //   <Icons.ChevronDown className="navbar-dropdown-menu my-auto h-5 w-5 stroke-instillGrey95 hover:stroke-instillBlue50 dark:stroke-instillGrey15 dark:hover:stroke-instillBlue50" />
        // ),
        items: [
          {
            key: "docs-nav-dropdown-version-cloud-latest",
            to: `/docs/cloud/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "latest",
            appType: "cloud",
          },
          {
            key: "docs-nav-dropdown-version-core-latest",
            to: `/docs/core/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "latest",
            appType: "core",
          },
          {
            key: "docs-nav-dropdown-version-core-latest",
            to: `/docs/model/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "latest",
            appType: "model",
          },
          {
            key: "docs-nav-dropdown-version-core-latest",
            to: `/docs/base/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "latest",
            appType: "base",
          },
          {
            key: "docs-nav-dropdown-version-core-latest",
            to: `/docs/vdp/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "latest",
            appType: "vdp",
          },
        ],
        appType: null,
      },
      {
        key: "docs-nav-item-2",
        position: "right",
        border: true,
        label: "",
        appType: "core",
      },
    ],
  };
}

// main config function
export function docsConfig(
  appType: InstillAppType,
  appVersion: InstillAppVersion,
  isDark = false
) {
  return {
    site: SITE,
    nav: getNavbar(appType, appVersion, isDark),
    sidebar: getSideBar(appType, appVersion, isDark),
  };
}

export const BlogCategories = [
  "Home",
  "Insights",
  "Our Story",
  "Product Updates",
] as const;

export type BlogCategory = typeof BlogCategories[number];

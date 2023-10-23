import { LogoConfig, NavConfig, Sidebar, SidebarSections } from "@/types/docs";
import { InstillAppType, InstillAppVersion } from "@/types/instill";
import {
  DiscordIcon,
  GitHubIcon,
  Logos,
  Icons,
} from "@instill-ai/design-system";
import { VERSIONS } from "./version.mjs";

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
      text: "👋 Get Started",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.welcome",
      link: `/docs/${appVersion}/welcome`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.quickstart",
      link: `/docs/${appVersion}/quickstart`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.deploymentIntroduction",
      link: `/docs/${appVersion}/deployment`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.faq",
      link: `/docs/${appVersion}/faq`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.license",
      link: `/docs/${appVersion}/license`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.roadmap",
      link: `/docs/${appVersion}/roadmap`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "🔮 Deployment",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.deployment",
      collapsible: true,
      link: `/docs/${appVersion}/core/deployment/cli`,
      items: [
        {
          text: "common:sidebarSections.cli",
          link: `/docs/${appVersion}/core/deployment/cli`,
        },
        {
          text: "common:sidebarSections.dockerCompose",
          link: `/docs/${appVersion}/core/deployment/docker-compose`,
        },
        {
          text: "common:sidebarSections.kubernetesUsingHelm",
          link: `/docs/${appVersion}/core/deployment/kubernetes-using-helm`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.authorisation",
      link: `/docs/${appVersion}/core/authorisation`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.configuration",
      link: `/docs/${appVersion}/core/configuration`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.contributing",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.guideline",
          link: `/docs/${appVersion}/core/contributing/guideline`,
        },
        {
          text: "common:sidebarSections.development",
          link: `/docs/${appVersion}/core/contributing/setup-local-development`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "💧 Build AI Pipelines",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.overview",
      link: `/docs/${appVersion}/core/concepts`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.pipeline",
      link: `/docs/${appVersion}/vdp/pipeline`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.component",
      link: `/docs/${appVersion}/vdp/component`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "⚙️ Operators",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.start",
      link: `/docs/${appVersion}/vdp/operators/start`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.end",
      link: `/docs/${appVersion}/vdp/operators/end`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.base64",
      link: `/docs/${appVersion}/vdp/operators/base64`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.json",
      link: `/docs/${appVersion}/vdp/operators/json`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.rest",
      link: `/docs/${appVersion}/vdp/operators/rest`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.textextraction",
      link: `/docs/${appVersion}/vdp/operators/textextraction`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "🔌 Connectors",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "AI Connectors",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.instillModel",
          link: `/docs/${appVersion}/vdp/connectors/instill-model`,
        },
        {
          text: "common:sidebarSections.openAI",
          link: `/docs/${appVersion}/vdp/connectors/openai`,
        },
        {
          text: "common:sidebarSections.stabilityAI",
          link: `/docs/${appVersion}/vdp/connectors/stability-ai`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.dataConnector",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.pinecone",
          link: `/docs/${appVersion}/vdp/connectors/pinecone`,
        },
        {
          text: "common:sidebarSections.airbyte",
          link: `/docs/${appVersion}/vdp/connectors/airbyte`,
        },
        {
          text: "common:sidebarSections.bigquery",
          link: `/docs/${appVersion}/vdp/connectors/bigquery`,
        },
        {
          text: "common:sidebarSections.gcs",
          link: `/docs/${appVersion}/vdp/connectors/gcs`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.appConnector",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.numbersProtocol",
          link: `/docs/${appVersion}/vdp/connectors/numbers-protocol`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "⚗️ Custom Models",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.overview",
      link: `/docs/${appVersion}/model/overview`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.prepareModels",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/${appVersion}/model/prepare-models/overview`,
        },
        {
          text: "common:sidebarSections.modelCard",
          link: `/docs/${appVersion}/model/prepare-models/model-card`,
        },
        {
          text: "common:sidebarSections.preProcessing",
          link: `/docs/${appVersion}/model/prepare-models/pre-processing`,
        },
        {
          text: "common:sidebarSections.postProcessing",
          link: `/docs/${appVersion}/model/prepare-models/post-processing`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.importModels",
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.overview",
          link: `/docs/${appVersion}/model/import-models/overview`,
        },
        {
          text: "common:sidebarSections.local",
          link: `/docs/${appVersion}/model/import-models/local`,
        },
        {
          text: "common:sidebarSections.github",
          link: `/docs/${appVersion}/model/import-models/github`,
        },
        {
          text: "common:sidebarSections.artivc",
          link: `/docs/${appVersion}/model/import-models/artivc`,
        },
        {
          text: "common:sidebarSections.huggingFace",
          link: `/docs/${appVersion}/model/import-models/huggingface`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "📦 Instill SDK",
      items: [],
      appType: "core",
      versions: ["latest"],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.pythonSdk",
      link: `/docs/${appVersion}/sdk/python`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.typescriptSdk",
      link: `/docs/${appVersion}/sdk/typescript`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
  ];
};

// Parse logo a/c to appType
export function getLogoConfig(
  appType: InstillAppType,
  isDark: boolean
): LogoConfig {
  return {
    element: <Logos.InstillSquare className="h-12 w-12" />,
    href: "/",
  };
  throw new Error("Invalid appType");
}

// Parse menu items a/c to appType
export function getSidebarSections(
  appType: InstillAppType,
  appVersion: InstillAppVersion
) {
  return getSections(appVersion);
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
        key: "docs-nav-overview",
        to: `/docs/overview`,
        className: "",
        position: "left",
        label: "common:sidebarSections.overview",
        appType: null,
      },
      {
        key: "docs-nav-documentation",
        to: `/docs/${appVersion}/welcome`,
        className: "",
        position: "left",
        label: "Documentation",
        appType: null,
      },
      {
        key: "docs-nav-api-reference",
        to: `/docs/api-reference`,
        className: "",
        position: "left",
        label: "API reference",
        appType: null,
      },
      {
        key: "docs-nav-example",
        to: `/docs/example`,
        className: "",
        position: "left",
        label: "Example",
        appType: null,
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
        label: `${appVersion} ${
          appVersion === VERSIONS[appType] ? "(latest)" : ""
        }`,
        items: [
          {
            key: "docs-nav-dropdown-version-core-latest",
            to: `/docs/${appVersion}/welcome`,
            className: "",
            position: "right",
            label: "latest",
            appType: "core",
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
  "Events",
  "Product Updates",
] as const;

export type BlogCategory = typeof BlogCategories[number];

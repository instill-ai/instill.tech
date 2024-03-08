import { LogoConfig, NavConfig, Sidebar, SidebarSections } from "@/types/docs";
import { InstillAppType, InstillAppVersion } from "@/types/instill";
import {
  DiscordIcon,
  GitHubIcon,
  Logos,
  Icons,
} from "@instill-ai/design-system";
import { LATEST_VERSIONS } from "./version.mjs";

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

export const getSections = (
  appVersion: InstillAppVersion
): SidebarSections[] => {
  return [
    {
      text: "common:sidebarSections.getStarted",
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
      text: "common:sidebarSections.selfhostInstillCore",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.coreConcepts",
      link: `/docs/${appVersion}/core/concepts`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.pipeline",
          link: `/docs/${appVersion}/core/concepts/pipeline`,
        },
      ],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.deployment",
      link: `/docs/${appVersion}/core/deployment`,
      collapsible: true,
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
      text: "common:sidebarSections.configuration",
      link: `/docs/${appVersion}/core/configuration`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.contributing",
      link: `/docs/${appVersion}/core/contributing`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.development",
          link: `/docs/${appVersion}/core/contributing/setup-local-development`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.buildAiWorkflows",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.buildPipeline",
      link: `/docs/${appVersion}/vdp/build`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.testPipeline",
      link: `/docs/${appVersion}/vdp/test`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.releasePipeline",
      link: `/docs/${appVersion}/vdp/release`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.sharePipeline",
      link: `/docs/${appVersion}/vdp/share`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.aiConnectors",
      link: `/docs/${appVersion}/vdp/ai-connector`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.instillModel",
          link: `/docs/${appVersion}/vdp/ai-connectors/instill-model`,
        },
        {
          text: "common:sidebarSections.openAI",
          link: `/docs/${appVersion}/vdp/ai-connectors/openai`,
        },
        {
          text: "common:sidebarSections.stabilityAI",
          link: `/docs/${appVersion}/vdp/ai-connectors/stability-ai`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.dataConnectors",
      link: `/docs/${appVersion}/vdp/data-connector`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.airbyte",
          link: `/docs/${appVersion}/vdp/data-connectors/airbyte`,
        },
        {
          text: "common:sidebarSections.bigquery",
          link: `/docs/${appVersion}/vdp/data-connectors/bigquery`,
        },
        {
          text: "common:sidebarSections.gcs",
          link: `/docs/${appVersion}/vdp/data-connectors/gcs`,
        },
        {
          text: "common:sidebarSections.googlesearch",
          link: `/docs/${appVersion}/vdp/data-connectors/google-search`,
        },
        {
          text: "common:sidebarSections.pinecone",
          link: `/docs/${appVersion}/vdp/data-connectors/pinecone`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.appConnectors",
      link: `/docs/${appVersion}/vdp/app-connector`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.numbersProtocol",
          link: `/docs/${appVersion}/vdp/app-connectors/numbers-protocol`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.operators",
      link: `/docs/${appVersion}/vdp/operator`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.start",
          link: `/docs/${appVersion}/vdp/operators/start`,
        },
        {
          text: "common:sidebarSections.end",
          link: `/docs/${appVersion}/vdp/operators/end`,
        },
        {
          text: "common:sidebarSections.base64",
          link: `/docs/${appVersion}/vdp/operators/base64`,
        },
        {
          text: "common:sidebarSections.json",
          link: `/docs/${appVersion}/vdp/operators/json`,
        },
        {
          text: "common:sidebarSections.rest",
          link: `/docs/${appVersion}/vdp/operators/rest`,
        },
        {
          text: "common:sidebarSections.textextraction",
          link: `/docs/${appVersion}/vdp/operators/textextraction`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.buildAiModels",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.prepareModels",
      link: `/docs/${appVersion}/model/prepare`,
      items: [],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.aiTasks",
      link: `/docs/${appVersion}/model/ai-task`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.importModels",
      link: `/docs/${appVersion}/model/import`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.local",
          link: `/docs/${appVersion}/model/import/local`,
        },
        {
          text: "common:sidebarSections.github",
          link: `/docs/${appVersion}/model/import/github`,
        },
        {
          text: "common:sidebarSections.artivc",
          link: `/docs/${appVersion}/model/import/artivc`,
        },
        {
          text: "common:sidebarSections.huggingFace",
          link: `/docs/${appVersion}/model/import/huggingface`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.deployModels",
      link: `/docs/${appVersion}/model/deploy`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.useModels",
      link: `/docs/${appVersion}/model/use`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.instillSdk",
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
        key: "docs-nav-item-border-api-reference",
        href: "https://openapi.instill.tech",
        className: "api-reference-link",
        position: "left",
        label: "API Reference",
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
            className: "",
            position: "right",
            label: "common:navbar.productWebsite",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
            ),
            appType: null,
          },
          {
            key: "docs-nav-dropdown-tutorials",
            href: "/tutorials",
            className: "",
            position: "right",
            label: "common:navbar.tutorials",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
            ),
            appType: null,
          },
          {
            key: "docs-nav-dropdown-blog",
            href: "/blog",
            className: "",
            position: "right",
            label: "common:navbar.blog",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
            ),
            appType: null,
          },
          {
            key: "docs-nav-dropdown-newsletter",
            href: "/newsletter",
            className: "",
            position: "right",
            label: "common:navbar.newsletter",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
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
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
            ),
            appType: null,
          },
          {
            key: "docs-nav-dropdown-discord",
            href: process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK || "/",
            className: "",
            position: "right",
            label: "common:navbar.discord",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
            ),
            appType: null,
          },
          {
            key: "docs-nav-dropdown-github-disussions",
            href: "https://github.com/orgs/instill-ai/discussions",
            className: "",
            position: "right",
            label: "common:navbar.gitHubDisussions",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
            ),
            appType: null,
          },
          {
            key: "docs-nav-dropdown-github-issues",
            href: "https://github.com/instill-ai/community/issues",
            className: "",
            position: "right",
            label: "common:navbar.gitHubIssues",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
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
          appVersion === LATEST_VERSIONS[appType] ? "(latest)" : ""
        }`,
        items: [
          {
            key: "docs-nav-dropdown-version-core-latest",
            to: `/docs/v0.12.0-beta/welcome`,
            className: "",
            position: "right",
            label: "v0.12.0-beta (latest)",
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
  "Story",
  "Events",
  "Product Updates",
] as const;

export type BlogCategory = typeof BlogCategories[number];

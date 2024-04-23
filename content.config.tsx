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
      link: `/docs/welcome`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.quickstart",
      link: `/docs/quickstart`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.faq",
      link: `/docs/faq`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.license",
      link: `/docs/license`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.roadmap",
      link: `/docs/roadmap`,
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
      link: `/docs/core/concepts`,
      collapsible: false,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.deployment",
      link: `/docs/core/deployment`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.cli",
          link: `/docs/core/deployment/cli`,
        },
        {
          text: "common:sidebarSections.dockerCompose",
          link: `/docs/core/deployment/docker-compose`,
        },
        {
          text: "common:sidebarSections.kubernetesUsingHelm",
          link: `/docs/core/deployment/kubernetes-using-helm`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.configuration",
      link: `/docs/core/configuration`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.contributing",
      link: `/docs/core/contributing`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.development",
          link: `/docs/core/contributing/setup-local-development`,
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
      text: "common:sidebarSections.introduction",
      link: `/docs/vdp/introduction`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.buildPipeline",
      link: `/docs/vdp/build`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.testPipeline",
      link: `/docs/vdp/test`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.releasePipeline",
      link: `/docs/vdp/release`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.sharePipeline",
      link: `/docs/vdp/share`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.aiConnectors",
      link: `/docs/vdp/ai-connector`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.instillModel",
          link: `/docs/vdp/ai-connectors/instill`,
        },
        {
          text: "common:sidebarSections.archetypeAi",
          link: `/docs/vdp/ai-connectors/archetypeai`,
        },
        {
          text: "common:sidebarSections.openAI",
          link: `/docs/vdp/ai-connectors/openai`,
        },
        {
          text: "common:sidebarSections.stabilityAI",
          link: `/docs/vdp/ai-connectors/stabilityai`,
        },
        {
          text: "common:sidebarSections.huggingFace",
          link: `/docs/vdp/ai-connectors/huggingface`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.dataConnectors",
      link: `/docs/vdp/data-connector`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.bigquery",
          link: `/docs/vdp/data-connectors/bigquery`,
        },
        {
          text: "common:sidebarSections.gcs",
          link: `/docs/vdp/data-connectors/googlecloudstorage`,
        },
        {
          text: "common:sidebarSections.pinecone",
          link: `/docs/vdp/data-connectors/pinecone`,
        },
        {
          text: "common:sidebarSections.googlesearch",
          link: `/docs/vdp/data-connectors/googlesearch`,
        },
        {
          text: "common:sidebarSections.rest",
          link: `/docs/vdp/data-connectors/restapi`,
        },
        {
          text: "common:sidebarSections.redis",
          link: `/docs/vdp/data-connectors/redis`,
        },
        {
          text: "common:sidebarSections.website",
          link: `/docs/vdp/data-connectors/website`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.appConnectors",
      link: `/docs/vdp/app-connector`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.numbersProtocol",
          link: `/docs/vdp/app-connectors/numbers`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.operators",
      link: `/docs/vdp/operator`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.base64",
          link: `/docs/vdp/operators/base64`,
        },
        {
          text: "common:sidebarSections.json",
          link: `/docs/vdp/operators/json`,
        },
        {
          text: "common:sidebarSections.text",
          link: `/docs/vdp/operators/text`,
        },
        {
          text: "common:sidebarSections.image",
          link: `/docs/vdp/operators/image`,
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
      link: `/docs/model/prepare`,
      items: [],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.aiTasks",
      link: `/docs/model/ai-task`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.importModels",
      link: `/docs/model/import`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.local",
          link: `/docs/model/import/local`,
        },
        {
          text: "common:sidebarSections.github",
          link: `/docs/model/import/github`,
        },
        {
          text: "common:sidebarSections.artivc",
          link: `/docs/model/import/artivc`,
        },
        {
          text: "common:sidebarSections.huggingFace",
          link: `/docs/model/import/huggingface`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.deployModels",
      link: `/docs/model/deploy`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.useModels",
      link: `/docs/model/use`,
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
      link: `/docs/sdk/python`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.typescriptSdk",
      link: `/docs/sdk/typescript`,
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
        href: "https://github.com/instill-ai/instill-core",
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
        href: "/docs/welcome",
        className: "navbar-dropdown-menu",
        position: "right",
        label: `${appVersion} ${
          appVersion === LATEST_VERSIONS[appType] ? "(latest)" : ""
        }`,
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

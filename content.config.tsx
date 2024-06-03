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

export const getSections = (): SidebarSections[] => {
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
      text: "common:sidebarSections.instillCore",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.introduction",
      link: `/docs/core/introduction`,
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
      text: "common:sidebarSections.instillVDP",
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
      text: "common:sidebarSections.createPipeline",
      link: `/docs/vdp/create`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.testPipeline",
      link: `/docs/vdp/run`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.clonePipeline",
      link: `/docs/vdp/clone`,
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
      text: "common:sidebarSections.useCredit",
      link: `/docs/vdp/credit`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.secret",
      link: `/docs/vdp/secret`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.instillFormat",
      link: `/docs/vdp/instill-format`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.instillComponent",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.introduction",
      link: `/docs/component/introduction`,
      collapsible: false,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.genericComponent",
      link: `/docs/component/generic`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.iterator",
          link: `/docs/component/generics/iterator`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.aiComponent",
      link: `/docs/component/ai`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.instill",
          link: `/docs/component/ai/instill`,
        },
        {
          text: "common:sidebarSections.archetypeAI",
          link: `/docs/component/ai/archetypeai`,
        },
        {
          text: "common:sidebarSections.openAI",
          link: `/docs/component/ai/openai`,
        },
        {
          text: "common:sidebarSections.stabilityAI",
          link: `/docs/component/ai/stabilityai`,
        },
        {
          text: "common:sidebarSections.huggingFace",
          link: `/docs/component/ai/huggingface`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.dataComponent",
      link: `/docs/component/data`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.bigquery",
          link: `/docs/component/data/bigquery`,
        },
        {
          text: "common:sidebarSections.gcs",
          link: `/docs/component/data/googlecloudstorage`,
        },
        {
          text: "common:sidebarSections.pinecone",
          link: `/docs/component/data/pinecone`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.applicationComponent",
      link: `/docs/component/app`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.numbersProtocol",
          link: `/docs/component/app/numbers`,
        },
        {
          text: "common:sidebarSections.slack",
          link: `/docs/component/app/slack`,
        },
        {
          text: "common:sidebarSections.googlesearch",
          link: `/docs/component/app/googlesearch`,
        },
        {
          text: "common:sidebarSections.rest",
          link: `/docs/component/app/restapi`,
        },
        {
          text: "common:sidebarSections.redis",
          link: `/docs/component/app/redis`,
        },
        {
          text: "common:sidebarSections.website",
          link: `/docs/component/app/website`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.operator",
      link: `/docs/component/operator`,
      collapsible: true,
      items: [
        {
          text: "common:sidebarSections.base64",
          link: `/docs/component/operators/base64`,
        },
        {
          text: "common:sidebarSections.json",
          link: `/docs/component/operators/json`,
        },
        {
          text: "common:sidebarSections.text",
          link: `/docs/component/operators/text`,
        },
        {
          text: "common:sidebarSections.image",
          link: `/docs/component/operators/image`,
        },
        {
          text: "common:sidebarSections.document",
          link: `/docs/component/operators/document`,
        },
      ],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.instillModel",
      items: [],
      appType: "core",
      versions: [],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.introduction",
      link: `/docs/model/introduction`,
      items: [],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.createModel",
      link: `/docs/model/create`,
      items: [],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.prepareModel",
      link: `/docs/model/prepare`,
      items: [],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.buildModel",
      link: `/docs/model/build`,
      items: [],
      appType: "core",
      versions: [],
    },
    {
      text: "common:sidebarSections.pushModel",
      link: `/docs/model/push`,
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
      text: "common:sidebarSections.modelState",
      link: `/docs/model/state`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.modelInference",
      link: `/docs/model/inference`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.instillSDK",
      items: [],
      appType: "core",
      versions: ["latest"],
      isHeader: true,
    },
    {
      text: "common:sidebarSections.pythonSDK",
      link: `/docs/sdk/python`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
    {
      text: "common:sidebarSections.typescriptSDK",
      link: `/docs/sdk/typescript`,
      items: [],
      appType: "core",
      versions: ["latest"],
    },
  ];
};

// Parse logo a/c to appType
export function getLogoConfig(): LogoConfig {
  return {
    element: <Logos.InstillSquare className="h-12 w-12" />,
    href: "/",
  };
}

// Parse menu items a/c to appType
export function getSidebarSections() {
  return getSections();
}

// Construct the sidebar items
export function getSideBar(): Sidebar {
  return {
    leftSidebar: {
      logo: getLogoConfig(),
      sections: getSidebarSections(),
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
    logo: getLogoConfig(),
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
            key: "docs-nav-dropdown-github-discussions",
            href: "https://github.com/instill-ai/instill-core/discussions",
            className: "",
            position: "right",
            label: "common:navbar.gitHubDiscussions",
            iconElement: (
              <Icons.ArrowUpRight className="my-auto h-4 w-4 stroke-instillGrey95 dark:stroke-instillGrey15 " />
            ),
            appType: null,
          },
          {
            key: "docs-nav-dropdown-github-issues",
            href: "https://github.com/instill-ai/instill-core/issues",
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
    sidebar: getSideBar(),
  };
}

export const BlogCategories = [
  "Home",
  "Insights",
  "Story",
  "Events",
  "Product Updates",
] as const;

export type BlogCategory = (typeof BlogCategories)[number];

import { LogoConfig, NavConfig, Sidebar, SidebarSections } from "@/types/docs";
import { InstillAppType } from "@/types/instill";
import { Logo, ModelLogo, VdpLogo } from "@instill-ai/design-system";

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
    link: "/docs/vdp/welcome",
    items: [],
    appType: "vdp",
  },
  {
    text: "Welcome",
    link: "/docs/instill-cloud/welcome",
    items: [],
    appType: "instill-cloud",
  },
  {
    text: "Welcome",
    link: "/docs/model/welcome",
    items: [],
    appType: "model",
  },
  {
    text: "Core Concepts",
    link: "/docs/model/core-concepts",
    items: [],
    appType: "model",
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
    appType: "instill-cloud",
  },
  {
    text: "VDP",
    collapsible: true,
    items: [
      { text: "Getting started", link: "/docs/vdp/getting-started" },
      { text: "Configuration", link: "/docs/vdp/configuration" },
      { text: "Roadmap", link: "/docs/vdp/roadmap" },
      { text: "License", link: "/docs/vdp/license" },
      { text: "FAQ", link: "/docs/vdp/faq" },
    ],
    appType: "vdp",
  },
  {
    text: "Deploy VDP",
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
      {
        text: "Connector",
        link: "/docs/vdp/core-concepts/connector",
      },
      { text: "AI task", link: "/docs/vdp/core-concepts/ai-task" },
    ],
    appType: "vdp",
  },
  {
    text: "Source Connectors",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/source-connectors/overview" },
      { text: "HTTP", link: "/docs/vdp/source-connectors/http" },
      { text: "gRPC", link: "/docs/vdp/source-connectors/grpc" },
    ],
    appType: "vdp",
  },
  {
    text: "AI Connectors",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/ai-connectors/overview" },
      { text: "Instill Model", link: "/docs/vdp/ai-connectors/instill-model" },
      { text: "Stability AI", link: "/docs/vdp/ai-connectors/stability-ai" },
    ],
    appType: "vdp",
  },
  {
    text: "Destination Connectors",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/vdp/destination-connectors/overview" },
      { text: "HTTP", link: "/docs/vdp/destination-connectors/http" },
      { text: "gRPC", link: "/docs/vdp/destination-connectors/grpc" },
      { text: "Airbyte", link: "/docs/vdp/destination-connectors/airbyte" },
    ],
    appType: "vdp",
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
      element: <VdpLogo variant="expand" width={128} />,
      href: "/docs/vdp/welcome",
    };
  }

  if (appType === "instill-cloud") {
    return {
      element: (
        <Logo
          variant={
            isDark ? "ColourLogomarkWhiteType" : "ColourLogomarkBlackType"
          }
          width={180}
        />
      ),
      href: "/docs/instill-cloud/welcome",
    };
  }

  if (appType === "model") {
    return {
      element: <ModelLogo variant="expand" width={128} />,
      href: "/docs/model/welcome",
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
    items: [
      {
        key: "docs-nav-instill-cloud-welcome",
        to: "/docs/instill-cloud/welcome",
        className: "",
        position: "left",
        label: "Instill Cloud",
      },
      {
        key: "docs-nav-vdp-welcome",
        to: "/docs/vdp/welcome",
        className: "",
        position: "left",
        label: "VDP",
      },
      {
        key: "docs-nav-model-welcome",
        to: "/docs/model/welcome",
        className: "",
        position: "left",
        label: "Model",
      },
      {
        key: "product-website-home",
        to: "/",
        className: "",
        position: "left",
        label: "Home",
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

import { NavConfig, Sidebar, SidebarSections } from "@/types/docs";

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
    appType: "vdp",
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
    appType: "vdp",
  },
  {
    text: "Source Connectors",
    collapsible: true,
    items: [
      { text: "Overview", link: "/docs/source-connectors/overview" },
      { text: "HTTP", link: "/docs/source-connectors/http" },
      { text: "gRPC", link: "/docs/source-connectors/grpc" },
    ],
    appType: "vdp",
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
    appType: "vdp",
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
    appType: "vdp",
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
    appType: "vdp",
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
    appType: "vdp",
  },
];

// Parse logo a/c to appType
const getLogo = (appType: string, isDark: boolean) => {
  if (appType === "vdp") {
    return {
      src: "/images/vdp-logo-white-bg.svg",
      width: 100,
      height: 36,
      alt: "VDP's logo",
      href: "/docs/vdp/welcome",
    };
  }
  if (appType === "instill-cloud") {
    return {
      src: isDark
        ? "/images/instill-ai-logo-horizontal-white.svg"
        : "/images/instill-ai-logo-horizontal-black.svg",
      width: 160,
      height: 36,
      alt: "Instill Cloud logo",
      href: "/docs/instill-cloud/welcome",
    };
  }
};

// Parse menu items a/c to appType
const getSidebarSections = (appType: string) => {
  return SECTIONS.filter((section) => section?.appType === appType);
};

// Construct the sidebar items
const getSideBar = (type: string, isDark: boolean): Sidebar => {
  return {
    leftSidebar: {
      logo: getLogo(type, isDark),
      sections: getSidebarSections(type),
    },
    rightSidebar: {
      tableOfContentHeaders: ["h1", "h2", "h3"],
    },
  };
};

// Construct the navbar items
const getNavbar = (type: string, isDark: boolean): NavConfig => {
  return {
    logo: getLogo(type, isDark),
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
    ],
  };
};

// main config function
export const docsConfig = (appType: string, isDark = false) => {
  return {
    site: SITE,
    nav: getNavbar(appType, isDark),
    sidebar: getSideBar(appType, isDark),
  };
};

export const BlogCategories = [
  "Home",
  "Insights",
  "Our Story",
  "Product Updates",
] as const;

export type BlogCategory = typeof BlogCategories[number];

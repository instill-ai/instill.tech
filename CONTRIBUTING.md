## How to contribute to instill.tech (especially docs, tutorials and blog)

We adapt single framework structure to serve all our content enabled by the Next.js ability of serving web page with different strategy. Including static site generation, server-site generation and incremental static site generation.

## General guidelines for Docs, Tutorials and Blog

### Folder structure

There have three content folders and their corresponding page, assets folder.

- Docs folder has nested structure, by default it will accept all kinds of nested structure and compile the path into url. For example. A file in /docs/start-here/getting-started.mdx will be compiled into https://instill.tech/docs/start-here/getting-started.
- Blog and tutorials currently only accept **flat** structure. This means it won't accept nested folder strcture likes /tutorial/nested-folder/foo.mdx.

```
├── blog
│   ├── introducting-vdp.mdx
│   └── ...
├── docs
│   ├── start-here
│   └── ...
├── tutorials
│   ├── vdp-cow-counter.mdx
│   └── ...
├── content.config.tsx
├── public
│   ├── blog-assets
│   ├── tutorial-assets
│   └── docs-assets
└── pages
    ├── blog
    │   ├── [...path].tsx
    │   └── index.tsx
    ├── tutorials
    │   ├── [...path].tsx
    │   └── index.tsx
    └── docs
        ├── [...path].tsx
        └── index.tsx
```

### About the `content.config.tsx`

To be documented...

### Support extended markdown syntax

#### Info-block

- We offer four info-block variant: info, warning, danger and tip. No custom variant allowed, if you fill in other variant, the build will failed. 
- Please do enclose the info-block with proper syntax, every missed ::: will cause some unwanted behavior.(Currently, we don't have way to detect this kind of syntax error)


```md
:::info{type=info}
This is info block with info type
:::
```

```md
:::info{type=warning}
This is info block with warning type
:::
```

```md
:::info{type=danger}
This is info block with danger type
:::
```

```md
:::info{type=tip}
This is info block with danger type
:::
```

#### Details section

Please follow markdown details syntax like below

```md
<details>
  <summary>**Is VDP free?**</summary>

  Content
</details>
```

### Supported MDX components

#### ZoomableImg

You can use ZoomableImg to make the image zoomable like Medium

If width is not specificed, the image will expand to the full width of the parent.

```mdx
<ZoomableImg 
  src="src"
  alt="alt"
/>
```

You can specific the width of the image, if the width is bigger than the parent, it will be adjusted to the width of the parent. If the width is smaller than the parent, it will align to left.

Normally you don't need to specific the height.

```mdx
<ZoomableImg 
  src="src"
  alt="alt"
  width="500px"
/>
```

#### Tweet

You can embed tweet by using this component

```mdx
<Tweet tweetId="1400027716573872128" />
```

#### Gist

You can embed gist by using this component

```mdx
<Gist id="3617e049a20510117096d0ca6ee12989" />
```

#### Gallery

You can embed gallery by using this component, the image will be displayed in a panable carousel and automatically enable ZoomableImg.

```mdx
<Gallery
  images={[
    {
      alt: "Pipeline is empty view",
      src: "/tutorial-assets/vdp-cow-counter/pipeline-list-empty-1.png",
    },
    {
      alt: "Add async http source",
      src: "/tutorial-assets/vdp-cow-counter/add-an-async-source-http.png",
    },
    {
      alt: "Add yolov7 model",
      src: "/tutorial-assets/vdp-cow-counter/add-a-yolov7-model.png",
    },
    {
      alt: "Deploy yolov7-cpu model instance",
      src: "/tutorial-assets/vdp-cow-counter/deploy-a-yolov7-model-instance.png",
    },
    {
      alt: "Add postgres destination",
      src: "/tutorial-assets/vdp-cow-counter/add-a-destination-postgres-1.png",
    },
    {
      alt: "Add async pipeline",
      src: "/tutorial-assets/vdp-cow-counter/set-up-an-async-det-pipeline.png",
    },
  ]}
/>
```

#### CtaButton

You can use this component to implement instill-ai's call to action button.

```mdx
<CtaButton
  text="🚀 Join the Instill Cloud waitlist"
  link="https://www.instill.tech/get-access/?utm_source=tutorial&utm_medium=link&utm_campaign=vdp-streamlit-yolov7"
/>
```

#### Youtube

You can embed Youtube video by using this component.

- width and height is optional, by default the width will be 800px and the height will be 450px.

```mdx
<Youtube id="0Rdv8oqqxfw" width="800" height="450" />
```

## How to contribute to the Docs.

### Add content to the right location

- Please add content into the /docs folder. 
- For the specific sub-folder you could ask instill-ai's member for advice.

### Add correct frontmatter

- We require following frontmatter for documentation. 

```ts
title: string
lang: string
draft: boolean
description: string
```

### Add content into sidebar

Please add documentation page into sidebar.

- Make sure the page is in the correct section.
- The order of the list will be the displayed order.

```ts
const SIDEBAR: Sidebar = {
  leftSidebar: {
    logo: {
      src: "/images/vdp-logo-white-bg.svg",
      width: 100,
      height: 36,
      alt: "VDP's logo",
    },
    sections: [ // <-- This is the sidebar section
      {
        text: "Start here",
        collapsible: true,
        items: [
          { text: "Getting started", link: "/docs/start-here/getting-started" }, // <-- This is the item of the section
          { text: "Configuration", link: "/docs/start-here/configuration" },
          { text: "Roadmap", link: "/docs/start-here/roadmap" },
          { text: "FAQ", link: "/docs/start-here/faq" },
          { text: "Instill Cloud", link: "/docs/start-here/instill-cloud" },
        ],
      },
    ],
  },
  rightSidebar: {
    tableOfContentHeaders: ["h1", "h2", "h3"],
  },
};
```

### Add static file into `/public/docs-assets`

Please add the static file into the sub-folder in `/public/docs-assets` follow the same section. For example, docs in start-here section will put their static file in the `/public/docs-assets/start-here`

## How to contribute to the tutorial

### Add content to the right location

- Please add content into the /tutorials folder.
- Please don't use nested folder in /tutorials folder

### Add correct frontmatter

- We require following frontmatter for tutorials. 
- You could find details type definition in the /src/types/instill

```ts
export type TutorialMeta = {
  title: string;
  lang: string;
  draft: boolean;
  description: string;
  aiTask: AiTask;
  sourceConnector: string;
  destinationConnector: string;
  commit: CommitMeta;
  slug: string;
  publishedOn: string;
  placeholderColor: TutorialPlaceholderColor;
  themeImgSrc: string;
  themeImgAlt?: string;
  themeImgThumbnailSrc: string;
  useCase: string;
  author: string;
  authorAvatarSrc: string;
  authorGitHubUrl: string;
};
```

### Add static file into `/public/tutorial-assets`

- Please group the images by tutorials.
- For example, the images of vdp-cow-counter.mdx should be put into the `/public/tutorial-assets/vdp-cow-counter` folder.

## How to contribute to the blog

### Add content to the right location

- Please add content into the /blog folder.
- Please don't use nested folder in /blog folder

### Add correct frontmatter

- We require following frontmatter for blog. 
- You could find details type definition in the /src/types/instill

```ts
export type BlogArticleMeta = {
  title: string;
  lang: string;
  draft: boolean;
  description: string;
  commit: CommitMeta;
  slug: string;
  publishedOn: string;
  themeImgSrc: string;
  themeImgAlt?: string;
  themeImgThumbnailSrc: string;
  placeholderColor: TutorialPlaceholderColor;
  author: string;
  authorAvatarSrc: string;
  authorGitHubUrl: string;
  category: string;
};
```

### Add static file into `/public/blog-assets`

- Please group the images by blog article.
- For example, the images of introducing-vdp.mdx should be put into the `/public/blog-assets/introducing-vdp` folder.

## Caveats

### Nested p tag issue

Please don't use p tag to wrap other component in markdown. Because it will cause nested p tag issue.

```mdx
// This is not allowed.
<p>
  <ZoomableImg />
</p>
```
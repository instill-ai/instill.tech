import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleBlock } from "./ArticleBlock";

export default {
  title: "Components/Article/ArticleBlock",
  component: ArticleBlock,
} as ComponentMeta<typeof ArticleBlock>;

const Template: ComponentStory<typeof ArticleBlock> = (args) => (
  <ArticleBlock {...args} />
);

export const Playground: ComponentStory<typeof ArticleBlock> = Template.bind(
  {}
);

Playground.args = {
  article: {
    aiTask: "Ocr",
    title: "Build a SYNC classification pipeline",
    description:
      "Build a SYNC classification pipeline with the unstructured data ETL tool Instill Core https://github.com/instill-ai/instill-core",
    lang: "en-US",
    commit: {
      author: "Summerbud",
      lastEditedTime: "2022/8/19 上午4:26:22",
      authorGithubUrl: "https://github.com/EiffelFly",
      authorAvatarUrl: "",
    },
    draft: false,
    slug: "build-a-sync-pipeline",
    publishedOn: "2022-10-21T08:00:00",
    placeholderColor: "bg-instillWarmOrange50",
    themeImgSrc: "/article-assets/article-test-img.png",
    themeImgThumbnailSrc: "",
    useCase: "Use case 1",
    author: "Xiaofei Du",
    authorAvatarSrc: "",
    authorGitHubUrl: "",
    type: "Tutorial",
  },
};

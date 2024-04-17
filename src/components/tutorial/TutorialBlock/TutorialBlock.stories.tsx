import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TutorialBlock } from "./TutorialBlock";

export default {
  title: "Components/Tutorial/TutorialBlock",
  component: TutorialBlock,
} as ComponentMeta<typeof TutorialBlock>;

const Template: ComponentStory<typeof TutorialBlock> = (args) => (
  <TutorialBlock {...args} />
);

export const Playground: ComponentStory<typeof TutorialBlock> = Template.bind(
  {}
);

Playground.args = {
  tutorial: {
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
    themeImgSrc: "/tutorial-assets/tutorial-test-img.png",
    themeImgThumbnailSrc: "",
    useCase: "Use case 1",
    author: "Xiaofei Du",
    authorAvatarSrc: "",
    authorGitHubUrl: "",
    type: "Tutorial",
  },
};

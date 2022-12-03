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
    cvTask: "ocr",
    title: "Build a SYNC classification pipeline",
    description:
      "Build a SYNC classification pipeline with the open-source visual data ETL tool VDP https://github.com/instill-ai/vdp",
    sourceConnector: "http",
    destinationConnector: "http",
    lang: "en-US",
    commit: {
      author: "Summerbud",
      lastEditedTime: "2022/8/19 上午4:26:22",
      authorGithubUrl: "https://github.com/EiffelFly",
    },
    draft: false,
    slug: "build-an-async-det-pipeline",
    publishedAt: "2022-10-21T08:00:00",
  },
};

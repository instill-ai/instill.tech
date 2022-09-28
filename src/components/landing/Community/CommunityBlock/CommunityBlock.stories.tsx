import { GitHubIcon } from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CommunityBlock from "./CommunityBlock";

export default {
  title: "Components/CommunityBlock",
  component: CommunityBlock,
} as ComponentMeta<typeof CommunityBlock>;

const Template: ComponentStory<typeof CommunityBlock> = (args) => (
  <CommunityBlock {...args} />
);

export const Playground: ComponentStory<typeof CommunityBlock> = Template.bind(
  {}
);

Playground.args = {
  name: "GitHub",
  title: "Star VDP on GitHub",
  link: "",
  linkText: "Check out VDP",
};

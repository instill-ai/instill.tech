import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResourceBlock from "./ResourceBlock";

export default {
  title: "Components/ResourceBlock",
  component: ResourceBlock,
} as ComponentMeta<typeof ResourceBlock>;

const Template: ComponentStory<typeof ResourceBlock> = (args) => (
  <ResourceBlock {...args} />
);

export const Playground: ComponentStory<typeof ResourceBlock> = Template.bind(
  {}
);

Playground.args = {};

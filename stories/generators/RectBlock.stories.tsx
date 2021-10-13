import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RectBlock } from "../../components/generators/RectBlock";

export default {
  title: "Components/generator/RectBlock",
  component: RectBlock,
} as ComponentMeta<typeof RectBlock>;

const Template: ComponentStory<typeof RectBlock> = (args) => <RectBlock {...args} />;

export const Default = Template.bind({});
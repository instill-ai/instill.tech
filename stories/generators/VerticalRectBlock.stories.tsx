import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VerticalRectBlock } from "../../components/generators/solid/VerticalRectBlock";

export default {
  title: "Components/generator/VerticalRectBlock",
  component: VerticalRectBlock,
} as ComponentMeta<typeof VerticalRectBlock>;

const Template: ComponentStory<typeof VerticalRectBlock> = (args) => <VerticalRectBlock {...args} />;

export const Default = Template.bind({});
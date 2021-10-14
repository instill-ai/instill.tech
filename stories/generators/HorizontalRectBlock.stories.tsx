import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HorizontalRectBlock } from "../../components/generators/HorizontalRectBlock";

export default {
  title: "Components/generator/HorizontalRectBlock",
  component: HorizontalRectBlock,
} as ComponentMeta<typeof HorizontalRectBlock>;

const Template: ComponentStory<typeof HorizontalRectBlock> = (args) => <HorizontalRectBlock {...args} />;

export const Default = Template.bind({});
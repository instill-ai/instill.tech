import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HorizontalRectBlock } from "../../../components/generators/solid/HorizontalRectBlock";

export default {
  title: "Components/generator/solid/HorizontalRectBlock",
  component: HorizontalRectBlock,
} as ComponentMeta<typeof HorizontalRectBlock>;

const Template: ComponentStory<typeof HorizontalRectBlock> = (args) => <HorizontalRectBlock {...args} />;

export const Default = Template.bind({});
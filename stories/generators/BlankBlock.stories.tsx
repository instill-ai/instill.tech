import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BlankBlock } from "../../components/generators/solid/BlankBlock";

export default {
  title: "Components/generator/BlankBlock",
  component: BlankBlock,
} as ComponentMeta<typeof BlankBlock>;

const Template: ComponentStory<typeof BlankBlock> = (args) => <BlankBlock {...args} />;

export const Default = Template.bind({});
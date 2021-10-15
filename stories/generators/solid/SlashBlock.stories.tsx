import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SlashBlock } from "../../../components/generators/solid/SlashBlock";

export default {
  title: "Components/generator/SlashBlock",
  component: SlashBlock,
} as ComponentMeta<typeof SlashBlock>;

const Template: ComponentStory<typeof SlashBlock> = (args) => <SlashBlock {...args} />;

export const Default = Template.bind({});
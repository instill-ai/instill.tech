import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RectGenerator } from "../../components/generators/RectGenerator";

export default {
  title: "Components/generator/RectGenerator",
  component: RectGenerator,
} as ComponentMeta<typeof RectGenerator>;

const Template: ComponentStory<typeof RectGenerator> = (args) => <RectGenerator {...args} />;

export const Default = Template.bind({});
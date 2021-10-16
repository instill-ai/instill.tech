import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RectGenerator } from "../../../components/generators/solid/RectGenerator";

export default {
  title: "Components/generator/solid/RectGenerator",
  component: RectGenerator,
} as ComponentMeta<typeof RectGenerator>;

const Template: ComponentStory<typeof RectGenerator> = (args) => <RectGenerator {...args} />;

export const Default = Template.bind({});
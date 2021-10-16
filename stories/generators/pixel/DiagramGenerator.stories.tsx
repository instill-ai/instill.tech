import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DiagramGenerator } from "../../../components/generators/pixel/DiagramGenerator";

export default {
  title: "Components/generator/pixel/DiagramGenerator",
  component: DiagramGenerator,
} as ComponentMeta<typeof DiagramGenerator>;

const Template: ComponentStory<typeof DiagramGenerator> = (args) => <DiagramGenerator {...args} />;

export const Default = Template.bind({});

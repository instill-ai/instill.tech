import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseBlock } from "../../../components/generators/pixel/BaseBlock";

export default {
  title: "Components/generator/BaseBlock",
  component: BaseBlock,
} as ComponentMeta<typeof BaseBlock>;

const Template: ComponentStory<typeof BaseBlock> = (args) => <BaseBlock {...args} />;

export const Default = Template.bind({});
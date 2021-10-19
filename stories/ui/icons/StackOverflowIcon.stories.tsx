import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StackOverflowIcon } from "../../../components/ui/icons/StackOverflowIcon";

export default {
  title: "Components/icons/StackOverflowIcon",
  component: StackOverflowIcon,
} as ComponentMeta<typeof StackOverflowIcon>;

const Template: ComponentStory<typeof StackOverflowIcon> = (args) => (
  <StackOverflowIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

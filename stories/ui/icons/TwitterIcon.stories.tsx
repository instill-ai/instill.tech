import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TwitterIcon } from "../../../components/ui/icons/TwitterIcon";

export default {
  title: "Components/icons/TwitterIcon",
  component: TwitterIcon,
} as ComponentMeta<typeof TwitterIcon>;

const Template: ComponentStory<typeof TwitterIcon> = (args) => <TwitterIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

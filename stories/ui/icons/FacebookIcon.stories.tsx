import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FacebookIcon } from "../../../components/ui/icons/FacebookIcon";

export default {
  title: "Components/icons/FacebookIcon",
  component: FacebookIcon,
} as ComponentMeta<typeof FacebookIcon>;

const Template: ComponentStory<typeof FacebookIcon> = (args) => <FacebookIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

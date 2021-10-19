import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InstagramIcon } from "../../../components/ui/icons/InstagramIcon";

export default {
  title: "Components/icons/InstagramIcon",
  component: InstagramIcon,
} as ComponentMeta<typeof InstagramIcon>;

const Template: ComponentStory<typeof InstagramIcon> = (args) => <InstagramIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

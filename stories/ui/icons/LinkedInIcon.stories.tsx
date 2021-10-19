import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinkedInIcon } from "../../../components/ui/icons/LinkedInIcon";

export default {
  title: "Components/icons/LinkedInIcon",
  component: LinkedInIcon,
} as ComponentMeta<typeof LinkedInIcon>;

const Template: ComponentStory<typeof LinkedInIcon> = (args) => <LinkedInIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

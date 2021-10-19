import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GithubIcon } from "../../../components/ui/icons/GithubIcon";

export default {
  title: "Components/icons/GithubIcon",
  component: GithubIcon,
} as ComponentMeta<typeof GithubIcon>;

const Template: ComponentStory<typeof GithubIcon> = (args) => <GithubIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SlackIcon } from "../../../components/ui/icons/SlackIcon";

export default {
  title: "Components/icons/SlackIcon",
  component: SlackIcon,
} as ComponentMeta<typeof SlackIcon>;

const Template: ComponentStory<typeof SlackIcon> = (args) => <SlackIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

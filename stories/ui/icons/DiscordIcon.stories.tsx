import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DiscordIcon } from "../../../components/ui/icons/DiscordIcon";

export default {
  title: "Components/icons/DiscordIcon",
  component: DiscordIcon,
} as ComponentMeta<typeof DiscordIcon>;

const Template: ComponentStory<typeof DiscordIcon> = (args) => <DiscordIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  styleName: "w-6 h-6",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SocialMediaButtonGroup } from "../../../components/ui/buttons/SocialMediaButonGroup";

export default {
  title: "Components/Button/SocialMediaButtonGroup",
  component: SocialMediaButtonGroup,
} as ComponentMeta<typeof SocialMediaButtonGroup>;

const Template: ComponentStory<typeof SocialMediaButtonGroup> = (args) => (
  <SocialMediaButtonGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  styleName: "gap-x-4",
};

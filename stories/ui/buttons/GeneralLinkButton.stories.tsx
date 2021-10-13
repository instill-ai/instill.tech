import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GeneralLinkButton } from "../../../components/ui/buttons/GeneralLinkButton";

export default {
  title: "Components/Button/GeneralLinkButton",
  component: GeneralLinkButton,
} as ComponentMeta<typeof GeneralLinkButton>;

const Template: ComponentStory<typeof GeneralLinkButton> = (args) => (
  <GeneralLinkButton {...args} />
);

export const light = Template.bind({});

light.args = {
  title: "View roles",
  href: "/open-roles",
};

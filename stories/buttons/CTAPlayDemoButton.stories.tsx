import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CTAPlayDemoButton } from "../../components/ui/buttons/CTAPlayDemoButton";

export default {
  title: "Components/Button/CTAPlayDemoButton",
  component: CTAPlayDemoButton,
} as ComponentMeta<typeof CTAPlayDemoButton>;

const Template: ComponentStory<typeof CTAPlayDemoButton> = (args) => (
  <CTAPlayDemoButton {...args} />
);

export const Default = Template.bind({});

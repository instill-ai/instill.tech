import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GetAccessButton } from "../../../components/ui/buttons/GetAccessButton";

export default {
  title: "Components/Button/GetAccessButton",
  component: GetAccessButton,
} as ComponentMeta<typeof GetAccessButton>;

const Template: ComponentStory<typeof GetAccessButton> = (args) => <GetAccessButton {...args} />;

export const Light = Template.bind({});

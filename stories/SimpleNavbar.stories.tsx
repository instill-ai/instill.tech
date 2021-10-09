import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "../components/NavBar";

export default {
  title: "Components/Simple navbar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});

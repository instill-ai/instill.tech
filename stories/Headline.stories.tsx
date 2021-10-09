import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Headline } from "../components/Headline";

export default {
  title: "Components/Headline",
  component: Headline,
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args) => <Headline {...args} />;

export const Default = Template.bind({});

Default.args = {
  headlineText: "Beautiful analytics to grow smarter",
};

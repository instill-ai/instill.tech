import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SubHeadline } from "../components/ui/texts/SubHeadline";

export default {
  title: "Components/SubHeadline",
  component: SubHeadline,
} as ComponentMeta<typeof SubHeadline>;

const Template: ComponentStory<typeof SubHeadline> = (args) => <SubHeadline {...args} />;

export const Default = Template.bind({});

Default.args = {
  subHeadlineText:
    "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TestLandingPage } from "../../pages/test-landing-page";

export default {
  title: "Pages/TestLandingPage/index",
  component: TestLandingPage,
} as ComponentMeta<typeof TestLandingPage>;

const Template: ComponentStory<typeof TestLandingPage> = (args) => <TestLandingPage {...args} />;

export const Default = Template.bind({});

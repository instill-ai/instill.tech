import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NewFeatureBanner } from "../components/NewFeatureBanner";

export default {
  title: "Components/NewFeatureBanner",
  component: NewFeatureBanner,
} as ComponentMeta<typeof NewFeatureBanner>;

const Template: ComponentStory<typeof NewFeatureBanner> = (args) => <NewFeatureBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  featureName: "Check out the team dashboard",
};

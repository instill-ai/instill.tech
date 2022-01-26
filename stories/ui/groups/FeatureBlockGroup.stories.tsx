import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FeatureBlockGroup } from "../../../components/ui/groups/FeatureBlockGroup";

export default {
  title: "Components/Ui/Group/FeatureBlockGroup",
  component: FeatureBlockGroup,
} as ComponentMeta<typeof FeatureBlockGroup>;

const Template: ComponentStory<typeof FeatureBlockGroup> = (args) => (
  <FeatureBlockGroup {...args} />
);

export const Default = Template.bind({});

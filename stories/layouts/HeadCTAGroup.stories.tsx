import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeadCTAGroup } from "../../components/layouts/HeadCTAGroup";

export default {
  title: "Components/Layout/HeadCTAGroup",
  component: HeadCTAGroup,
} as ComponentMeta<typeof HeadCTAGroup>;

const Template: ComponentStory<typeof HeadCTAGroup> = (args) => <HeadCTAGroup {...args} />;

export const Default = Template.bind({});

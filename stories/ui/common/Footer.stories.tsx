import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "../../../components/ui/common/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const light = Template.bind({});

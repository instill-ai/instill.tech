import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SecureYourSpotBlock } from "../../../components/ui/blocks/SecureYourSpotBlock";

export default {
  title: "Components/Ui/Block/SecureYourSpotBlock",
  component: SecureYourSpotBlock,
} as ComponentMeta<typeof SecureYourSpotBlock>;

const Template: ComponentStory<typeof SecureYourSpotBlock> = (args) => (
  <SecureYourSpotBlock {...args} />
);

export const Default = Template.bind({});

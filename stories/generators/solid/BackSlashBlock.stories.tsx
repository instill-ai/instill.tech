import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BackSlashBlock } from "../../../components/generators/solid/BackSlashBlock";

export default {
  title: "Components/generator/solid/BackSlashBlock",
  component: BackSlashBlock,
} as ComponentMeta<typeof BackSlashBlock>;

const Template: ComponentStory<typeof BackSlashBlock> = (args) => <BackSlashBlock {...args} />;

export const Default = Template.bind({});
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemberAvatarKernelBlock } from "../../../components/ui/blocks/MemberAvatarKernelBlock";

export default {
  title: "Components/Ui/Block/MemberAvatarKernelBlock",
  component: MemberAvatarKernelBlock,
} as ComponentMeta<typeof MemberAvatarKernelBlock>;

const Template: ComponentStory<typeof MemberAvatarKernelBlock> = (args) => (
  <div className="w-[640px]">
    <MemberAvatarKernelBlock {...args} />
  </div>
);

export const Default = Template.bind({});

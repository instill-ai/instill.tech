import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FeatureBlockGroup } from "../../../components/ui/groups/FeatureBlockGroup";
import { MemberKernelSvg } from "../../../components/ui/svgs/images/MemberKernel";

export default {
  title: "Components/Ui/Svg/MemberKernel",
  component: MemberKernelSvg,
} as ComponentMeta<typeof MemberKernelSvg>;

const Template: ComponentStory<typeof MemberKernelSvg> = (args) => (
  <MemberKernelSvg styleName="w-[360px] h-[360px]" />
);

export const Default = Template.bind({});

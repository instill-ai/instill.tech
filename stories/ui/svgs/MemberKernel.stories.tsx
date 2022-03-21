import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemberKernelSvg } from "../../../components/ui/svgs/images/MemberKernelSvg";

export default {
  title: "Components/Ui/Svg/MemberKernelSvg",
  component: MemberKernelSvg,
} as ComponentMeta<typeof MemberKernelSvg>;

const Template: ComponentStory<typeof MemberKernelSvg> = (args) => (
  <MemberKernelSvg
    id="test-1"
    kernelColor="#F7F7F7"
    kernelColorRectLocation={["1, 2, 6, 7"]}
    styleName="w-[360px] h-[360px]"
  />
);
export const Default = Template.bind({});

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "next/image";
import VdpArrowBlock from "./VdpArrowBlock";

export default {
  title: "Components/VdpArrowBlock",
  component: VdpArrowBlock,
} as ComponentMeta<typeof VdpArrowBlock>;

const Template: ComponentStory<typeof VdpArrowBlock> = (args) => (
  <VdpArrowBlock {...args} />
);

export const Playground: ComponentStory<typeof VdpArrowBlock> = Template.bind(
  {}
);

Playground.args = {
  title: "Extract",
  description: "Extract unstructured visual data from pre-built data sources",
  icon: (
    <img
      src="/images/vdp-flow-source.svg"
      width={70}
      height={63}
      alt="VDP flow source icon"
    />
  ),
  color: "#FFFCE3",
};

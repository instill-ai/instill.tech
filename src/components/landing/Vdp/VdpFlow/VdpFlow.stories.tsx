import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VdpFlow } from "./VdpFlow";

export default {
  title: "Components/VdpFlow",
  component: VdpFlow,
} as ComponentMeta<typeof VdpFlow>;

const Template: ComponentStory<typeof VdpFlow> = (args) => (
  <VdpFlow {...args} />
);

export const Playground: ComponentStory<typeof VdpFlow> = Template.bind({});

Playground.args = {};

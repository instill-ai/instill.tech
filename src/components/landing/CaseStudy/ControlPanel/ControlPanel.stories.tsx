import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ControlPanel } from "./ControlPanel";

export default {
  title: "Landing/CaseStudy/ControlPanel",
  component: ControlPanel,
} as ComponentMeta<typeof ControlPanel>;

const Template: ComponentStory<typeof ControlPanel> = (args) => (
  <div className="flex h-[1000px]">
    <ControlPanel {...args} />
  </div>
);

export const Playground: ComponentStory<typeof ControlPanel> = Template.bind(
  {}
);

Playground.args = {};

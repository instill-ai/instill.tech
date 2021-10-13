import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeroAnimation } from "../../components/ui/animations/HeroAnimation";

export default {
  title: "Components/Animation/HeroAnimation",
  component: HeroAnimation,
} as ComponentMeta<typeof HeroAnimation>;

const Template: ComponentStory<typeof HeroAnimation> = (args) => (
  <div className="flex bg-[#063477]">
    <HeroAnimation {...args} />
  </div>
);

export const light = Template.bind({});

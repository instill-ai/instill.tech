import { ComponentStory, ComponentMeta } from "@storybook/react";
import Terminal from "./Terminal";

export default {
  title: "Components/Terminal",
  component: Terminal,
} as ComponentMeta<typeof Terminal>;

const Template: ComponentStory<typeof Terminal> = (args) => (
  <Terminal {...args} />
);

export const Playground: ComponentStory<typeof Terminal> = Template.bind({});

Playground.args = {
  currectResource: "pipeline",
};

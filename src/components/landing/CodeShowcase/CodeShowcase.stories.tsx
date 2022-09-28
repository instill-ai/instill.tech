import { ComponentStory, ComponentMeta } from "@storybook/react";
import CodeShowcase from "./CodeShowcase";

export default {
  title: "Components/Landing/CodeShowcase",
  component: CodeShowcase,
} as ComponentMeta<typeof CodeShowcase>;

const Template: ComponentStory<typeof CodeShowcase> = (args) => (
  <CodeShowcase {...args} />
);

export const Playground: ComponentStory<typeof CodeShowcase> = Template.bind(
  {}
);

Playground.args = {};

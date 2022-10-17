import { ComponentStory, ComponentMeta } from "@storybook/react";
import ShowcaseTable from "./ShowcaseTable";

export default {
  title: "Components/ShowcaseTable",
  component: ShowcaseTable,
} as ComponentMeta<typeof ShowcaseTable>;

const Template: ComponentStory<typeof ShowcaseTable> = (args) => (
  <ShowcaseTable {...args} />
);

export const Playground: ComponentStory<typeof ShowcaseTable> = Template.bind(
  {}
);

Playground.args = {
  head: ["text", "number"],
  rows: [["Filing Jointly or Qualifying Widow(er)", "30,000"]],
};

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShowcaseTable } from "./ShowcaseTable";

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
  tables: [
    {
      name: "workspace-category-table",
      head: ["Category", "x", "y"],
      rows: [
        ["Unattended object", "3", "52"],
        ["Person 1", "12", "104"],
        ["Person 2", "394", "502"],
        ["Helmet 1", "123", "1042"],
        ["Helmet 2", "320", "242"],
      ],
    },
    {
      name: "workspace-skeleton-table",
      head: ["Skeleton", "Head_x", "Head_y"],
      rows: [
        ["Person 1", "3", "52"],
        ["Person 2", "12", "222"],
        ["Person 3", "921", "307"],
      ],
    },
  ],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../../components/ui/common/Header";

export default {
  title: "Components/Layout/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttons: [
    {
      name: "Home",
      withChevon: false,
    },
    {
      name: "Products",
      withChevon: true,
    },
    {
      name: "Resources",
      withChevon: true,
    },
    {
      name: "Pricing",
      withChevon: false,
    },
  ],
  gapStyle: "gap-x-8",
};

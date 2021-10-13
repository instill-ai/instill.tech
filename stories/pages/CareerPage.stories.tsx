import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CareerPage from "../../pages/career";

export default {
  title: "Pages/Career/index",
  component: CareerPage,
} as ComponentMeta<typeof CareerPage>;

const Template: ComponentStory<typeof CareerPage> = (args) => <CareerPage {...args} />;

export const light = Template.bind({});

light.args = {
  positions: [
    {
      fields: {
        slug: "founding-engineer-frontend",
        title: "Founding Engineer (Front-end Engineer)",
        working_time: "full-time",
        location: "remote",
      },
    },
  ],
};

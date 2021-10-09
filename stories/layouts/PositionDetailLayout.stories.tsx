import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PositionDetailLayout } from "../../components/layouts/PositionDetailLayout";

export default {
  title: "Components/Layout/PositionDetailLayout",
  component: PositionDetailLayout,
} as ComponentMeta<typeof PositionDetailLayout>;

const Template: ComponentStory<typeof PositionDetailLayout> = (args) => (
  <PositionDetailLayout {...args} />
);

export const Light = Template.bind({});
Light.args = {
  position: {
    title: "Founding Engineer (Front-end Engineer)",
    working_time: "full-time",
    location: "remote",
    intro:
      "We’re looking for passionate and dedicated early members to help us bootstrap the company. You’ll be joining the founding team to establish its strong foundation from the very beginning. This is a great opportunity for those who want to experience fast growing startup at zero to one stage. It is also a position for those who value learning for long-term above earning in short-term. You will impact the company direction and help Instill AI build its strong foundation for scaling in the near future.",
    your_responsibility:
      "- Work closely with co-founders to rapidly build and iterate a successful MVP - Design and impact the product direction, shape product roadmaps from idea to execution",
    our_criteria:
      "Significant experience in front-end development using Vue or React, have shipped projects before",
    salary:
      "£35,000 - £50,000 (UK) and NT$1,000,000 - 1,500,000 (TW), or other locations based on the local living cost",
    stock_options: "0.1% - 0.3% Equity",
  },
};

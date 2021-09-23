import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CareerPositionList from '../../components/lists/CareerPositionList';


export default {
  title: 'Components/Layout/PositionDetailLayout',
  component: CareerPositionList,
} as ComponentMeta<typeof CareerPositionList>;

const Template: ComponentStory<typeof CareerPositionList> = (args) => <CareerPositionList {...args} />;

export const Light = Template.bind({});
Light.args = {
  positions: [
    {
      fields: {
        slug: "founding-engineer-frontend",
        title: "Founding Engineer (Front-end Engineer)",
        working_time: "full-time",
        location: "remote"
      }
    },
    {
      fields: {
        slug: "founding-engineer-ai",
        title: "Founding Engineer (Full Stack AI Engineer)",
        working_time: "full-time",
        location: "remote"
      }
    }
  ]
}
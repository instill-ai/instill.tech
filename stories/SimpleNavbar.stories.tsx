import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SimpleNavBar from '../components/SimpleNavBar';

export default {
  title: 'Components/Layout/Simple navbar',
  component: SimpleNavBar,
} as ComponentMeta<typeof SimpleNavBar>;

const Template: ComponentStory<typeof SimpleNavBar> = (args) => <SimpleNavBar {...args} />;

export const Light = Template.bind({});

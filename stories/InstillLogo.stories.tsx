import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InstillLogo from '../components/InstillLogo';


export default {
  title: 'Components/Logo',
  component: InstillLogo,
} as ComponentMeta<typeof InstillLogo>;

const Template: ComponentStory<typeof InstillLogo> = (args) => <InstillLogo {...args} />;

export const InstillLogoWithText = Template.bind({});

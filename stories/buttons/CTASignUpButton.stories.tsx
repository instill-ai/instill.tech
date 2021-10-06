import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CTASignUpButton from '../../components/buttons/CTASignUpButton';

export default {
  title: 'Components/Button/CTASignUpButton',
  component: CTASignUpButton,
} as ComponentMeta<typeof CTASignUpButton>;

const Template: ComponentStory<typeof CTASignUpButton> = (args) => <CTASignUpButton {...args} />;

export const Default = Template.bind({});
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderButton from '../../components/buttons/HeaderButton';

export default {
  title: 'Components/Button/HeaderButton',
  component: HeaderButton,
} as ComponentMeta<typeof HeaderButton>;

const Template: ComponentStory<typeof HeaderButton> = (args) => <HeaderButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  withChevon: true,
  name: "About"
}
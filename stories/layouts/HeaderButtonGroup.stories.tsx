import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderButtonGroup from "../../components/layouts/HeaderButtonGroup"


export default {
  title: 'Components/Layout/HeaderButtonGroup',
  component: HeaderButtonGroup,
} as ComponentMeta<typeof HeaderButtonGroup>;

const Template: ComponentStory<typeof HeaderButtonGroup> = (args) => <HeaderButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  gap: 8
}
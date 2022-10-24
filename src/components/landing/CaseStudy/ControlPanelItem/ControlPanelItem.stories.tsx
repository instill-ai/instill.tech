import {
  AwsS3Icon,
  BasicSingleSelect,
  ModelIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ControlPanelItem from "./ControlPanelItem";

export default {
  title: "Landing/CaseStudy/ControlPanelItem",
  component: ControlPanelItem,
} as ComponentMeta<typeof ControlPanelItem>;

const Template: ComponentStory<typeof ControlPanelItem> = (args) => (
  <ControlPanelItem {...args} />
);

export const Playground: ComponentStory<typeof ControlPanelItem> =
  Template.bind({});

Playground.args = {
  icon: (
    <ModelIcon
      width="w-[30px]"
      height="h-[30px]"
      position="my-auto"
      color="fill-white"
    />
  ),
  title: "Model",
  description: "Select an exisiting online model",
  isActive: true,
  controls: [
    <BasicSingleSelect
      key="case-study-model-control"
      id="case-study-model-control"
      instanceId="case-study-model-control"
      label="Model"
      required={true}
      disabled={true}
      options={[
        {
          label: "S3",
          value: "S3",
          startIcon: (
            <AwsS3Icon width="w-[30px]" height="h-[30px]" position="my-auto" />
          ),
        },
      ]}
      value={{
        label: "S3",
        value: "S3",
        startIcon: (
          <AwsS3Icon width="w-[30px]" height="h-[30px]" position="my-auto" />
        ),
      }}
    />,
  ],
};

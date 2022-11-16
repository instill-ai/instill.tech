import {
  AwsS3Icon,
  BasicSingleSelect,
  GoogleDriveIcon,
  ModelIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ControlPanelItem } from "./ControlPanelItem";

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
    {
      id: "case-study-0-source-control",
      customizable: false,
      label: "Source",
      isActive: true,
      options: [
        {
          label: "batch-invoice-photos",
          value: "batch-invoice-photos",
          startIcon: (
            <GoogleDriveIcon
              width="w-[30px]"
              height="h-[30px]"
              position="my-auto"
            />
          ),
        },
      ],
    },
  ],
};

import {
  AwsS3Icon,
  BasicSingleSelect,
  BigQueryIcon,
  GoogleDriveIcon,
  ModelIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ControlPanelLayout from "./ControlPanel";

export default {
  title: "Landing/CaseStudy/ControlPanelLayout",
  component: ControlPanelLayout,
} as ComponentMeta<typeof ControlPanelLayout>;

const Template: ComponentStory<typeof ControlPanelLayout> = (args) => (
  <div className="flex h-[1000px]">
    <ControlPanelLayout {...args} />
  </div>
);

export const Playground: ComponentStory<typeof ControlPanelLayout> =
  Template.bind({});

Playground.args = {};

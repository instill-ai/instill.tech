import {
  AwsS3Icon,
  BasicSingleSelect,
  BigQueryIcon,
  GoogleDriveIcon,
  ModelIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ControlPanelLayout from "./ControlPanelLayout";

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

Playground.args = {
  controls: {
    source: [
      <BasicSingleSelect
        key="case-study-source-control"
        id="case-study-source-control"
        instanceId="case-study-source-control"
        label="Source"
        required={true}
        disabled={true}
        options={[
          {
            label: "Camera-on-site-1",
            value: "Camera-on-site-1",
            startIcon: (
              <GoogleDriveIcon
                width="w-[30px]"
                height="h-[30px]"
                position="my-auto"
              />
            ),
          },
        ]}
        value={{
          label: "Camera-on-site-1",
          value: "Camera-on-site-1",
          startIcon: (
            <GoogleDriveIcon
              width="w-[30px]"
              height="h-[30px]"
              position="my-auto"
            />
          ),
        }}
      />,
    ],
    model: [
      <BasicSingleSelect
        key="case-study-model-control-0"
        id="case-study-model-control-0"
        instanceId="case-study-model-control-0"
        label="Model"
        required={true}
        disabled={true}
        options={[
          {
            label: "yolov7",
            value: "yolov7",
            startIcon: (
              <ModelIcon
                width="w-[30px]"
                height="h-[30px]"
                position="my-auto"
                color="fill-black"
              />
            ),
          },
        ]}
        value={{
          label: "yolov7",
          value: "yolov7",
          startIcon: (
            <ModelIcon
              width="w-[30px]"
              height="h-[30px]"
              position="my-auto"
              color="fill-black"
            />
          ),
        }}
      />,
      <BasicSingleSelect
        key="case-study-model-control-1"
        id="case-study-model-control-1"
        instanceId="case-study-model-control-1"
        label="Model"
        required={true}
        disabled={true}
        options={[
          {
            label: "yolov7-pose",
            value: "yolov7-pose",
            startIcon: (
              <ModelIcon
                width="w-[30px]"
                height="h-[30px]"
                position="my-auto"
                color="fill-black"
              />
            ),
          },
        ]}
        value={{
          label: "yolov7-pose",
          value: "yolov7-pose",
          startIcon: (
            <ModelIcon
              width="w-[30px]"
              height="h-[30px]"
              position="my-auto"
              color="fill-black"
            />
          ),
        }}
      />,
    ],
    destination: [
      <BasicSingleSelect
        key="case-study-destination-control"
        id="case-study-destination-control"
        instanceId="case-study-destination-control"
        label="Destination"
        required={true}
        disabled={true}
        options={[
          {
            label: "workspace-safety-record",
            value: "workspace-safety-record",
            startIcon: (
              <BigQueryIcon
                width="w-[30px]"
                height="h-[30px]"
                position="my-auto"
              />
            ),
          },
        ]}
        value={{
          label: "workspace-safety-record",
          value: "workspace-safety-record",
          startIcon: (
            <BigQueryIcon
              width="w-[30px]"
              height="h-[30px]"
              position="my-auto"
            />
          ),
        }}
      />,
    ],
  },
};

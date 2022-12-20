import {
  AirbyteIcon,
  GrpcIcon,
  HttpIcon,
  PlusIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconsCube } from "./IconsCube";

export default {
  title: "Components/IconsCube",
  component: IconsCube,
} as ComponentMeta<typeof IconsCube>;

const Template: ComponentStory<typeof IconsCube> = (args) => (
  <IconsCube {...args} />
);

export const Playground: ComponentStory<typeof IconsCube> = Template.bind({});

const iconProps = { width: "w-full", height: "h-full", position: "m-auto" };

Playground.args = {
  cubes: [
    {
      id: "httpIcon",
      icon: (
        <HttpIcon {...iconProps} color="fill-instillBlue50" position="m-auto" />
      ),
      color: "bg-instillBlue10",
    },
    {
      id: "grpcIcon",
      icon: <GrpcIcon {...iconProps} color="fill-instillWarmOrange50" />,
      color: "bg-instillWarmOrange05",
    },
    {
      id: "airbyteIcon",
      icon: <AirbyteIcon {...iconProps} />,
      color: "bg-[#ECEBFF]",
    },
    {
      id: "plusIcon",
      icon: <PlusIcon {...iconProps} color="fill-instillGrey50" />,
      color: "bg-instillGrey05",
    },
  ],
};

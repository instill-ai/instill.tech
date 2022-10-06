import {
  AirbyteIcon,
  GrpcIcon,
  HttpIcon,
  PlusIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconsCube from "./IconsCube";

export default {
  title: "Components/IconsCube",
  component: IconsCube,
} as ComponentMeta<typeof IconsCube>;

const Template: ComponentStory<typeof IconsCube> = (args) => (
  <IconsCube {...args} />
);

export const Playground: ComponentStory<typeof IconsCube> = Template.bind({});

Playground.args = {
  cubes: [
    {
      id: "http",
      icon: (
        <HttpIcon
          width="w-[180px]"
          height="h-[180px]"
          color="fill-instillBlue50"
          position="m-auto"
        />
      ),
      color: "bg-instillBlue10",
      width: "w-[180px]",
      height: "h-[180px]",
    },
    {
      id: "grpc",
      icon: (
        <GrpcIcon
          width="w-[180px]"
          height="h-[180px]"
          color="fill-instillWarmOrange50"
          position="m-auto"
        />
      ),
      color: "bg-instillWarmOrange05",
      width: "w-[180px]",
      height: "h-[180px]",
    },
    {
      id: "airbyte",
      icon: (
        <AirbyteIcon width="w-[180px]" height="h-[180px]" position="m-auto" />
      ),
      color: "bg-[#ECEBFF]",
      width: "w-[180px]",
      height: "h-[180px]",
    },
    {
      id: "plus",
      icon: (
        <PlusIcon
          width="w-[180px]"
          height="h-[180px]"
          color="fill-instillGrey50"
          position="m-auto"
        />
      ),
      color: "bg-instillGrey05",
      width: "w-[180px]",
      height: "h-[180px]",
    },
  ],
};

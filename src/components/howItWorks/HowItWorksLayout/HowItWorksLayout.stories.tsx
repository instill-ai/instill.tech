import {
  AirbyteIcon,
  GrpcIcon,
  HttpIcon,
  PlusIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HowItWorksLayout from "./HowItWorksLayout";

export default {
  title: "Components/HowItWorksLayout",
  component: HowItWorksLayout,
} as ComponentMeta<typeof HowItWorksLayout>;

const Template: ComponentStory<typeof HowItWorksLayout> = (args) => (
  <HowItWorksLayout {...args} />
);

export const Playground: ComponentStory<typeof HowItWorksLayout> =
  Template.bind({});

Playground.args = {
  type: "left",
  title: "Pre-built ETL data connectors for extensive data access",
  description:
    "By leveraging ready-to-use ETL data connectors, VDP is the single point of visual data integration, where you can sync visual data from anywhere into data warehouses or applications. Focus on gaining insights across all your visual data, instead of maintaining connectors.",
  learnMoreLink: "",
  number: 1,
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

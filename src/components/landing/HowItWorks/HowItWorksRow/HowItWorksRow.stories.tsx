import {
  AirbyteIcon,
  GrpcIcon,
  HttpIcon,
  PlusIcon,
} from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HowItWorksRow } from "./HowItWorksRow";

export default {
  title: "Components/HowItWorksRow",
  component: HowItWorksRow,
} as ComponentMeta<typeof HowItWorksRow>;

const Template: ComponentStory<typeof HowItWorksRow> = (args) => (
  <HowItWorksRow {...args} />
);

export const Playground: ComponentStory<typeof HowItWorksRow> = Template.bind(
  {}
);

const iconProps = { width: "w-full", height: "h-full", position: "m-auto" };

Playground.args = {
  type: "left",
  title: "Pre-built ETL data connectors for extensive data access",
  description:
    "By leveraging ready-to-use ETL data connectors, VDP is the single point of unstructured data integration, where you can sync unstructured data from anywhere into data warehouses or applications. Focus on gaining insights across all your data, instead of maintaining connectors.",
  learnMoreLink: "",
  // number: 1,
  cubes: [
    {
      id: "httpIcon",
      icon: (
        <HttpIcon
          {...iconProps}
          color="fill-semantic-accent-on-bg"
          position="m-auto"
        />
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

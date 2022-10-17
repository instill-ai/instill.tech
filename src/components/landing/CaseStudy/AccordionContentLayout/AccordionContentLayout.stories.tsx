import { OpticalCharacterRecognitionIcon } from "@instill-ai/design-system";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "next/future/image";
import AccordionContentLayout from "./AccordionContentLayout";

export default {
  title: "Components/AccordionContentLayout",
  component: AccordionContentLayout,
} as ComponentMeta<typeof AccordionContentLayout>;

const Template: ComponentStory<typeof AccordionContentLayout> = (args) => (
  <AccordionContentLayout {...args} />
);

export const Playground: ComponentStory<typeof AccordionContentLayout> =
  Template.bind({});

Playground.args = {
  icon: (
    <OpticalCharacterRecognitionIcon
      width="w-20"
      height="h-20"
      color="fill-white"
      position="m-auto"
    />
  ),
  title: `Optical Character Recognition`,
  source: "Google Drive",
  destination: "Google Sheet",
  description:
    "Automatically capture and extract data from invoices to avoid manual data entry",
  showcases: [
    <Image
      key="case-study-invoice-0"
      className="h-auto w-full"
      src="/images/case-study-ocr.png"
      alt="Instill case study ocr"
    />,
  ],
};

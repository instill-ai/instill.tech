import cn from "clsx";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

import { Terminal } from "./Terminal";
import { CommonCtaButton, SectionHeader, SectionLabel } from "@/components/ui";
import {
  BasicAccordion,
  BgIconAccordion,
  DataDestinationIcon,
  DataSourceIcon,
  ModelIcon,
  PipelineIcon,
} from "@instill-ai/design-system";
import { AccordionContent } from "./AccordionContent";

export type CodeShowcaseProps = {
  marginBottom?: string;
};

export type Resource = "pipeline" | "source" | "model" | "destination";
export type SetResource = Dispatch<SetStateAction<Resource>>;

export const CodeShowcase = ({ marginBottom }: CodeShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([0]);

  const currentResource = useMemo<Resource>(() => {
    switch (activeIndex[0]) {
      case 0:
        return "pipeline";
      case 1:
        return "source";
      case 2:
        return "model";
      case 3:
        return "destination";
      default:
        console.error("Instill website internal error: index out of bound");
        return "pipeline";
    }
  }, [activeIndex]);

  const accordionItems = useMemo(() => {
    const bgIconStyle = {
      width: "w-[250px]",
      height: "h-[250px]",
      color: "fill-white opacity-60",
      position: "m-auto",
    };

    return [
      {
        headerActiveBgColor: "bg-instillSkyBlue",
        headerInActiveBgColor: "bg-instillSkyBlue",
        headerActiveTextColor: "text-white",
        headerInActiveTextColor: "text-white",
        header: "Pipeline",
        content: (
          <AccordionContent
            bgColor="bg-instillSkyBlue"
            link="/docs/core-concepts/pipeline"
            description="An end-to-end workflow that automates a 
              sequence of sub-components to process unstructured data."
          />
        ),
        bgIcon: <PipelineIcon {...bgIconStyle} />,
      },
      {
        headerActiveBgColor: "bg-instillNatureGreen",
        headerInActiveBgColor: "bg-instillNatureGreen",
        headerActiveTextColor: "text-white",
        headerInActiveTextColor: "text-white",
        header: "Source",
        content: (
          <AccordionContent
            bgColor="bg-instillNatureGreen"
            link="/docs/core-concepts/connector#source"
            description="A data connector in charge of ingesting 
              unstructured data into a Pipeline."
          />
        ),
        bgIcon: <DataSourceIcon {...bgIconStyle} />,
      },
      {
        headerActiveBgColor: "bg-instillLemonYellow50",
        headerInActiveBgColor: "bg-instillLemonYellow50",
        headerActiveTextColor: "text-white",
        headerInActiveTextColor: "text-white",
        header: "Model",
        content: (
          <AccordionContent
            bgColor="bg-instillLemonYellow50"
            link="docs/core-concepts/model"
            description="An algorithm that runs on unstructured 
              data to solve a certain AI task."
          />
        ),
        bgIcon: <ModelIcon {...bgIconStyle} />,
      },
      {
        headerActiveBgColor: "bg-instillWarmOrange50",
        headerInActiveBgColor: "bg-instillWarmOrange50",
        headerActiveTextColor: "text-white",
        headerInActiveTextColor: "text-white",
        header: "Destination",
        content: (
          <AccordionContent
            bgColor="bg-instillWarmOrange50"
            link="/docs/core-concepts/connector#destination"
            description="A data connector to load the standarised 
              AI task output from model to the destination."
          />
        ),
        bgIcon: <DataDestinationIcon {...bgIconStyle} />,
      },
    ];
  }, []);

  return (
    <div className={cn("flex flex-col py-20", marginBottom)}>
      <div className="mb-10 flex flex-col">
        <SectionLabel
          text="For researchers & developers"
          position="mr-auto mb-2.5"
        />
        <SectionHeader
          header="VDP as code"
          headerTextColor="text-white"
          headerWidth="w-full"
          marginBottom="mb-4"
        />
        <p className="mb-10 text-white text-instill-body-normal">
          A VDP pipeline is configured in a declarative style, allowing for
          human-/machine-friendly management. VDP will proactively allocate
          compute resource to persistently operate the unstructured data ETL
          pipeline, abstracting complex infrastructure from the users.
        </p>
        <CommonCtaButton
          text="See documentation"
          link="/docs/start-here/getting-started"
          withArrow={true}
          position="mr-auto"
        />
      </div>

      <div className="flex flex-col-reverse gap-y-10 xl:grid xl:grid-cols-12 xl:flex-col xl:gap-x-6">
        <div className="hidden xl:col-span-4 xl:flex">
          <BgIconAccordion
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            allowMultiItems={false}
            enableHeaderIcon={true}
            headerIconColor="fill-white"
            bgIconPosition="top-0 -right-20"
            items={accordionItems}
          />
        </div>
        <div className="xl:hidden">
          <BasicAccordion
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            allowMultiItems={false}
            enableHeaderIcon={true}
            headerIconColor="fill-white"
            items={accordionItems}
          />
        </div>
        <div className="xl:col-span-8">
          <Terminal currectResource={currentResource} />
        </div>
      </div>
    </div>
  );
};

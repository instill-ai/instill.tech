import cn from "clsx";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

import { Terminal } from "./Terminal";
import { CommonCtaButton, SectionLabel } from "@/components/ui";
import {
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
        throw new Error("Instill website internal error: index out of bound");
    }
  }, [activeIndex]);

  const bgIconStyle = {
    width: "w-[250px]",
    height: "h-[250px]",
    color: "fill-white opacity-60",
    position: "m-auto",
  };

  return (
    <div className={cn("flex flex-col", marginBottom)}>
      <div className="mb-10 flex flex-col">
        <SectionLabel
          text="For researchers & developers"
          position="mr-auto mb-2.5"
        />
        <h3 className="mb-5 text-white text-instill-h2">VDP as code</h3>
        <p className="mb-[60px] text-white text-instill-body-normal">
          A VDP pipeline is configured in a declarative style, allowing for
          human-/machine-friendly management. VDP will proactively allocate
          compute resource to persistently operate the visual data ETL pipeline,
          abstracting complex infrastructure from the users.
        </p>
        <CommonCtaButton
          text="See documentation"
          link="/docs/start-here/getting-started"
          withArrow={true}
          position="mr-auto"
        />
      </div>

      <div className="flex flex-col gap-y-10 xl:flex-row xl:gap-y-0 xl:gap-x-6">
        <div className="xl:w-4/12">
          <BgIconAccordion
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            allowMultiItems={false}
            enableHeaderIcon={true}
            headerIconColor="fill-white"
            bgIconPosition="top-0 -right-20"
            items={[
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
                      sequence of sub-components to process visual data."
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
                      unstructured visual data into a Pipeline."
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
                      visual data to solve a certain Computer Vision (CV) 
                      Task."
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
                      CV Task output from Model to the destination."
                  />
                ),
                bgIcon: <DataDestinationIcon {...bgIconStyle} />,
              },
            ]}
          />
        </div>
        <div className="xl:w-8/12">
          <Terminal currectResource={currentResource} />
        </div>
      </div>
    </div>
  );
};

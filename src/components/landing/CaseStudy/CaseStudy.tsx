import { BlueprintContainer } from "@/components/ui";
import {
  BasicAccordion,
  DataSourceIcon,
  ImageClassificationIcon,
  ObjectDetectionIcon,
  OpticalCharacterRecognitionIcon,
  PipelineIcon,
} from "@instill-ai/design-system";
import cn from "clsx";
import Image from "next/future/image";
import { useRef } from "react";
import AccordionContentLayout from "./AccordionContentLayout";

export type CaseStudyProps = {
  marginBottom?: string;
};

const CaseStudy = ({ marginBottom }: CaseStudyProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const iconStyle = {
    width: "w-20",
    height: "h-20",
    color: "fill-white",
    position: "m-auto",
  };

  return (
    <div
      ref={parentRef}
      className={cn("w-full bg-instillGrey90", marginBottom)}
    >
      <BlueprintContainer
        parentRef={parentRef}
        childrenRef={childrenRef}
        padding="py-[60px]"
        unitHeight={30}
        unitWidth={30}
        bgColor="bg-instillGrey90"
      >
        <div
          ref={childrenRef}
          className="m-auto flex w-full max-w-[1127px] flex-row"
        >
          <div className="flex w-2/3">
            <BasicAccordion
              enableHeaderIcon={false}
              initialActiveIndex={0}
              items={[
                {
                  header: "Invoice Processing",
                  headerBgColor: "bg-instillNeonBlue",
                  headerTextColor: "text-white",
                  content: (
                    <AccordionContentLayout
                      title="Optical Character Recognition"
                      source="Google Drive"
                      destination="Google Sheet"
                      description="Automatically capture and extract data from 
                        invoices to avoid manual data entry"
                      showcase={
                        <Image
                          width={336}
                          height={355}
                          src="/images/case-study-invoice.png"
                          alt="Instill case study invoice image"
                          className="ml-auto"
                        />
                      }
                      icon={<OpticalCharacterRecognitionIcon {...iconStyle} />}
                    />
                  ),
                },
                {
                  header: "Workspace Safety",
                  headerBgColor: "bg-[#2596AE]",
                  headerTextColor: "text-white",
                  content: (
                    <AccordionContentLayout
                      title="Object detection & Pose Estimation"
                      source="Camera (IoT)"
                      destination="PostgreSQL"
                      description="Spot unsafe behaviours in real-time to lower 
                        employee health incidents and improve workspace safety."
                      showcase={
                        <Image
                          width={336}
                          height={355}
                          src="/images/case-study-workspace.png"
                          alt="Instill case study workspace image"
                          className="ml-auto"
                        />
                      }
                      icon={<ObjectDetectionIcon {...iconStyle} />}
                    />
                  ),
                },
                {
                  header: "E-Commerce Labelling",
                  headerBgColor: "bg-[#2596AE]",
                  headerTextColor: "text-white",
                  content: (
                    <AccordionContentLayout
                      title="Image tagging"
                      source="S3"
                      destination="Redshift"
                      description="Automatically detect and tag visual 
                        attributes (such as category, colour, style, and more)  
                        in the products."
                      showcase={
                        <Image
                          width={336}
                          height={355}
                          src="/images/case-study-ecommerce.png"
                          alt="Instill case study e-commerce image"
                          className="ml-auto"
                        />
                      }
                      icon={<ImageClassificationIcon {...iconStyle} />}
                    />
                  ),
                },
                {
                  header: "Customise Your Pipeline",
                  headerBgColor: "bg-[#2596AE]",
                  headerTextColor: "text-white",
                  content: (
                    <AccordionContentLayout
                      title="Task for your use case"
                      source="Source"
                      destination="Destination"
                      description="Stop building data pipelines from scratch. 
                        Just use VDP to connect your data and import STOA Vision 
                        AI models to solve your use cases."
                      showcase={
                        <div className="ml-auto flex h-[355px] w-[336px] bg-[#268398]">
                          <DataSourceIcon
                            width="w-[226px]"
                            height="h-[226px]"
                            color="fill-white"
                            position="m-auto"
                          />
                        </div>
                      }
                      icon={<PipelineIcon {...iconStyle} />}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </BlueprintContainer>
    </div>
  );
};

export default CaseStudy;

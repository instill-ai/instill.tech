import { BlueprintContainer } from "@/components/ui";
import { useInterval } from "@/hooks/useInterval";
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
import { useEffect, useRef, useState } from "react";
import AccordionContentLayout from "./AccordionContentLayout";
import ShowCaseTable from "./ShowcaseTable/ShowcaseTable";

export type CaseStudyProps = {
  marginBottom?: string;
};

const CaseStudy = ({ marginBottom }: CaseStudyProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [showcaseMaxFrame, setShowcaseMaxFrame] = useState<number>(0);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentFrame, setCurrentFrame] = useState<number>(0);

  useEffect(() => {
    setCurrentFrame(0);
    switch (activeIndex) {
      case 1:
        setShowcaseMaxFrame(4);
        break;
      default:
        setShowcaseMaxFrame(2);
        break;
    }
  }, [activeIndex]);

  useInterval(() => {
    setCurrentFrame((prev) => {
      if (prev + 1 <= showcaseMaxFrame) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }, 1000);

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
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              enableHeaderIcon={false}
              items={[
                {
                  header: "Invoice Processing",
                  headerActiveBgColor: "bg-instillNeonBlue",
                  headerInActiveBgColor: "bg-[#2596AE]",
                  headerActiveTextColor: "text-white",
                  headerInActiveTextColor: "text-instillGray80",
                  content: (
                    <AccordionContentLayout
                      title="Optical Character Recognition"
                      source="Google Drive"
                      destination="Google Sheet"
                      description="Automatically capture and extract data from 
                        invoices to avoid manual data entry"
                      currentFrame={currentFrame}
                      showcases={[
                        <Image
                          key="case-study-invoice-0"
                          width={336}
                          height={355}
                          src="/images/case-study-invoice-0.png"
                          alt="An invoice"
                          className="ml-auto"
                        />,
                        <Image
                          key="case-study-invoice-1"
                          width={336}
                          height={355}
                          src="/images/case-study-invoice-1.png"
                          alt="An invoice processed by OCR and display the detected words"
                          className="ml-auto"
                        />,
                        <ShowCaseTable
                          key="case-study-invoice-table"
                          head={["text", "number"]}
                          rows={[
                            [
                              "Filing Jointly or Qualifying Widow(er)",
                              "30,000",
                            ],
                            ["Lower Paying Job Annual Taxable Wage", "3,999"],
                            ["12/02/2021", "40,000"],
                            ["10:38", "49,999"],
                            ["12/02/2021", "890"],
                            ["12:38", "2,090"],
                            ["-", "2,950"],
                            ["-", "2,950"],
                            ["-", "2,950"],
                          ]}
                          position="ml-auto"
                        />,
                      ]}
                      icon={<OpticalCharacterRecognitionIcon {...iconStyle} />}
                    />
                  ),
                },
                {
                  header: "Workspace Safety",
                  headerActiveBgColor: "bg-instillNeonBlue",
                  headerInActiveBgColor: "bg-[#2596AE]",
                  headerActiveTextColor: "text-white",
                  headerInActiveTextColor: "text-instillGrrey80",
                  content: (
                    <AccordionContentLayout
                      title="Object detection & Pose Estimation"
                      source="Camera (IoT)"
                      destination="PostgreSQL"
                      description="Spot unsafe behaviours in real-time to lower 
                        employee health incidents and improve workspace safety."
                      currentFrame={currentFrame}
                      showcases={[
                        <Image
                          key="case-study-workspace-0"
                          width={336}
                          height={355}
                          src="/images/case-study-workspace-0.png"
                          alt="Workers with safety helmets"
                          className="ml-auto"
                        />,
                        <Image
                          key="case-study-workspace-1"
                          width={336}
                          height={355}
                          src="/images/case-study-workspace-1.png"
                          alt="Workers with safety helmets processed by object 
                            dection and label the position of the workers."
                          className="ml-auto"
                        />,
                        <ShowCaseTable
                          key="case-study-workspace-table-0"
                          head={["Category", "x", "y"]}
                          rows={[
                            ["Unattended object", "3", "52"],
                            ["Person 1", "12", "104"],
                            ["Person 2", "394", "502"],
                            ["Helmet 1", "123", "1042"],
                            ["Helmet 2", "320", "242"],
                          ]}
                          position="ml-auto"
                        />,
                        <Image
                          key="case-study-workspace-2"
                          width={336}
                          height={355}
                          src="/images/case-study-workspace-2.png"
                          alt="Workers with safety helmets processed by pose 
                            estimation and draw the skeleton of the workers"
                          className="ml-auto"
                        />,
                        <ShowCaseTable
                          key="case-study-workspace-table-1"
                          head={["Skeleton", "Head_x", "Head_y"]}
                          rows={[
                            ["Person 1", "3", "52"],
                            ["Person 2", "12", "222"],
                            ["Person 3", "921", "307"],
                          ]}
                          position="ml-auto"
                        />,
                      ]}
                      icon={<ObjectDetectionIcon {...iconStyle} />}
                    />
                  ),
                },
                {
                  header: "E-Commerce Labelling",
                  headerActiveBgColor: "bg-instillNeonBlue",
                  headerInActiveBgColor: "bg-[#26869B]",
                  headerActiveTextColor: "text-white",
                  headerInActiveTextColor: "text-instillGrrey80",
                  content: (
                    <AccordionContentLayout
                      title="Image tagging"
                      source="S3"
                      destination="Redshift"
                      description="Automatically detect and tag visual 
                        attributes (such as category, colour, style, and more)  
                        in the products."
                      currentFrame={currentFrame}
                      showcases={[
                        <Image
                          key="case-study-ecommerce-0"
                          width={336}
                          height={355}
                          src="/images/case-study-ecommerce-0.png"
                          alt="A ecommerce cloth model"
                          className="ml-auto"
                        />,
                        <Image
                          key="case-study-ecommerce-1"
                          width={336}
                          height={355}
                          src="/images/case-study-ecommerce-1.png"
                          alt="A ecommerce cloth model processed by tagging."
                          className="ml-auto"
                        />,
                        <ShowCaseTable
                          key="case-study-ecommerce-table"
                          head={["Item", "Value"]}
                          rows={[
                            ["Name", "Summer dress"],
                            ["Category", "Dress"],
                            ["Style", "Retro"],
                            ["Sleeve", "No sleeve"],
                            ["Length", "Long"],
                            ["Waistline", "High waist"],
                            ["Colour 1", "67A4DB"],
                            ["Colour 2", "68A9E3"],
                            ["Colour 3", "A6C4E1"],
                          ]}
                          position="ml-auto"
                        />,
                      ]}
                      icon={<ImageClassificationIcon {...iconStyle} />}
                    />
                  ),
                },
                {
                  header: "Customise Your Pipeline",
                  headerActiveBgColor: "bg-instillNeonBlue",
                  headerInActiveBgColor: "bg-[#267788]",
                  headerActiveTextColor: "text-white",
                  headerInActiveTextColor: "text-instillGrrey80",
                  content: (
                    <AccordionContentLayout
                      title="Task for your use case"
                      source="Source"
                      destination="Destination"
                      description="Stop building data pipelines from scratch. 
                        Just use VDP to connect your data and import STOA Vision 
                        AI models to solve your use cases."
                      currentFrame={currentFrame}
                      showcases={[
                        <div
                          key="case-study-custom"
                          className="ml-auto flex h-[355px] w-[336px] bg-[#268398]"
                        >
                          <DataSourceIcon
                            width="w-[226px]"
                            height="h-[226px]"
                            color="fill-white"
                            position="m-auto"
                          />
                        </div>,
                      ]}
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

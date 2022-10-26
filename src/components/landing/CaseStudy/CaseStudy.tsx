import { BlueprintContainer } from "@/components/ui";
import { useInterval } from "@/hooks/useInterval";
import {
  ArtiVcIcon,
  AwsRdsIcon,
  AwsS3Icon,
  BasicAccordion,
  BigQueryIcon,
  DataDestinationIcon,
  DataSourceIcon,
  GitHubIcon,
  GoogleDriveIcon,
  GrpcIcon,
  HttpIcon,
  HuggingFaceIcon,
  ImageClassificationIcon,
  ModelIcon,
  ObjectDetectionIcon,
  OpticalCharacterRecognitionIcon,
  PipelineIcon,
} from "@instill-ai/design-system";
import cn from "clsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AccordionContentLayout from "./AccordionContentLayout";
import ControlPanel from "./ControlPanel";
import ControlPanelItem from "./ControlPanelItem";
import ControlSelectWrapper from "./ControlSelectWrapper";
import ShowcaseImage from "./ShowcaseImage";
import ShowcaseTable from "./ShowcaseTable/ShowcaseTable";

export type CaseStudyProps = {
  marginBottom?: string;
};

const CaseStudy = ({ marginBottom }: CaseStudyProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentShowcaseFrame, setCurrentShowcaseFrame] = useState<number>(0);
  const [showcaseMaxFrame, setShowcaseMaxFrame] = useState<number>(0);

  const getActiveControl = useCallback(() => {
    if (activeIndex === 1) {
      switch (currentShowcaseFrame) {
        case 0:
          return "source";
        case 1:
        case 2:
          return "model";
        case 3:
          return "destination";
        default:
          throw new Error("Current frame index out of bound");
      }
    } else if (activeIndex === 3) {
    } else {
      switch (currentShowcaseFrame) {
        case 0:
          return "source";
        case 1:
          return "model";
        case 2:
          return "destination";
        default:
          throw new Error("Current frame index out of bound");
      }
    }
  }, [activeIndex, currentShowcaseFrame]);

  const controlPanel = useMemo(() => {
    const controlPanelIconStyle = {
      width: "w-[30px]",
      height: "h-[30px]",
      color: "fill-white",
      position: "my-auto",
    };

    switch (activeIndex) {
      case 0:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            source={
              <ControlPanelItem
                title="Source"
                description="Select an exisiting online source"
                icon={<DataSourceIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 0}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-source-control"
                    id="case-study-source-control"
                    customizable={false}
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    label="Source"
                    isActive={currentShowcaseFrame === 0}
                    options={[
                      {
                        label: "Batch-Invoice-Photos",
                        value: "Batch-Invoice-Photos",
                        startIcon: (
                          <GoogleDriveIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
            model={
              <ControlPanelItem
                title="Model"
                description="Select an exisiting online model"
                icon={<GitHubIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 1}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-model-control"
                    id="case-study-model-control"
                    label="Model"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={false}
                    isActive={currentShowcaseFrame === 1}
                    options={[
                      {
                        label: "Instill-AI/OCR",
                        value: "Instill-AI/OCR",
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
                  />,
                ]}
              />
            }
            destination={
              <ControlPanelItem
                title="Destination"
                description="Select an exisiting online destination"
                icon={<DataDestinationIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 2}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-destination-control"
                    id="case-study-destination-control"
                    label="Destination"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={false}
                    isActive={currentShowcaseFrame === 2}
                    options={[
                      {
                        label: "Invoice-Record-Sheet",
                        value: "Invoice-Record-Sheet",
                        startIcon: (
                          <BigQueryIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
          />
        );
      case 1:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            source={
              <ControlPanelItem
                title="Source"
                description="Select an exisiting online source"
                icon={<DataSourceIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 0}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-source-control"
                    id="case-study-source-control"
                    label="Source"
                    customizable={false}
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    isActive={currentShowcaseFrame === 0}
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
                  />,
                ]}
              />
            }
            model={
              <ControlPanelItem
                title="Model"
                description="Select an exisiting online model"
                icon={<ArtiVcIcon {...controlPanelIconStyle} />}
                isActive={
                  currentShowcaseFrame === 1 || currentShowcaseFrame === 2
                }
                controls={[
                  <ControlSelectWrapper
                    key="case-study-model-control-0"
                    id="case-study-model-control-0"
                    label="Model"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={false}
                    isActive={currentShowcaseFrame === 1}
                    options={[
                      {
                        label: "yolov7",
                        value: "yolov7",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                  <ControlSelectWrapper
                    key="case-study-model-control-1"
                    id="case-study-model-control-1"
                    label="Model"
                    customizable={false}
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    isActive={currentShowcaseFrame === 2}
                    options={[
                      {
                        label: "yolov7-pose",
                        value: "yolov7-pose",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
            destination={
              <ControlPanelItem
                title="Destination"
                description="Select an exisiting online destination"
                icon={<DataDestinationIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 3}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-destination-control"
                    id="case-study-destination-control"
                    label="Destination"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={false}
                    isActive={currentShowcaseFrame === 3}
                    options={[
                      {
                        label: "workspace-safety-record",
                        value: "workspace-safety-record",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
          />
        );
      case 2:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            source={
              <ControlPanelItem
                title="Source"
                description="Select an exisiting online source"
                icon={<DataSourceIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 0}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-source-control"
                    id="case-study-source-control"
                    label="Source"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={false}
                    isActive={currentShowcaseFrame === 0}
                    options={[
                      {
                        label: "Batch-Womenswear-Photos",
                        value: "Batch-Womenswear-Photos",
                        startIcon: (
                          <AwsS3Icon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
            model={
              <ControlPanelItem
                title="Model"
                description="Select an exisiting online model"
                icon={<HuggingFaceIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 1}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-model-control-0"
                    id="case-study-model-control-0"
                    label="Model"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={false}
                    isActive={currentShowcaseFrame === 1}
                    options={[
                      {
                        label: "Instill-AI/Image-Tagging",
                        value: "Instill-AI/Image-Tagging",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
            destination={
              <ControlPanelItem
                title="Destination"
                description="Select an exisiting online destination"
                icon={<DataDestinationIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 2}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-destination-control"
                    id="case-study-destination-control"
                    label="Destination"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={false}
                    isActive={currentShowcaseFrame === 2}
                    options={[
                      {
                        label: "Labbelled-Photos",
                        value: "Labbelled-Photos",
                        startIcon: (
                          <AwsRdsIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
          />
        );
      default:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            source={
              <ControlPanelItem
                title="Source"
                description="Select an exisiting online source"
                icon={<DataSourceIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 0}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-source-control"
                    id="case-study-source-control"
                    label="Source"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={true}
                    isActive={currentShowcaseFrame === 0}
                    onFocus={() => {
                      setCurrentShowcaseFrame(0);
                    }}
                    options={[
                      {
                        label: "source-http",
                        value: "source-http",
                        startIcon: (
                          <HttpIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                      {
                        label: "source-grpc",
                        value: "source-grpc",
                        startIcon: (
                          <GrpcIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
            model={
              <ControlPanelItem
                title="Model"
                description="Select an exisiting online model"
                icon={<ArtiVcIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 1}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-model-control-0"
                    id="case-study-model-control-0"
                    label="Model"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={true}
                    isActive={currentShowcaseFrame === 1}
                    onFocus={() => {
                      setCurrentShowcaseFrame(1);
                    }}
                    options={[
                      {
                        label: "yolov7",
                        value: "yolov7",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
            destination={
              <ControlPanelItem
                title="Destination"
                description="Select an exisiting online destination"
                icon={<DataDestinationIcon {...controlPanelIconStyle} />}
                isActive={currentShowcaseFrame === 2}
                controls={[
                  <ControlSelectWrapper
                    key="case-study-destination-control"
                    id="case-study-destination-control"
                    label="Destination"
                    minWidth="min-w-[240px] xx:min-w-[300px]"
                    customizable={true}
                    isActive={currentShowcaseFrame === 2}
                    onFocus={() => {
                      setCurrentShowcaseFrame(2);
                    }}
                    options={[
                      {
                        label: "workspace-safety-record",
                        value: "workspace-safety-record",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ]}
                  />,
                ]}
              />
            }
          />
        );
    }
  }, [activeIndex, currentShowcaseFrame]);

  const caseAccordion = useMemo(() => {
    const iconStyle = {
      width: "w-20",
      height: "h-20",
      color: "fill-white",
      position: "m-auto",
    };
    return (
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
                currentFrame={currentShowcaseFrame}
                showcases={[
                  <ShowcaseImage
                    key="case-study-invoice-0"
                    width={336}
                    height={355}
                    src="/images/case-study-invoice-0.png"
                    alt="An invoice"
                  />,
                  <ShowcaseImage
                    key="case-study-invoice-1"
                    width={336}
                    height={355}
                    src="/images/case-study-invoice-1.png"
                    alt="An invoice processed by OCR and display the detected words"
                  />,
                  <ShowcaseTable
                    height="h-[355px]"
                    width="w-[336px]"
                    key="case-study-invoice-table"
                    position="ml-auto"
                    tables={[
                      {
                        name: "invoice-table",
                        head: ["text", "number"],
                        rows: [
                          ["Filing Jointly or Qualifying Widow(er)", "30,000"],
                          ["Lower Paying Job Annual Taxable Wage", "3,999"],
                          ["12/02/2021", "40,000"],
                          ["10:38", "49,999"],
                          ["12/02/2021", "890"],
                          ["12:38", "2,090"],
                          ["-", "2,950"],
                          ["-", "2,950"],
                          ["-", "2,950"],
                        ],
                      },
                    ]}
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
                currentFrame={currentShowcaseFrame}
                showcases={[
                  <ShowcaseImage
                    key="case-study-workspace-0"
                    width={336}
                    height={355}
                    src="/images/case-study-workspace-0.png"
                    alt="Workers with safety helmets"
                  />,
                  <ShowcaseImage
                    key="case-study-workspace-1"
                    width={336}
                    height={355}
                    src="/images/case-study-workspace-1.png"
                    alt="Workers with safety helmets processed by object 
                    dection and label the position of the workers."
                  />,
                  <ShowcaseImage
                    key="case-study-workspace-2"
                    width={336}
                    height={355}
                    src="/images/case-study-workspace-2.png"
                    alt="Workers with safety helmets processed by pose 
                    estimation and draw the skeleton of the workers"
                  />,
                  <ShowcaseTable
                    key="case-study-workspace-table-0"
                    height="h-[355px]"
                    width="w-[336px]"
                    position="ml-auto"
                    tables={[
                      {
                        name: "workspace-category-table",
                        head: ["Category", "x", "y"],
                        rows: [
                          ["Unattended object", "3", "52"],
                          ["Person 1", "12", "104"],
                          ["Person 2", "394", "502"],
                          ["Helmet 1", "123", "1042"],
                          ["Helmet 2", "320", "242"],
                        ],
                      },
                      {
                        name: "workspace-skeleton-table",
                        head: ["Skeleton", "Head_x", "Head_y"],
                        rows: [
                          ["Person 1", "3", "52"],
                          ["Person 2", "12", "222"],
                          ["Person 3", "921", "307"],
                        ],
                      },
                    ]}
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
                currentFrame={currentShowcaseFrame}
                showcases={[
                  <ShowcaseImage
                    key="case-study-ecommerce-0"
                    width={336}
                    height={355}
                    src="/images/case-study-ecommerce-0.png"
                    alt="A ecommerce cloth model"
                  />,
                  <ShowcaseImage
                    key="case-study-ecommerce-1"
                    width={336}
                    height={355}
                    src="/images/case-study-ecommerce-1.png"
                    alt="A ecommerce cloth model processed by tagging."
                  />,
                  <ShowcaseTable
                    key="case-study-ecommerce-table"
                    height="h-[355px]"
                    width="w-[336px]"
                    position="ml-auto"
                    tables={[
                      {
                        name: "ecommerce-table",
                        head: ["Item", "Value"],
                        rows: [
                          ["Name", "Summer dress"],
                          ["Category", "Dress"],
                          ["Style", "Retro"],
                          ["Sleeve", "No sleeve"],
                          ["Length", "Long"],
                          ["Waistline", "High waist"],
                          ["Colour 1", "67A4DB"],
                          ["Colour 2", "68A9E3"],
                          ["Colour 3", "A6C4E1"],
                        ],
                      },
                    ]}
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
                currentFrame={currentShowcaseFrame}
                showcases={[
                  <div
                    key="case-study-custom"
                    className="ml-auto flex h-[355px] min-w-[336px] bg-[#268398]"
                  >
                    <DataSourceIcon
                      width="w-[226px]"
                      height="h-[226px]"
                      color="fill-white"
                      position="m-auto"
                    />
                  </div>,
                  <div
                    key="case-study-custom"
                    className="ml-auto flex h-[355px] min-w-[336px] bg-[#268398]"
                  >
                    <ModelIcon
                      width="w-[226px]"
                      height="h-[226px]"
                      color="fill-white"
                      position="m-auto"
                    />
                  </div>,
                  <div
                    key="case-study-custom"
                    className="ml-auto flex h-[355px] min-w-[336px] bg-[#268398]"
                  >
                    <DataDestinationIcon
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
    );
  }, [activeIndex, setActiveIndex, currentShowcaseFrame]);

  useEffect(() => {
    setCurrentShowcaseFrame(0);
    switch (activeIndex) {
      case 1:
        setShowcaseMaxFrame(3);
        break;
      default:
        setShowcaseMaxFrame(2);
        break;
    }
  }, [activeIndex]);

  useInterval(() => {
    if (activeIndex === 3) return;
    setCurrentShowcaseFrame((prev) => {
      if (prev + 1 <= showcaseMaxFrame) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }, 1500);

  return (
    <>
      <BlueprintContainer
        padding="py-[60px]"
        unitHeight={30}
        unitWidth={30}
        bgColor="bg-instillGrey90"
        display="hidden md:flex"
      >
        <div className="m-auto flex w-full max-w-[1127px] flex-row gap-x-[30px] xl:gap-x-[60px]">
          <div className="flex w-full md:w-1/2 xl:w-2/3">{caseAccordion}</div>
          <div className="flex w-full md:w-1/2 xl:w-1/3">{controlPanel}</div>
        </div>
      </BlueprintContainer>
      <div className="relative flex flex-col gap-y-10 md:hidden">
        {caseAccordion}
        <BlueprintContainer
          padding="pt-[32px]"
          unitHeight={30}
          unitWidth={30}
          bgColor="bg-instillGrey90"
          position="sticky bottom-0"
          zIndex="z-20"
          childrenPosition="w-full"
        >
          <div className="flex w-full flex-col">
            <div className="mx-auto w-full px-[30px]">{controlPanel}</div>
            <div className="flex w-full bg-instillGrey90 bg-opacity-60 py-5">
              {activeIndex === 3 ? (
                <></>
              ) : (
                <div className="mx-auto flex flex-row gap-x-[30px]">
                  <div
                    className={cn(
                      "h-4 w-4",
                      getActiveControl() === "source"
                        ? "bg-instillLightGreen"
                        : "bg-white"
                    )}
                  />
                  <div
                    className={cn(
                      "h-4 w-4",
                      getActiveControl() === "model"
                        ? "bg-instillLightGreen"
                        : "bg-white"
                    )}
                  />
                  <div
                    className={cn(
                      "h-4 w-4",
                      getActiveControl() === "destination"
                        ? "bg-instillLightGreen"
                        : "bg-white"
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </BlueprintContainer>
      </div>
    </>
  );
};

export default CaseStudy;
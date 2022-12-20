import {
  BlueprintContainer,
  ImgWithFallback,
  SectionHeader,
  SectionLabel,
} from "@/components/ui";
import { useInterval } from "@/hooks/useInterval";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Nullable } from "@/types/instill";
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
  GoogleSheetIcon,
  GrpcIcon,
  HttpIcon,
  HuggingFaceIcon,
  ImageClassificationIcon,
  IotIcon,
  LocalUploadIcon,
  ModelIcon,
  ObjectDetectionIcon,
  OpticalCharacterRecognitionIcon,
  PipelineIcon,
  SingleSelectOption,
} from "@instill-ai/design-system";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AccordionContentLayout } from "./AccordionContentLayout";
import { ControlPanel } from "./ControlPanel";
import { ShowcaseImage } from "./ShowcaseImage";
import { ShowcaseTable } from "./ShowcaseTable";

export type CaseStudyProps = {
  destinations: { name: string; icon: string }[];
};

type CustomizableModel = "github" | "artivc" | "local" | "huggingFace";

export const CaseStudy = ({ destinations }: CaseStudyProps) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([0]);
  const [currentShowcaseFrame, setCurrentShowcaseFrame] = useState<number>(0);
  const [focusedShowcaseFrame, setFocusedShowcaseFrame] =
    useState<Nullable<number>>(null);
  const [showcaseMaxFrame, setShowcaseMaxFrame] = useState<number>(0);

  const windowSize = useWindowSize();

  const getActiveControl = useCallback(() => {
    if (activeIndex[0] === 1) {
      switch (currentShowcaseFrame) {
        case 0:
          return "source";
        case 1:
        case 2:
          return "model";
        case 3:
          return "destination";
        default:
          return "source";
      }
    } else {
      switch (currentShowcaseFrame) {
        case 0:
          return "source";
        case 1:
          return "model";
        case 2:
          return "destination";
        default:
          return "source";
      }
    }
  }, [activeIndex, currentShowcaseFrame]);

  const [
    currentSelectedCustomizableModel,
    setCurrentSelectedCustomizableModel,
  ] = useState<Nullable<CustomizableModel>>(null);

  const selectedCustomizableModelIcon = useMemo(() => {
    const controlPanelIconStyle = {
      width: "w-[30px]",
      height: "h-[30px]",
      color: "fill-white",
      position: "my-auto",
    };

    switch (currentSelectedCustomizableModel) {
      case "artivc":
        return <ArtiVcIcon {...controlPanelIconStyle} />;
      case "github":
        return <GitHubIcon {...controlPanelIconStyle} />;
      case "huggingFace":
        return <HuggingFaceIcon {...controlPanelIconStyle} />;
      case "local":
        return <LocalUploadIcon {...controlPanelIconStyle} />;
      default:
        return <LocalUploadIcon {...controlPanelIconStyle} />;
    }
  }, [currentSelectedCustomizableModel]);

  const controlPanel = useMemo(() => {
    const controlPanelIconStyle = {
      width: "w-[30px]",
      height: "h-[30px]",
      color: "fill-white",
      position: "my-auto",
    };
    switch (activeIndex[0]) {
      case 0:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            activeIndex={activeIndex}
            setCurrentShowcaseFrame={setCurrentShowcaseFrame}
            items={{
              source: {
                title: "Source",
                description: "Select an exisiting online source",
                icon: <DataSourceIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 0
                    : currentShowcaseFrame === 0,
                controls: [
                  {
                    id: "case-study-0-source-control",
                    customizable: false,
                    label: "Source",
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 0
                        : currentShowcaseFrame === 0,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(0),
                    options: [
                      {
                        label: "batch-invoice-photos",
                        value: "batch-invoice-photos",
                        startIcon: (
                          <GoogleDriveIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              model: {
                title: "Model",
                description: "Select an exisiting online model",
                icon: <GitHubIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 1
                    : currentShowcaseFrame === 1,
                controls: [
                  {
                    id: "case-study-0-model-control",
                    customizable: false,
                    label: "Model",
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 1
                        : currentShowcaseFrame === 1,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(1),
                    options: [
                      {
                        label: "instill-ai/ocr",
                        value: "instill-ai/ocr",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                            color="fill-black"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              destination: {
                title: "Destination",
                description: "Select an exisiting online destination",
                icon: <DataDestinationIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 2
                    : currentShowcaseFrame === 2,
                controls: [
                  {
                    id: "case-study-0-destination-control",
                    customizable: false,
                    label: "Destination",
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 2
                        : currentShowcaseFrame === 2,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(2),
                    options: [
                      {
                        label: "invoice-record-sheet",
                        value: "invoice-record-sheet",
                        startIcon: (
                          <GoogleSheetIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
            }}
          />
        );
      case 1:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            activeIndex={activeIndex}
            setCurrentShowcaseFrame={setCurrentShowcaseFrame}
            items={{
              source: {
                title: "Source",
                description: "Select an exisiting online source",
                icon: <DataSourceIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 0
                    : currentShowcaseFrame === 0,
                controls: [
                  {
                    id: "case-study-1-source-control",
                    label: "Source",
                    customizable: false,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(0),
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 0
                        : currentShowcaseFrame === 0,
                    options: [
                      {
                        label: "camera-on-site-1",
                        value: "camera-on-site-1",
                        startIcon: (
                          <IotIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              model: {
                title: "Model",
                description: "Select an exisiting online model",
                icon: <ArtiVcIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 1 || focusedShowcaseFrame === 2
                    : currentShowcaseFrame === 1 || currentShowcaseFrame === 2,
                controls: [
                  {
                    id: "case-study-1-model-control-0",
                    label: "Model",
                    customizable: false,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(1),
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 1
                        : currentShowcaseFrame === 1,
                    options: [
                      {
                        label: "instill-ai/yolov7",
                        value: "instill-ai/yolov7",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                  {
                    id: "case-study-1-model-control-1",
                    label: "Model",
                    customizable: false,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(2),
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 2
                        : currentShowcaseFrame === 2,
                    options: [
                      {
                        label: "instill-ai/yolov7-pose",
                        value: "instill-ai/yolov7-pose",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              destination: {
                title: "Destination",
                description: "Select an exisiting online destination",
                icon: <DataDestinationIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 3
                    : currentShowcaseFrame === 3,
                controls: [
                  {
                    id: "case-study-1-destination-control",
                    label: "Destination",
                    customizable: false,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(3),
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 3
                        : currentShowcaseFrame === 3,
                    options: [
                      {
                        label: "workspace-safety-record",
                        value: "workspace-safety-record",
                        startIcon: (
                          <BigQueryIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
            }}
          />
        );
      case 2:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            activeIndex={activeIndex}
            setCurrentShowcaseFrame={setCurrentShowcaseFrame}
            items={{
              source: {
                title: "Source",
                description: "Select an exisiting online source",
                icon: <DataSourceIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 0
                    : currentShowcaseFrame === 0,
                controls: [
                  {
                    id: "case-study-2-source-control",
                    customizable: false,
                    label: "Source",
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 0
                        : currentShowcaseFrame === 0,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(0),
                    options: [
                      {
                        label: "batch-womenswear-photos",
                        value: "batch-womenswear-photos",
                        startIcon: (
                          <AwsS3Icon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              model: {
                title: "Model",
                description: "Select an exisiting online model",
                icon: <GitHubIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 1
                    : currentShowcaseFrame === 1,
                controls: [
                  {
                    id: "case-study-2-model-control",
                    label: "Model",
                    customizable: false,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(1),
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 1
                        : currentShowcaseFrame === 1,
                    options: [
                      {
                        label: "instill-ai/image-tagging",
                        value: "instill-ai/image-tagging",
                        startIcon: (
                          <ModelIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              destination: {
                title: "Destination",
                description: "Select an exisiting online destination",
                icon: <DataDestinationIcon {...controlPanelIconStyle} />,
                isActive:
                  focusedShowcaseFrame !== null
                    ? focusedShowcaseFrame === 2
                    : currentShowcaseFrame === 2,
                controls: [
                  {
                    id: "case-study-2-destination-control",
                    customizable: false,
                    label: "Destination",
                    isActive:
                      focusedShowcaseFrame !== null
                        ? focusedShowcaseFrame === 2
                        : currentShowcaseFrame === 2,
                    wrapperOnMouseOver: () => setFocusedShowcaseFrame(2),
                    options: [
                      {
                        label: "labelled-photos",
                        value: "labelled-photos",
                        startIcon: (
                          <AwsRdsIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
            }}
          />
        );
      case 3:
        return (
          <ControlPanel
            getActiveControl={getActiveControl}
            activeIndex={activeIndex}
            setCurrentShowcaseFrame={setCurrentShowcaseFrame}
            items={{
              source: {
                title: "Source",
                description: "Set up source",
                icon: <DataSourceIcon {...controlPanelIconStyle} />,
                isActive: currentShowcaseFrame === 0,
                controls: [
                  {
                    id: "customizable-case-study-source-control",
                    customizable: true,
                    label: "Source",
                    isActive: currentShowcaseFrame === 0,
                    selectOnFocus: () => setCurrentShowcaseFrame(0),
                    options: [
                      {
                        label: "HTTP",
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
                        label: "gRPC",
                        value: "source-grpc",
                        startIcon: (
                          <GrpcIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              model: {
                title: "Model",
                description: "Set up model from source",
                icon: selectedCustomizableModelIcon,
                isActive: currentShowcaseFrame === 1,
                controls: [
                  {
                    id: "customizable-case-study-model-control",
                    label: "Model",
                    customizable: true,
                    selectOnFocus: () => setCurrentShowcaseFrame(1),
                    isActive: currentShowcaseFrame === 1,
                    onChange: (option: SingleSelectOption) => {
                      switch (option.value) {
                        case "artivc":
                          setCurrentSelectedCustomizableModel(option.value);
                          break;
                        case "github":
                          setCurrentSelectedCustomizableModel(option.value);
                          break;
                        case "local":
                          setCurrentSelectedCustomizableModel(option.value);
                          break;
                        case "huggingFace":
                          setCurrentSelectedCustomizableModel(option.value);
                          break;
                        default:
                          throw new Error(
                            `Option value doesn't match selected customizable model state, selected ${option.value}`
                          );
                      }
                    },
                    options: [
                      {
                        label: "ArtiVC",
                        value: "artivc",
                        startIcon: (
                          <ArtiVcIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                      {
                        label: "GitHub",
                        value: "github",
                        startIcon: (
                          <GitHubIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                            color="fill-black"
                          />
                        ),
                      },
                      {
                        label: "Local",
                        value: "local",
                        startIcon: (
                          <LocalUploadIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                            color="fill-black"
                          />
                        ),
                      },
                      {
                        label: "Hugging Face",
                        value: "huggingFace",
                        startIcon: (
                          <HuggingFaceIcon
                            width="w-[30px]"
                            height="h-[30px]"
                            position="my-auto"
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
              destination: {
                title: "Destination",
                description: "Set up destination",
                icon: <DataDestinationIcon {...controlPanelIconStyle} />,
                isActive: currentShowcaseFrame === 2,
                controls: [
                  {
                    id: "customizable-case-study-destination-control",
                    customizable: true,
                    label: "Destination",
                    isActive: currentShowcaseFrame === 2,
                    selectOnFocus: () => setCurrentShowcaseFrame(2),
                    options: destinations.map((destination) => ({
                      label: destination.name,
                      value: destination.name,
                      startIcon: destination.icon ? (
                        <ImgWithFallback
                          src={`/icons/airbyte/${destination.icon}`}
                          fallbackImg={
                            <DataDestinationIcon width="w-6" height="h-6" />
                          }
                          width={16}
                          height={16}
                          alt={`${destination.name}-image`}
                        />
                      ) : (
                        <DataDestinationIcon width="w-6" height="h-6" />
                      ),
                    })),
                  },
                ],
              },
            }}
          />
        );
      default:
        throw new Error(`ActiveIndex out of bound: ${activeIndex}`);
    }
  }, [
    activeIndex,
    currentShowcaseFrame,
    focusedShowcaseFrame,
    destinations,
    getActiveControl,
    selectedCustomizableModelIcon,
  ]);

  const caseAccordion = useMemo(() => {
    const iconStyle = {
      width: "w-20",
      height: "h-20",
      color: "fill-white",
      position: "m-auto",
    };

    // These gradient color are not stored in the design-system, they are
    // instillSkyBlue with background-opacity, but we can't use opacity
    // element in this section, we have to use this kind of color variant.

    const inactiveHeaderGradient = [
      "bg-[#2596AE]",
      "bg-[#26869B]",
      "bg-[#267788]",
    ];

    return (
      <BasicAccordion
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        enableHeaderIcon={false}
        allowMultiItems={false}
        items={[
          {
            header: "Invoice Processing",
            headerActiveBgColor: "bg-instillNeonBlue",
            headerInActiveBgColor: inactiveHeaderGradient[0],
            headerActiveTextColor: "text-white",
            headerInActiveTextColor: "text-instillGrey20",
            content: (
              <AccordionContentLayout
                title="Optical Character Recognition"
                source="Google Drive"
                destination="Google Sheet"
                description="Automatically capture and extract data from 
                  invoices to avoid manual data entry"
                currentFrame={currentShowcaseFrame}
                focusedShowcaseFrame={focusedShowcaseFrame}
                getCurrentItem={() => {
                  let targetFrame = currentShowcaseFrame;
                  if (focusedShowcaseFrame) {
                    targetFrame = focusedShowcaseFrame;
                  }

                  switch (targetFrame) {
                    case 0:
                      return "source";
                    case 1:
                      return "model";
                    case 2:
                      return "destination";
                    default:
                      return null;
                  }
                }}
                showcases={[
                  <ShowcaseImage
                    key="case-study-invoice-0"
                    src="/images/case-study-invoice-0.png"
                    alt="An invoice"
                  />,
                  <ShowcaseImage
                    key="case-study-invoice-1"
                    src="/images/case-study-invoice-1.png"
                    alt="An invoice processed by OCR and display the detected words"
                  />,
                  <ShowcaseTable
                    key="case-study-invoice-table"
                    position="ml-auto"
                    tables={[
                      {
                        name: "invoice-table",
                        head: ["text", "number"],
                        rows: windowSize
                          ? windowSize.width > 640
                            ? [
                                [
                                  "Filing Jointly or Qualifying Widow(er)",
                                  "30,000",
                                ],
                                [
                                  "Lower Paying Job Annual Taxable Wage",
                                  "3,999",
                                ],
                                ["12/02/2021", "40,000"],
                                ["10:38", "49,999"],
                                ["12/02/2021", "890"],
                                ["12:38", "2,090"],
                                ["-", "2,950"],
                                ["-", "2,950"],
                              ]
                            : [
                                [
                                  "Filing Jointly or Qualifying Widow(er)",
                                  "30,000",
                                ],
                                [
                                  "Lower Paying Job Annual Taxable Wage",
                                  "3,999",
                                ],
                                ["12/02/2021", "40,000"],
                                ["10:38", "49,999"],
                                ["12/02/2021", "890"],
                              ]
                          : [],
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
            headerInActiveBgColor:
              activeIndex[0] === 0
                ? inactiveHeaderGradient[0]
                : inactiveHeaderGradient[1],
            headerActiveTextColor: "text-white",
            headerInActiveTextColor: "text-instillGrey20",
            content: (
              <AccordionContentLayout
                title="Object detection & Pose Estimation"
                source="Camera (IoT)"
                destination="BigQuery"
                description="Spot unsafe behaviours in real-time to lower 
                  employee health incidents and improve workspace safety."
                currentFrame={currentShowcaseFrame}
                focusedShowcaseFrame={focusedShowcaseFrame}
                getCurrentItem={() => {
                  let targetFrame = currentShowcaseFrame;
                  if (focusedShowcaseFrame) {
                    targetFrame = focusedShowcaseFrame;
                  }

                  switch (targetFrame) {
                    case 0:
                      return "source";
                    case 1:
                      return "model";
                    case 2:
                      return "model";
                    case 3:
                      return "destination";
                    default:
                      return null;
                  }
                }}
                showcases={[
                  <ShowcaseImage
                    key="case-study-workspace-0"
                    src="/images/case-study-workspace-0.png"
                    alt="Workers with safety helmets"
                  />,
                  <ShowcaseImage
                    key="case-study-workspace-1"
                    src="/images/case-study-workspace-1.png"
                    alt="Workers with safety helmets processed by object 
                    dection and label the position of the workers."
                  />,
                  <ShowcaseImage
                    key="case-study-workspace-2"
                    src="/images/case-study-workspace-2.png"
                    alt="Workers with safety helmets processed by pose 
                    estimation and draw the skeleton of the workers"
                  />,
                  <ShowcaseTable
                    key="case-study-workspace-table-0"
                    position="ml-auto"
                    tables={[
                      {
                        name: "workspace-category-table",
                        head: ["Category", "x", "y"],
                        rows: windowSize
                          ? windowSize.width > 640
                            ? [
                                ["Unattended object", "3", "52"],
                                ["Person 1", "12", "104"],
                                ["Person 2", "394", "502"],
                                ["Helmet 1", "123", "1042"],
                                ["Helmet 2", "320", "242"],
                              ]
                            : [
                                ["Unattended object", "3", "52"],
                                ["Person 1", "12", "104"],
                                ["Person 2", "394", "502"],
                              ]
                          : [],
                      },
                      {
                        name: "workspace-skeleton-table",
                        head: ["Skeleton", "Head_x", "Head_y"],
                        rows: windowSize
                          ? windowSize.width > 640
                            ? [
                                ["Person 1", "3", "52"],
                                ["Person 2", "12", "222"],
                                ["Person 3", "921", "307"],
                              ]
                            : [
                                ["Person 1", "3", "52"],
                                ["Person 2", "12", "222"],
                              ]
                          : [],
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
            headerInActiveBgColor:
              activeIndex[0] === 3
                ? inactiveHeaderGradient[2]
                : inactiveHeaderGradient[1],
            headerActiveTextColor: "text-white",
            headerInActiveTextColor: "text-instillGrey20",
            content: (
              <AccordionContentLayout
                title="Image tagging"
                source="S3"
                destination="Redshift"
                description="Automatically detect and tag visual 
                  attributes (such as category, colour, style, and more)  
                  in the products."
                currentFrame={currentShowcaseFrame}
                focusedShowcaseFrame={focusedShowcaseFrame}
                getCurrentItem={() => {
                  let targetFrame = currentShowcaseFrame;
                  if (focusedShowcaseFrame) {
                    targetFrame = focusedShowcaseFrame;
                  }

                  switch (targetFrame) {
                    case 0:
                      return "source";
                    case 1:
                      return "model";
                    case 2:
                      return "destination";
                    default:
                      return null;
                  }
                }}
                showcases={[
                  <ShowcaseImage
                    key="case-study-ecommerce-0"
                    src="/images/case-study-ecommerce-0.png"
                    alt="A ecommerce cloth model"
                  />,
                  <ShowcaseImage
                    key="case-study-ecommerce-1"
                    src="/images/case-study-ecommerce-1.png"
                    alt="A ecommerce cloth model processed by tagging."
                  />,
                  <ShowcaseTable
                    key="case-study-ecommerce-table"
                    position="ml-auto"
                    tables={[
                      {
                        name: "ecommerce-table",
                        head: ["Item", "Value"],
                        rows: windowSize
                          ? windowSize.width > 640
                            ? [
                                ["Name", "Summer dress"],
                                ["Category", "Dress"],
                                ["Style", "Retro"],
                                ["Sleeve", "No sleeve"],
                                ["Length", "Long"],
                                ["Waistline", "High waist"],
                                ["Colour 1", "67A4DB"],
                                ["Colour 2", "68A9E3"],
                                ["Colour 3", "A6C4E1"],
                              ]
                            : [
                                ["Name", "Summer dress"],
                                ["Category", "Dress"],
                                ["Style", "Retro"],
                                ["Sleeve", "No sleeve"],
                                ["Length", "Long"],
                              ]
                          : [],
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
            headerInActiveBgColor: inactiveHeaderGradient[2],
            headerActiveTextColor: "text-white",
            headerInActiveTextColor: "text-instillGrey20",
            content: (
              <AccordionContentLayout
                title="Task for your use case"
                source="Source"
                destination="Destination"
                description="Stop building data pipelines from scratch. 
                  Just use VDP to connect your data, import STOA Vision 
                  AI models, and load the results to 30+ destinations to 
                  solve your use cases."
                currentFrame={currentShowcaseFrame}
                focusedShowcaseFrame={focusedShowcaseFrame}
                getCurrentItem={() => null}
                showcases={[
                  <div
                    key="case-study-custom-0"
                    className="hidden h-[260px] min-w-[260px] bg-[#268398] md:h-[355px] md:min-w-[336px] xl:flex"
                  >
                    <DataSourceIcon
                      width="w-[226px]"
                      height="h-[226px]"
                      color="fill-white"
                      position="m-auto"
                    />
                  </div>,
                  <div
                    key="case-study-custom-1"
                    className="hidden h-[260px] min-w-[260px] bg-[#268398] md:h-[355px] md:min-w-[336px] xl:flex"
                  >
                    <ModelIcon
                      width="w-[226px]"
                      height="h-[226px]"
                      color="fill-white"
                      position="m-auto"
                    />
                  </div>,
                  <div
                    key="case-study-custom-2"
                    className="hidden h-[260px] min-w-[260px] bg-[#268398] md:h-[355px] md:min-w-[336px] xl:flex"
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
  }, [
    activeIndex,
    setActiveIndex,
    currentShowcaseFrame,
    focusedShowcaseFrame,
    windowSize,
  ]);

  useEffect(() => {
    setCurrentShowcaseFrame(0);
    setFocusedShowcaseFrame(null);
    switch (activeIndex[0]) {
      case 1:
        setShowcaseMaxFrame(3);
        break;
      default:
        setShowcaseMaxFrame(2);
        break;
    }
  }, [activeIndex]);

  useInterval(() => {
    if (activeIndex[0] === 3 || focusedShowcaseFrame !== null) return;
    setCurrentShowcaseFrame((prev) => {
      if (prev + 1 <= showcaseMaxFrame) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }, 1500);

  useEffect(() => {
    if (focusedShowcaseFrame === null) return;

    const resetClickedShowcaseFrame = () => {
      if (focusedShowcaseFrame !== null) {
        setFocusedShowcaseFrame(null);
      }
    };

    setCurrentShowcaseFrame(focusedShowcaseFrame);

    const timeout = setTimeout(resetClickedShowcaseFrame, 3000);
    return () => clearTimeout(timeout);
  }, [focusedShowcaseFrame]);

  // The blueprint location is onl

  return (
    <>
      <BlueprintContainer
        alignWith="container"
        padding="py-[60px]"
        unitHeight={30}
        unitWidth={30}
        bgColor="bg-instillGrey90"
        display="hidden xl:flex"
      >
        <div className="m-auto flex w-full max-w-[1127px] flex-col  px-[30px]  xl:px-0">
          <SectionLabel
            text="Case study"
            position="mr-auto"
            marginBottom="mb-2.5"
          />
          <SectionHeader
            header="Transform your business with VDP"
            headerWidth="w-full"
            headerTextColor="text-white"
            marginBottom="mb-10"
          />
          <div className="flex flex-row gap-x-[30px] xl:gap-x-[60px]">
            <div className="flex w-full md:w-1/2 xl:w-2/3">{caseAccordion}</div>
            <div className="flex w-full md:w-1/2 xl:w-1/3">{controlPanel}</div>
          </div>
        </div>
      </BlueprintContainer>
      <div className="relative flex flex-col px-4 py-20 xl:hidden">
        <SectionLabel
          text="Case study"
          position="mr-auto"
          marginBottom="mb-2.5"
        />
        <SectionHeader
          header="VDP integration in AI lifecycle"
          headerWidth="w-full"
          headerTextColor="text-white"
          marginBottom="mb-10"
        />
        {caseAccordion}
      </div>
    </>
  );
};

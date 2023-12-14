import cn from "clsx";
import {
  AirbyteIcon,
  AsyncArrowsIcon,
  AsyncIcon,
  GrpcIcon,
  HttpIcon,
  ImageClassificationIcon,
  KeypointDetectionIcon,
  ObjectDetectionIcon,
  OnnxIcon,
  OpticalCharacterRecognitionIcon,
  PlusIcon,
  PythonIcon,
  PyTorchIcon,
  SyncArrowsIcon,
  SyncIcon,
  TensorFlowIcon,
  VdpLogo,
} from "@instill-ai/design-system";

import { SectionHeader, SectionLabel } from "@/components/ui";
import { HowItWorksRow } from "./HowItWorksRow";
import { forwardRef } from "react";

export type HowItWorksProps = {
  marginBottom?: string;
};

export const HowItWorks = forwardRef<HTMLDivElement, HowItWorksProps>(
  ({ marginBottom }, ref) => {
    const iconProps = { width: "w-full", height: "h-full", position: "m-auto" };
    return (
      <div ref={ref} className={cn("flex flex-col py-20", marginBottom)}>
        <div className="mb-20 flex flex-col gap-y-2.5">
          <SectionLabel text="Open to integrations" position="mr-auto" />
          <SectionHeader
            header="Designed for Flexibility and Scale."
            headerWidth="w-full"
            headerTextColor="text-[#2B2B2B]"
          />
        </div>
        <div className="flex flex-col gap-y-20">
          <HowItWorksRow
            type="left"
            title="Instill VDP Pipeline Builder"
            description="By leveraging ready-to-use data connectors, VDP is the single point of unstructured data integration, where you can sync unstructured data from anywhere into data warehouses or applications. Focus on gaining insights across all your data, instead of maintaining connectors."
            learnMoreLink="/docs/latest/vdp/data-connector"
            icon={<img src={"./images/console-flow.svg"} />}
            cubes={[]}
          />
          <HowItWorksRow
            type="right"
            title="Various Connectors and Operators"
            description="By leveraging ready-to-use data connectors, VDP is the single point of unstructured data integration, where you can sync unstructured data from anywhere into data warehouses or applications. Focus on gaining insights across all your data, instead of maintaining connectors."
            learnMoreLink="/docs/latest/vdp/data-connector"
            cubes={[
              {
                id: "httpIcon",
                icon: (
                  <HttpIcon
                    {...iconProps}
                    color="fill-instillBlue50"
                    position="m-auto"
                  />
                ),
                color: "bg-instillBlue10",
              },
              {
                id: "grpcIcon",
                icon: (
                  <GrpcIcon {...iconProps} color="fill-instillWarmOrange50" />
                ),
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
            ]}
          />
          <HowItWorksRow
            type="left"
            title="Instill Model"
            description={
              <div className="space-y-20">
                <div className="h-[300px]">
                  <div className="my-auto">
                    <p className="font-['IBM Plex Sans'] mb-6 text-[30px] font-bold leading-7 text-[#E05243]">
                      1. Our Models or Yours
                    </p>

                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                  </div>
                </div>
                <div className="h-[300px]">
                  <div className="my-auto">
                    <p className="font-['IBM Plex Sans'] mb-6 text-[30px] font-bold leading-7 text-[#E05243]">
                      1. Our Models or Yours
                    </p>

                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                  </div>
                </div>
                <div className="h-[300px]">
                  <div className="my-auto">
                    <p className="font-['IBM Plex Sans'] mb-6 text-[30px] font-bold leading-7 text-[#E05243]">
                      1. Our Models or Yours
                    </p>

                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                    <li className="font-['IBM Plex Sans'] text-[20px] leading-7">
                      Point 1, get started with our open source projects to
                    </li>
                  </div>
                </div>
              </div>
            }
            learnMoreLink="/docs/latest/model/import"
            cubes={[]}
            icon={
              <div className="space-y-8">
                <img src="/images/our-model.svg" alt="" />
                <img src="/images/infrastructure-auto-scale.svg" alt="" />
                <img src="/images/logging-and-monitoring.svg" alt="" />
              </div>
            }
          />
          <HowItWorksRow
            type="right"
            title="Instill SDKs for Scale"
            description="VDP solves popular AI tasks including Image Classification, Object Detection, Keypoint Detection, OCR and more, out of the box. It produces data from models with standardised format for use in ETL pipelines, data and application integration."
            learnMoreLink="/docs/latest/model/ai-task"
            cubes={[]}
            icon={<img src="/images/sdk-for-scale.svg" alt="" />}
          />
        </div>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";

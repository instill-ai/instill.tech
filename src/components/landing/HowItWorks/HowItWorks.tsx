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
            header="How it works?"
            headerWidth="w-full"
            headerTextColor="text-instillGrey90"
          />
        </div>
        <div className="flex flex-col gap-y-20">
          <HowItWorksRow
            type="left"
            title="Pre-built ETL data connectors for extensive data access"
            description="By leveraging ready-to-use ETL data connectors, VDP is the single point of unstructured data integration, where you can sync unstructured data from anywhere into data warehouses or applications. Focus on gaining insights across all your data, instead of maintaining connectors."
            learnMoreLink="/docs/core-concepts/connector"
            number={1}
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
            type="right"
            title="One-click import and deploy AI models across vendors and frameworks"
            description="VDP integrates with the best ML tools and platforms to make importing models super easy. Get access to state-of-the-art models across vendors and your own models without changing your workflow. It supports frameworks including TensorRT, PyTorch, TensorFlow, ONNX, Python and more."
            learnMoreLink="/docs/import-models/overview"
            number={2}
            cubes={[
              {
                id: "tensorflowIcon",
                icon: <TensorFlowIcon {...iconProps} />,
                color: "bg-instillWarmOrange05",
              },
              {
                id: "pythonIcon",
                icon: <PythonIcon {...iconProps} />,
                color: "bg-instillBlue10",
              },
              {
                id: "onnxIcon",
                icon: <OnnxIcon {...iconProps} />,
                color: "bg-instillGrey05",
              },
              {
                id: "pytorchIcon",
                icon: <PyTorchIcon {...iconProps} />,
                color: "bg-instillRed10",
              },
            ]}
          />
          <HowItWorksRow
            type="left"
            title="Standardise AI tasks for ETL pipelines, data and application integration"
            description="VDP solves popular AI tasks including image classification, object detection, keypoint detection, OCR and more, out of the box. It produces data from models with standardised format for use in ETL pipelines, data and application integration."
            learnMoreLink="/docs/core-concepts/ai-task"
            number={3}
            cubes={[
              {
                id: "imageClassificationIcon",
                icon: (
                  <ImageClassificationIcon
                    {...iconProps}
                    color="fill-instillBlue50"
                  />
                ),
                color: "bg-instillBlue10",
              },
              {
                id: "keypointDetectionIcon",
                icon: (
                  <KeypointDetectionIcon
                    {...iconProps}
                    color="fill-instillLemonYellow50"
                  />
                ),
                color: "bg-instillLemonYellow05",
              },
              {
                id: "opticalCharacterRecognitionIcon",
                icon: (
                  <OpticalCharacterRecognitionIcon
                    {...iconProps}
                    color="fill-instillWarmOrange50"
                  />
                ),
                color: "bg-instillWarmOrange05",
              },
              {
                id: "objectDetectionIcon",
                icon: (
                  <ObjectDetectionIcon
                    {...iconProps}
                    color="fill-instillNeonGreen"
                  />
                ),
                color: "bg-instillNeonGreen10",
              },
            ]}
          />
          <HowItWorksRow
            type="right"
            title="Build end-to-end ETL pipelines for unstructured data 10x faster"
            description={
              <div className="flex flex-col gap-y-5">
                <p>
                  ⚡ SYNC mode for real-time tasks: process your data with HTTP
                  or gRPC APIs to get results immediately, suitable for tasks
                  that have low-latency requirements.
                </p>
                <p>
                  🕓 ASYNC mode for on-demand workload: set up your data
                  pipeline to process data on demand or schedule, so it
                  processes data only when the trigger criteria are met.
                </p>
              </div>
            }
            learnMoreLink="/docs/core-concepts/pipeline"
            number={4}
            cubes={[
              {
                id: "syncIcon",
                icon: (
                  <SyncIcon {...iconProps} color="fill-instillNeonBlue50" />
                ),
                color: "bg-instillNeonBlue05",
              },
              {
                id: "syncArrowsIcon",
                icon: (
                  <SyncArrowsIcon {...iconProps} color="fill-instillGrey50" />
                ),
                color: "bg-instillGrey05",
              },
              {
                id: "asyncArrowsIcon",
                icon: (
                  <AsyncArrowsIcon {...iconProps} color="fill-instillGrey50" />
                ),
                color: "bg-instillGrey05",
              },
              {
                id: "asyncIcon",
                icon: (
                  <AsyncIcon {...iconProps} color="fill-instillWarmOrange50" />
                ),
                color: "bg-instillWarmOrange05",
              },
            ]}
          />
        </div>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";

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

import { SectionLabel } from "@/components/ui";
import HowItWorksRow from "./HowItWorksRow";

export type HowItWorksProps = {
  marginBottom?: string;
};

const HowItWorks = ({ marginBottom }: HowItWorksProps) => {
  let iconProps = { width: "w-full", height: "h-full", position: "m-auto" };
  return (
    <div className={cn("flex flex-col", marginBottom)}>
      <div className="mb-20 flex flex-col gap-y-2.5">
        <SectionLabel text="Read Getting started guide" position="mr-auto" />
        <h2 className="text-5xl font-normal text-instillGrey90">
          How it works?
        </h2>
      </div>
      <div className="flex flex-col gap-y-20">
        <HowItWorksRow
          type="left"
          title="Pre-built ETL data connectors for extensive data access"
          description="By leveraging ready-to-use ETL data connectors, VDP is the single point of visual data integration, where you can sync visual data from anywhere into data warehouses or applications. Focus on gaining insights across all your visual data, instead of maintaining connectors."
          learnMoreLink=""
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
          title="One-click import and deploy Vision AI models across vendors and frameworks"
          description="VDP integrates with the best ML tools and platforms to make importing models super easy. Get access to state-of-the-art models across vendors and your own models without changing your workflow. It supports frameworks including TensorRT, PyTorch, TensorFlow, ONNX, Python and more."
          learnMoreLink=""
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
          title="Standardise Computer Vision Tasks for ETL pipelines, data and application integration"
          description="VDP solves popular Computer Vision Tasks including image classification, object detection, keypoint detection, OCR and more, out of the box. It produces data from models with standardised format for use in ETL pipelines, data and application integration."
          learnMoreLink=""
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
          title="Build end-to-end ETL pipelines for visual data 10x faster"
          description={
            <div className="flex flex-col gap-y-5">
              <p>
                ⚡ SYNC mode for real-time tasks: process your data with HTTP or
                gRPC APIs to get results immediately, suitable for tasks that
                have low-latency requirements.
              </p>
              <p>
                🕓 ASYNC mode for on-demand workload: set up your data pipeline
                to process data on demand or schedule, so it processes data only
                when the trigger criteria are met.
              </p>
            </div>
          }
          learnMoreLink=""
          number={4}
          cubes={[
            {
              id: "syncIcon",
              icon: <SyncIcon {...iconProps} color="fill-instillNeonBlue50" />,
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
};

export default HowItWorks;

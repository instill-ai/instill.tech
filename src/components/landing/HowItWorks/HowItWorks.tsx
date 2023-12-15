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
            title="Instill VDP"
            description={
              <div>
                <li>Connect to your unstructured data effortlessly.</li>
                <li className="mb-4">
                  Build pipelines to power versatile AI features in your
                  applications.
                </li>
                <li>
                  Test pipelines visually with a single click to see output at
                  each step.
                </li>
              </div>
            }
            learnMoreLink="/docs/latest/vdp/data-connector"
            icon={<img src={"./images/console-flow.svg"} />}
            cubes={[]}
          />
          <HowItWorksRow
            type="right"
            title="Pre-built Connectors and Operators"
            description={
              <div className="space-y-4">
                <p>
                  To extract and load data: Pinecone, BigQuery, Postgres, Google
                  Drive, Google Sheets, RESP API connectors and more.
                </p>
                <p>
                  To transform data: Text Operator to parse unstructured data in
                  various document types, and many more.
                </p>
              </div>
            }
            learnMoreLink="/docs/latest/vdp/data-connector"
            cubes={[]}
            icon={<img src={"/images/connectors.svg"} alt="" sizes="" />}
          />
          <HowItWorksRow
            type="left"
            sectionTitle="Instill Model"
            title=" Open-source models or deploy your own"
            description={
              <div>
                <div className="flex h-[300px] items-center">
                  <div className="my-auto space-y-4">
                    <p>
                      Model Deployment: Stable Diffusion, GPT, Llama 2, MPT,
                      Falcon, CLIP, Mask RCNN, YOLOv7, YOLOv7 Pose, and more.
                    </p>
                    <p>
                      AI Tasks: Text Generation, Text to Image, Audio
                      Recognition, Image Classification, Object Detection,
                      Keypoint Detection, OCR, Instance Segmentation, and
                      Semantic Segmentation.
                    </p>
                  </div>
                </div>
              </div>
            }
            learnMoreLink="/docs/latest/model/import"
            cubes={[]}
            icon={
              <div className="space-y-8">
                <img src={"/images/models.svg"} alt="" sizes="" />
              </div>
            }
          />
          <HowItWorksRow
            type="right"
            title="Ready to use in Production"
            description={
              <div className="space-y-4">
                <p>
                  All the pipelines and models actually work and have
                  production-ready APIs.
                </p>
                <p>Integrate with your system via Instill SDKs.</p>
              </div>
            }
            learnMoreLink="/docs/latest/model/ai-task"
            cubes={[]}
            icon={<img src="/images/sdk.svg" alt="" />}
          />
          <div className="my-10"></div>
          <HowItWorksRow
            type="left"
            title="Leave the Infrastructure Worries Behind with Instill Cloud"
            description={
              <div className="space-y-4">
                <p>
                  With Instill Cloud, We handle the servers, dependencies, GPUs,
                  batching, and everything else so you can focus on getting
                  things done.
                </p>
              </div>
            }
            learnMoreLink="/docs/latest/model/ai-task"
            cubes={[]}
            icon={<img src="/images/instill-cloud.svg" alt="" />}
          />
        </div>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";

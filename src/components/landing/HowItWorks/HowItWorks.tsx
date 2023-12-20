import cn from "clsx";
import {
  AirbyteIcon,
  AsyncArrowsIcon,
  AsyncIcon,
  GrpcIcon,
  HttpIcon,
  Icons,
  ImageClassificationIcon,
  KeypointDetectionIcon,
  ObjectDetectionIcon,
  OnnxIcon,
  OpticalCharacterRecognitionIcon,
  PlusIcon,
  PythonIcon,
  PyTorchIcon,
  Separator,
  SyncArrowsIcon,
  SyncIcon,
  TensorFlowIcon,
  VdpLogo,
} from "@instill-ai/design-system";

import { SectionHeader, SectionLabel } from "@/components/ui";
import { HowItWorksRow } from "./HowItWorksRow";
import { forwardRef } from "react";
import Link from "next/link";

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
              <div className="space-y-4">
                <p>Connect to your unstructured data effortlessly.</p>
                <p>
                  Build pipelines to power versatile AI features in your
                  applications.
                </p>
                <p>
                  Test pipelines visually with a single click to see output at
                  each step.
                </p>
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
            icon={
              <div className="inline-flex flex-col items-end justify-start shadow-instill-solid-20">
                <div className="flex flex-col items-end justify-start gap-2">
                  <div className="flex flex-col items-center justify-start border border-neutral-400 bg-white ">
                    <div className="flex flex-col items-start justify-start self-stretch">
                      <div className="inline-flex items-center justify-start gap-4 px-6 pt-6">
                        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
                          <div className="self-stretch font-sans text-xl font-bold leading-normal text-gray-800">
                            Python
                          </div>
                        </div>
                      </div>
                      <Separator className="mt-5" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5 self-stretch px-6 py-5">
                      <div className="flex flex-col items-start justify-start gap-5 self-stretch">
                        <div className="font-sans text-xl font-medium text-black xl:text-4xl">
                          pip install instill-sdk
                        </div>
                        <div className="inline-flex items-center justify-center gap-2 rounded py-3">
                          <Link
                            href={"https://github.com/instill-ai/python-sdk"}
                          >
                            <div className="flex gap-x-2 text-center font-sans text-base font-semibold capitalize leading-none tracking-tight text-semantic-accent-default">
                              Go to library
                              <Icons.ArrowRight className="my-auto h-4 w-4 stroke-semantic-accent-default" />
                            </div>
                          </Link>
                          <div className="relative h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start border border-neutral-400 bg-white ">
                  <div className="flex  flex-col items-start justify-start self-stretch">
                    <div className="inline-flex  items-center justify-start gap-4 px-6 pt-6">
                      <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
                        <div className="self-stretch font-sans text-xl font-bold leading-normal text-gray-800">
                          Typescript
                        </div>
                      </div>
                    </div>
                    <Separator className="mt-5" />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-5 px-6 py-5">
                    <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
                      <div className="shrink grow basis-0 font-sans text-xl font-medium text-black xl:text-4xl">
                        npm i @instill-ai/typescript-sdk
                      </div>
                      <div className="inline-flex items-center justify-center gap-2 rounded py-3">
                        <Link
                          href={"https://github.com/instill-ai/typescript-sdk"}
                        >
                          <div className="flex gap-x-2 text-center font-sans text-base font-semibold capitalize leading-none tracking-tight text-semantic-accent-default">
                            <p className="my-auto">Go to library</p>
                            <Icons.ArrowRight className="my-auto h-4 w-4 stroke-semantic-accent-default" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
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

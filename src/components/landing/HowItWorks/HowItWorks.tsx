import cn from "clsx";
import {
  ArrowRightIcon,
  BigQueryIcon,
  GitHubIcon,
  Icons,
  Logos,
  ModelIcon,
  ModelLogo,
  Separator,
  SolidButton,
  VdpLogo,
} from "@instill-ai/design-system";
import { SectionHeader, SectionLabel } from "@/components/ui";
import { HowItWorksRow } from "./HowItWorksRow";
import React, { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export type HowItWorksProps = {
  marginBottom?: string;
};

export const HowItWorks = forwardRef<HTMLDivElement, HowItWorksProps>(
  ({ marginBottom }, ref) => {
    const router = useRouter();
    const iconProps = { width: "w-full", height: "h-full", position: "m-auto" };
    return (
      <div ref={ref} className={cn("flex flex-col py-20", marginBottom)}>
        <div className="flex flex-col gap-y-2.5 xl:mb-20">
          <SectionLabel text="What makes us different" position="mr-auto" />
          <SectionHeader
            header="Designed for Flexibility and Scale"
            headerWidth="w-full xl:text-left text-center hidden xl:block"
            headerTextColor="text-[#2B2B2B]"
          />
        </div>
        <div className="flex flex-col xl:gap-y-20">
          <HowItWorksRow
            type="left"
            title="Drag-and-Drop Assembly with Pre-Built Components"
            description={
              <div className="space-y-4">
                <p className="font-sans text-[20px] font-normal">
                  We offer open-source, pre-built components for data
                  extraction, AI transformation, third-party app integration,
                  and flexible data manipulation. Assemble customized pipelines
                  for your use case with a drag-and-drop interface.
                </p>
              </div>
            }
            learnMoreLink={null}
            // icon={<img src={"./images/drag-and-drop-component.svg"} />}
            icon={
              <div className="relative h-[350px] w-[350px]">
                <div className="absolute left-0 top-[0.22px] inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#FFF3E4]">
                  <Logos.Pinecode className="h-[100px] w-[100px]" />
                  <div className="px-2.5 pb-2 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    Pinecone
                  </div>
                </div>
                <div className="absolute left-[230.06px] top-[230.11px] inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#ECEBFF] py-2.5">
                  <Logos.Cohere className="h-[70px] w-[70px]" />
                  <div className="pt-2 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    cohere
                  </div>
                </div>
                <div className="absolute left-[-0px] top-[230.11px] inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#F6F6F6]">
                  <Logos.OpenAI className="h-[75px] w-[75px]" />
                  <div className="px-2.5 pb-2 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    OpenAI
                  </div>
                </div>
                <div className="absolute left-[230.06px] top-0 inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#F4FBFF]">
                  <img
                    src={"/icons/airbyte/bigquery.svg"}
                    alt=""
                    className="h-[75px] w-[75px]"
                  />
                  <div className="px-2.5 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    BigQuery
                  </div>
                </div>
                <div className="absolute left-[105px] top-[100px] inline-flex  items-center justify-center pb-[13.27px] pl-[13px] pr-[13.31px] pt-3.5">
                  <div className="relative flex flex-col items-start justify-start">
                    <VdpLogo variant="square" width={120} />
                  </div>
                </div>
              </div>
            }
            cubes={[]}
            buttons={
              <SolidButton
                type="button"
                color="primaryLight"
                startIcon={
                  <GitHubIcon
                    width="w-[28px]"
                    height="h-[28px]"
                    color="fill-instillNeonBlue"
                    position="my-auto"
                  />
                }
                padding="px-5 py-2.5"
                itemGapX="gap-x-5"
                onClickHandler={() =>
                  router.push("https://github.com/instill-ai/vdp", undefined, {
                    scroll: false,
                  })
                }
                hoveredShadow="hover:shadow-instill-solid-5"
                position="mt-auto xl:mr-auto w-full justify-center xl:w-auto"
              >
                <p className="text-[20px] font-normal">Star Instill VDP</p>
              </SolidButton>
            }
          />
          <HowItWorksRow
            type="right"
            title="Transform your apps with open-source or your own AI models"
            description={
              <div className="space-y-4">
                <p className="font-sans text-[20px] font-normal">
                  Import and deploy AI models with ease, dynamically generating
                  inference API endpoints that seamlessly integrate into your
                  pipelines. Customize LLMs, Diffusion and other models to match
                  your data and use cases, ensuring exceptional results with
                  precision.
                </p>
              </div>
            }
            learnMoreLink={null}
            cubes={[]}
            // icon={<img src={"/images/models.svg"} alt="" sizes="" />}
            icon={
              <div className="relative h-[350px] w-[350px]">
                <div className="absolute left-0 top-[0.22px] inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#FFF1F1]">
                  <img src={"/icons/airbyte/llava.svg"} alt="" />
                  <div className="px-2.5 pb-2 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    LLaVA-7b
                  </div>
                </div>
                <div className="absolute left-[230.06px] top-[230.11px] inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#FFF1F1] py-2.5">
                  <img src={"/icons/airbyte/mistral-7b.svg"} alt="" />
                  <div className="pt-2 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    Mistral-7b
                  </div>
                </div>
                <div className="absolute left-[-0px] top-[230.11px] inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#F6F6F6]">
                  <img src={"/icons/airbyte/mosaicML.svg"} alt="" />
                  <div className="px-2.5 pb-2 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    MPT-7b
                  </div>
                </div>
                <div className="absolute left-[230.06px] top-0 inline-flex h-[120px] w-[120px] flex-col items-center justify-center bg-[#F4FBFF]">
                  <img src={"/icons/airbyte/meta.svg"} alt="" />
                  <div className="px-1 pb-2 font-sans text-xl font-normal leading-tight text-[#1D2433]">
                    LLaMA2-7b
                  </div>
                </div>
                <div className="absolute left-[105px] top-[100px] inline-flex  items-center justify-center pb-[13.27px] pl-[13px] pr-[13.31px] pt-3.5">
                  <div className="relative flex flex-col items-start justify-start">
                    <ModelLogo variant="square" width={120} />
                  </div>
                </div>
              </div>
            }
            buttons={
              <div className="flex flex-col gap-x-2 xl:flex-row">
                <SolidButton
                  type="button"
                  color="primaryLight"
                  startIcon={
                    <GitHubIcon
                      width="w-[28px]"
                      height="h-[28px]"
                      color="fill-instillNeonBlue"
                      position="my-auto"
                    />
                  }
                  padding="px-5 py-2.5"
                  itemGapX="gap-x-5"
                  onClickHandler={() =>
                    router.push(
                      "https://github.com/instill-ai/model",
                      undefined,
                      { scroll: false }
                    )
                  }
                  hoveredShadow="hover:shadow-instill-solid-5"
                  position="mt-auto w-full justify-center xl:w-auto"
                >
                  <p className="text-[20px] font-normal">Star Instill VDP</p>
                </SolidButton>
                <SolidButton
                  type="button"
                  color="primaryLight"
                  endIcon={
                    <ArrowRightIcon
                      width="w-[28px]"
                      height="h-[28px]"
                      color="fill-instillNeonBlue"
                      position="my-auto"
                    />
                  }
                  padding="px-5 py-2.5 !bg-white"
                  itemGapX="gap-x-5"
                  onClickHandler={() =>
                    router.push("https://console.instill.tech/hub", undefined, {
                      scroll: false,
                    })
                  }
                  hoveredShadow="hover:shadow-instill-solid-5"
                  position="xl:mt-auto xl:mr-auto mt-5 w-full justify-center xl:w-auto"
                >
                  <p className="text-[20px] font-normal">
                    Access on Instill Cloud
                  </p>
                </SolidButton>
              </div>
            }
          />

          <HowItWorksRow
            type="left"
            title="Forget about Infrastructure"
            description={
              <div className="space-y-4">
                <p className="font-sans text-[20px] font-normal">
                  Pipelines and models are production-ready with Instill Cloud
                  managing servers, dependencies, GPUs, and more.
                </p>
                <p className="font-sans text-[20px] font-normal">
                  Our Instill SDKs offer seamless integration for enhanced
                  performance in your systems.
                </p>
              </div>
            }
            learnMoreLink="/docs/v0.6.0-alpha/sdk/python"
            cubes={[]}
            icon={
              <div className="inline-flex flex-col items-end justify-start shadow-instill-solid-20">
                <div className="flex flex-col items-end justify-start gap-2">
                  <div className="flex flex-col items-center justify-start border border-b-0 border-neutral-400 bg-white ">
                    <div className="flex flex-col items-start justify-start self-stretch">
                      <div className="inline-flex items-center justify-start gap-4 px-6 pt-6">
                        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
                          <div className="self-stretch font-sans text-[16px] font-bold leading-normal text-gray-800">
                            Python
                          </div>
                        </div>
                      </div>
                      <Separator className="mt-5" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5 self-stretch px-6 py-5">
                      <div className="flex flex-col items-start justify-start gap-5 self-stretch">
                        <div className="font-sans text-xl font-medium text-black xl:text-[30px]">
                          pip install instill-sdk
                        </div>
                        <div className="inline-flex items-center justify-center gap-2 rounded py-3">
                          <Link
                            href={"https://github.com/instill-ai/python-sdk"}
                          >
                            <div className="flex gap-x-2 text-center font-sans text-[13px] font-semibold capitalize leading-none tracking-tight text-semantic-accent-default">
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
                        <div className="self-stretch font-sans text-[16px] font-bold leading-normal text-gray-800">
                          Typescript
                        </div>
                      </div>
                    </div>
                    <Separator className="mt-5" />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-5 px-6 py-5">
                    <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
                      <div className="shrink grow basis-0 font-sans text-xl font-medium text-black xl:text-[30px]">
                        npm i @instill-ai/typescript-sdk
                      </div>
                      <div className="inline-flex items-center justify-center gap-2 rounded py-3">
                        <Link
                          href={"https://github.com/instill-ai/typescript-sdk"}
                        >
                          <div className="flex gap-x-2 text-center font-sans text-[13px] font-semibold capitalize leading-none tracking-tight text-semantic-accent-default">
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
        </div>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";

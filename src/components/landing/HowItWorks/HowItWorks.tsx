import cn from "clsx";
import {
  ArrowRightIcon,
  GitHubIcon,
  Icons,
  Separator,
  SolidButton,
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
        <div className="mb-20 flex flex-col gap-y-2.5">
          <SectionLabel text="What makes us different" position="mr-auto" />
          <SectionHeader
            header="Designed for Flexibility and Scale."
            headerWidth="w-full xl:text-left text-center hidden xl:block"
            headerTextColor="text-[#2B2B2B]"
          />
        </div>
        <div className="flex flex-col gap-y-20">
          <HowItWorksRow
            type="left"
            title="Drag-and-Drop Assembly with Pre-Built Components"
            description={
              <div className="space-y-4">
                <p>
                  We offer open-source, pre-built components for data
                  extraction, AI transformation, third-party app integration,
                  and flexible data manipulation. Assemble customized pipelines
                  for your use case with a drag-and-drop interface.
                </p>
              </div>
            }
            learnMoreLink={null}
            icon={<img src={"./images/drag-and-drop-component.svg"} />}
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
                <p className="text-lg font-normal">Star Instill VDP</p>
              </SolidButton>
            }
          />
          <HowItWorksRow
            type="right"
            title="Transform your apps with open-source or your own AI models"
            description={
              <div className="space-y-4">
                <p>
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
            icon={<img src={"/images/models.svg"} alt="" sizes="" />}
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
                  <p className="text-lg font-normal">Star Instill VDP</p>
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
                  <p className="text-lg font-normal">Access on Instill Cloud</p>
                </SolidButton>
              </div>
            }
          />

          <HowItWorksRow
            type="left"
            title="Forget about Infrastructure"
            description={
              <div className="space-y-4">
                <p>
                  Pipelines and models are production-ready with Instill Cloud
                  managing servers, dependencies, GPUs, and more.
                </p>
                <p>
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
        </div>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";

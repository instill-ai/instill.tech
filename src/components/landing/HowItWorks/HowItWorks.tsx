import cn from "clsx";
import { CommonCtaButton, SectionHeader, SectionLabel } from "@/components/ui";
import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import {
  Button,
  GitHubIcon,
  Icons,
  Logos,
  Separator,
  SolidButton,
} from "@instill-ai/design-system";
import { InstillSDK } from "@/lib/instill-sdk";
import { Model } from "@instill-ai/toolkit";
import { Nullable } from "@instill-ai/design-system";
import { Connector } from "@/pages/component";
import { HowItWorksRow } from "./HowItWorksRow";
import Link from "next/link";
import ConnectorComponent from "../Connector/ConnectorComponent";
import OperatorComponent from "../Operator/OperatorComponent";
import ConnectorDefault from "../Connector/ConnectorDefault";
import ModelComponent from "../Model/ModelComponent";
import ModelDefault from "../Model/ModelDefault";
import Slide from "../Slide";

export type HowItWorksProps = {
  marginBottom?: string;
};

export type ModelDefinition = Model & {
  html_url: string;
};

export const HowItWorks = forwardRef<HTMLDivElement, HowItWorksProps>(
  ({ marginBottom }, ref) => {
    const router = useRouter();
    const iconProps = { width: "w-full", height: "h-full", position: "m-auto" };

    const [connectors, setConnectors] =
      React.useState<Nullable<Connector[]>>(null);
    const [models, setModels] =
      React.useState<Nullable<ModelDefinition[]>>(null);

    React.useEffect(() => {
      const fetchConnectors = async () => {
        try {
          const response = await InstillSDK.component(null, 0, 6);
          if (response.status === "success") {
            setConnectors(response.data.component_definitions);
          }
        } catch (error) {
          console.error(error); // Handle errors here
        }
      };
      const fetchModels = async () => {
        try {
          const response = await InstillSDK.model();
          if (response.status === "success") {
            setModels(response.data.models);
          }
        } catch (error) {
          console.error(error); // Handle errors here
        }
      };
      fetchConnectors(); // Call the asynchronous function
      fetchModels(); // Call the asynchronous function
    }, []);

    return (
      <div ref={ref} className={cn("flex flex-col py-20", marginBottom)}>
        <div className="flex flex-col gap-y-8">
          <Slide>
            <div className="flex flex-row">
              <SectionLabel
                text="What makes us different"
                position="mr-auto"
                textClass="!text-semantic-success-bg"
              />
            </div>
          </Slide>
          <Slide>
            <SectionHeader
              header="Designed for Flexibility and Scale"
              headerWidth="!font-sans !font-bold !word-spacing-normal !text-[56px]"
              headerTextColor="text-instillNeonBlue hidden xl:block"
            />
          </Slide>
        </div>
        <Slide>
          <div className="mb-6 flex flex-col xl:mb-10 xl:mt-8">
            <div className={cn("flex flex-1 flex-col gap-y-5 xl:mb-0")}>
              <Slide>
                <h3 className="text-[24px] font-medium text-instillGrey90 xl:text-[42px]">
                  Drag-and-Drop Assembly with Pre-Built Components
                </h3>
              </Slide>
              <Slide>
                <div className="text-lg font-normal text-semantic-fg-secondary xl:mb-[30px]">
                  <div className="space-y-4">
                    <p className="font-sans text-[14px] font-normal leading-6 xl:text-[24px] xl:leading-9">
                      We offer open-source, pre-built components for data
                      extraction, AI transformation, third-party app
                      integration, and flexible data manipulation. Assemble
                      customized pipelines for your use case with a
                      drag-and-drop interface.
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div className="hidden xl:block">
                  <div className="flex justify-end">
                    <CommonCtaButton
                      withArrow={true}
                      link={"/component?page=1#component"}
                      text="Learn more"
                      position="my-auto"
                    />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </Slide>

        {/* <Slide> */}
        <div className="mb-9 grid grid-cols-1 gap-5 xl:grid-cols-3">
          {connectors &&
            connectors?.map((connector) => {
              if (connector.connector_definition) {
                return (
                  <Slide key={connector.connector_definition.id}>
                    <ConnectorComponent
                      connector_definition={connector.connector_definition}
                    />
                  </Slide>
                );
              }
              if (connector.operator_definition) {
                return (
                  <Slide key={connector.operator_definition.id}>
                    <OperatorComponent
                      operator_definition={connector.operator_definition}
                    />
                  </Slide>
                );
              }
            })}

          {!connectors && <ConnectorDefault count={6} />}
        </div>
        {/* </Slide> */}
        {/* Connector Cards */}
        <Slide>
          <div className="block xl:hidden">
            <div className="flex justify-center">
              <CommonCtaButton
                withArrow={true}
                link={"/component"}
                text="Learn more"
                position="mt-auto xl:mr-auto w-full justify-center xl:w-auto"
              />
            </div>
          </div>
        </Slide>

        <div className="mb-6 mt-8 flex flex-col xl:mb-10">
          <div className={cn("mb-0 flex flex-1 flex-col gap-y-3 xl:gap-y-6")}>
            <Slide>
              <h3 className="text-[24px] font-medium text-instillGrey90 xl:text-[42px]">
                Transform your apps with open-source or your own AI models
              </h3>
            </Slide>

            <Slide>
              <div className="mb-2.5 font-normal text-semantic-fg-secondary xl:mb-[30px] xl:text-lg">
                <div className="space-y-4">
                  <p className="font-sans text-[14px] font-normal leading-6 xl:text-[24px] xl:leading-9">
                    Import and deploy AI models with ease, dynamically
                    generating inference API endpoints that seamlessly integrate
                    into your pipelines. Customize LLMs, Diffusion and other
                    models to match your data and use cases, ensuring
                    exceptional results with precision.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div className="hidden xl:block">
                <div className="flex justify-end gap-x-5">
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
                    padding="px-5 py-2.5 transition-all duration-300 ease-in-out"
                    itemGapX="gap-x-2"
                    onClickHandler={() =>
                      router.push(
                        "https://github.com/instill-ai/vdp",
                        undefined,
                        {
                          scroll: false,
                        }
                      )
                    }
                    hoveredShadow="hover:shadow-instill-solid-5"
                  >
                    <p className="text-[24px] font-normal leading-7">
                      Star Instill VDP
                    </p>
                  </SolidButton>
                  <CommonCtaButton
                    withArrow={true}
                    link={"https://instill.tech"}
                    text="Try Free on Instill Cloud"
                    position="my-auto w-full flex justify-center xl:w-auto !bg-white hover:!shadow-instill-solid-5-white"
                  />
                </div>
              </div>
            </Slide>
          </div>
        </div>
        {/* </Slide> */}

        <Slide>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            {models &&
              models
                .slice(0, 6)
                ?.map((model) => (
                  <ModelComponent key={model.id} model={model} />
                ))}

            {!models && <ModelDefault count={6} />}
          </div>
        </Slide>

        {/* Model Cards */}
        <Slide>
          <div className="block xl:hidden">
            <div className="flex flex-col justify-start gap-y-5">
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
                padding="px-5 py-2.5 mt-5 xl:mr-auto w-full justify-center xl:w-auto"
                itemGapX="gap-x-5"
                onClickHandler={() =>
                  router.push(
                    "https://github.com/instill-ai/instill-core",
                    undefined,
                    {
                      scroll: false,
                    }
                  )
                }
                hoveredShadow="hover:shadow-instill-solid-5"
              >
                <p className="text-[20px] font-normal">Star on GitHub</p>
              </SolidButton>

              <CommonCtaButton
                withArrow={true}
                link={"https://instill.tech"}
                position="mt-auto xl:mr-auto w-full justify-center xl:w-auto"
                text="Try Free on Instill Cloud"
              />
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="mt-14">
            <HowItWorksRow
              type="left"
              title="Forget about Infrastructure"
              description={
                <Slide>
                  <div className="space-y-4 text-semantic-fg-secondary">
                    <p className="font-sans text-[14px] font-normal leading-6 xl:text-[22px] xl:leading-9">
                      Pipelines and models are production-ready with Instill
                      Cloud managing servers, dependencies, GPUs, and more.
                    </p>
                    <p className="font-sans text-[14px] font-normal leading-6 xl:text-[22px] xl:leading-9">
                      Our Instill SDKs offer seamless integration for enhanced
                      performance in your systems.
                    </p>
                  </div>
                </Slide>
              }
              learnMoreLink="/docs/v0.6.0-alpha/sdk/python"
              cubes={[]}
              icon={
                <Slide>
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
                                href={
                                  "https://github.com/instill-ai/python-sdk"
                                }
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
                      <div className="flex min-w-[320px] flex-col items-start justify-start gap-5 px-6 py-5 xl:min-w-[480px]">
                        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
                          <div className="shrink grow basis-0 font-sans text-xl font-medium text-black xl:text-[30px]">
                            npm i instill-sdk
                          </div>
                          <div className="inline-flex items-center justify-center gap-2 rounded py-3">
                            <Link
                              href={
                                "https://github.com/instill-ai/typescript-sdk"
                              }
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
                </Slide>
              }
            />
          </div>
        </Slide>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";

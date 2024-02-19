import cn from "clsx";
import { CommonCtaButton, SectionHeader, SectionLabel } from "@/components/ui";
import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import {
  Button,
  GitHubIcon,
  Logo,
  Logos,
  SolidButton,
  Tag,
} from "@instill-ai/design-system";
import { InstillSDK } from "@/lib/instill-sdk";
import { ConnectorDefinition, Model } from "@instill-ai/toolkit";
import { Nullable } from "@instill-ai/design-system";

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
      React.useState<Nullable<ConnectorDefinition[]>>(null);
    const [models, setModels] =
      React.useState<Nullable<ModelDefinition[]>>(null);

    React.useEffect(() => {
      const fetchConnectors = async () => {
        try {
          const response = await InstillSDK.connector();
          if (response.status === "success") {
            setConnectors(response.data.connector_definitions);
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
        <div className="flex flex-col gap-y-2.5">
          <SectionLabel
            text="What makes us different"
            position="mr-auto"
            textClass="!text-white"
          />
          <SectionHeader
            header="Designed for Flexibility and Scale"
            headerWidth="!font-sans !font-bold !word-spacing-normal !text-[56px]"
            headerTextColor="text-instillNeonBlue"
          />
        </div>
        <div className="mb-10 mt-8 flex flex-col">
          <div className={cn("mb-20 flex flex-1 flex-col gap-y-6 xl:mb-0")}>
            <h3 className="text-[42px] font-medium text-instillGrey90">
              Drag-and-Drop Assembly with Pre-Built Components
            </h3>
            <div className="mb-[30px] text-lg font-normal text-semantic-fg-secondary xl:mb-auto">
              <div className="space-y-4">
                <p className="font-sans text-[24px] font-normal leading-9">
                  We offer open-source, pre-built components for data
                  extraction, AI transformation, third-party app integration,
                  and flexible data manipulation. Assemble customized pipelines
                  for your use case with a drag-and-drop interface.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <CommonCtaButton
                withArrow={true}
                link={"/connector"}
                text="Learn more"
                position="my-auto"
              />
            </div>
          </div>
        </div>

        {/* Connector Cards */}
        <div className="grid grid-cols-3 gap-5">
          {connectors &&
            connectors.slice(0, 6)?.map((connector) => (
              <div
                className="flex flex-col border border-[#CBD2E1]"
                key={connector.uid}
              >
                <div className="bg-semantic-accent-bg px-5 py-2.5 font-sans font-normal tracking-[0.65px] text-semantic-accent-on-bg">
                  {connector.vendor}
                </div>
                <div className="px-5 py-2.5">
                  <div className="flex flex-row gap-x-2">
                    <div className="rounded-[6px] border p-1 shadow">
                      <img
                        src={`/icons/${connector.icon}`}
                        alt=""
                        className="mx-auto my-auto h-6 w-6"
                      />
                    </div>
                    <span className="my-auto w-full font-sans text-[18px] font-semibold">
                      {connector.title}
                    </span>
                    <div className="my-auto py-0.5">
                      <Tag
                        variant="lightGreen"
                        className="rounded-sm border-[#63D9B2] !py-0.5"
                      >
                        GA
                      </Tag>
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <Button
                      variant="secondaryGrey"
                      size="lg"
                      className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
                    >
                      Task name
                    </Button>
                  </div>
                  <div className="mt-2.5 text-[16px] font-normal text-semantic-fg-secondary">
                    One liner to describe what the component is aimed for for
                    this task.
                  </div>
                  <div className="mt-5 flex flex-row space-x-5 text-semantic-fg-secondary">
                    <div className="flex flex-row space-x-2">
                      <div className="my-auto">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 15.75L8.92496 15.6374C8.40398 14.856 8.14349 14.4652 7.79933 14.1824C7.49464 13.9319 7.14357 13.7441 6.7662 13.6295C6.33994 13.5 5.87033 13.5 4.93112 13.5H3.9C3.05992 13.5 2.63988 13.5 2.31901 13.3365C2.03677 13.1927 1.8073 12.9632 1.66349 12.681C1.5 12.3601 1.5 11.9401 1.5 11.1V4.65C1.5 3.80992 1.5 3.38988 1.66349 3.06901C1.8073 2.78677 2.03677 2.5573 2.31901 2.41349C2.63988 2.25 3.05992 2.25 3.9 2.25H4.2C5.88016 2.25 6.72024 2.25 7.36197 2.57698C7.92646 2.8646 8.3854 3.32354 8.67302 3.88803C9 4.52976 9 5.36984 9 7.05M9 15.75V7.05M9 15.75L9.07504 15.6374C9.59602 14.856 9.85651 14.4652 10.2007 14.1824C10.5054 13.9319 10.8564 13.7441 11.2338 13.6295C11.6601 13.5 12.1297 13.5 13.0689 13.5H14.1C14.9401 13.5 15.3601 13.5 15.681 13.3365C15.9632 13.1927 16.1927 12.9632 16.3365 12.681C16.5 12.3601 16.5 11.9401 16.5 11.1V4.65C16.5 3.80992 16.5 3.38988 16.3365 3.06901C16.1927 2.78677 15.9632 2.5573 15.681 2.41349C15.3601 2.25 14.9401 2.25 14.1 2.25H13.8C12.1198 2.25 11.2798 2.25 10.638 2.57698C10.0735 2.8646 9.6146 3.32354 9.32698 3.88803C9 4.52976 9 5.36984 9 7.05"
                            stroke="#1D2433"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="my-auto text-[16px] text-semantic-fg-secondary">
                        <a href={connector.documentation_url}>Docs</a>
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1">
                      <GitHubIcon
                        color="fill-[#1D2433]"
                        height="h-[24px]"
                        position="my-auto my-auto"
                        width="w-[24px]"
                      />
                      <span className="my-auto text-[16px] text-semantic-fg-secondary">
                        Github
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mb-10 mt-8 flex flex-col">
          <div className={cn("mb-20 flex flex-1 flex-col gap-y-6 xl:mb-0")}>
            <h3 className="text-[42px] font-medium text-instillGrey90">
              Transform your apps with open-source or your own AI models
            </h3>
            <div className="mb-[30px] text-lg font-normal text-semantic-fg-secondary xl:mb-auto">
              <div className="space-y-4">
                <p className="font-sans text-[24px] font-normal leading-9">
                  Import and deploy AI models with ease, dynamically generating
                  inference API endpoints that seamlessly integrate into your
                  pipelines. Customize LLMs, Diffusion and other models to match
                  your data and use cases, ensuring exceptional results with
                  precision.
                </p>
              </div>
            </div>
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
                padding="px-5 py-2.5"
                itemGapX="gap-x-5"
                onClickHandler={() =>
                  router.push("https://github.com/instill-ai/vdp", undefined, {
                    scroll: false,
                  })
                }
                hoveredShadow="hover:shadow-instill-solid-5"
              >
                <p className="text-[20px] font-normal">Star Instill VDP</p>
              </SolidButton>
              <CommonCtaButton
                withArrow={true}
                link={"https://instill.tech"}
                text="Try Free on Instill Cloud"
                position="my-auto"
              />
            </div>
          </div>
        </div>

        {/* Connector Cards */}
        <div className="grid grid-cols-3 gap-5">
          {models &&
            models.slice(0, 6)?.map((model) => (
              <div
                className="inline-flex items-start justify-start border border-[#CBD2E1]"
                key={model.uid}
              >
                <div className="relative h-full w-8 bg-[#FFF1D6]" />
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-between self-stretch px-5 py-2.5">
                  <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
                    <div className="inline-flex items-center justify-start gap-2">
                      <div className="my-auto flex items-center justify-center rounded border border-[#E1E6EF] p-1 shadow">
                        <Logos.InstillSquare className="h-[18px] w-[18px]" />
                      </div>
                      <div>
                        <span className="font-sans font-normal">
                          {model.configuration.repository.split("/")[0]}
                        </span>
                        <span>/</span>
                        <span className="font-sans font-bold">
                          {model.configuration.repository.split("/")[1]}
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-start py-1">
                      <Button
                        variant="secondaryGrey"
                        size="lg"
                        className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
                      >
                        {model.task}
                      </Button>
                    </div>
                    <div className="self-stretch font-sans text-base font-normal leading-7 text-semantic-fg-secondary">
                      {model.description}
                    </div>
                  </div>
                  <div className="mt-5 inline-flex items-end justify-end gap-x-5 self-stretch">
                    <div className="flex items-center justify-start gap-5 bg-white bg-opacity-0 p-1 opacity-80">
                      <div className="flex items-center justify-start gap-x-2">
                        <div className="my-auto">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.75 7.50005V12.0084C3.75 12.2776 3.75 12.4122 3.79099 12.5311C3.82724 12.6362 3.8864 12.7319 3.96419 12.8113C4.05215 12.9011 4.17255 12.9613 4.41334 13.0817L8.46334 15.1067C8.66011 15.2051 8.75851 15.2543 8.8617 15.2737C8.9531 15.2908 9.0469 15.2908 9.1383 15.2737C9.24149 15.2543 9.33989 15.2051 9.53666 15.1067L13.5867 13.0817C13.8275 12.9613 13.9479 12.9011 14.0358 12.8113C14.1136 12.7319 14.1728 12.6362 14.209 12.5311C14.25 12.4122 14.25 12.2776 14.25 12.0084V7.50005M1.5 6.37505L8.73167 2.75921C8.83006 2.71002 8.87925 2.68542 8.93085 2.67574C8.97655 2.66717 9.02345 2.66717 9.06915 2.67574C9.12075 2.68542 9.16994 2.71002 9.26833 2.75921L16.5 6.37505L9.26833 9.99088C9.16994 10.0401 9.12075 10.0647 9.06915 10.0744C9.02345 10.0829 8.97655 10.0829 8.93085 10.0744C8.87925 10.0647 8.83006 10.0401 8.73167 9.99088L1.5 6.37505Z"
                              stroke="#1D2433"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-center font-sans text-[14px] font-medium uppercase leading-3 tracking-wide text-semantic-fg-secondary">
                          Tutorial
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start gap-5 bg-white bg-opacity-0 p-1 opacity-80">
                      <div className="flex items-center justify-start gap-x-2">
                        <div className="my-auto">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.74973 8.24993L2.62473 15.3749M10.5135 2.65378C11.4271 3.25994 12.3051 3.97456 13.1256 4.79505C13.9532 5.62262 14.673 6.50873 15.2825 7.43075M6.94095 5.92204L4.7848 5.20332C4.53649 5.12055 4.26299 5.17322 4.06317 5.34229L1.9203 7.15549C1.48161 7.52669 1.60624 8.23312 2.14548 8.43179L4.17588 9.17983M8.76052 13.7643L9.50856 15.7947C9.70722 16.334 10.4136 16.4586 10.7849 16.0199L12.598 13.877C12.7671 13.6772 12.8198 13.4037 12.737 13.1554L12.0183 10.9993M14.5112 1.70298L10.8313 2.31628C10.434 2.38251 10.0695 2.57782 9.7943 2.87199L4.8345 8.17385C3.54888 9.54813 3.58464 11.6943 4.91533 13.025C6.24602 14.3557 8.3922 14.3914 9.76648 13.1058L15.0683 8.14603C15.3625 7.87083 15.5578 7.50637 15.624 7.10902L16.2374 3.42916C16.4066 2.41393 15.5264 1.53377 14.5112 1.70298Z"
                              stroke="#23272F"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-center font-sans text-[14px] font-medium uppercase leading-3 tracking-wide text-semantic-fg-secondary">
                          89.2K runs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";

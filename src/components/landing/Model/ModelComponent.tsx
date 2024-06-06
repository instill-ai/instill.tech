import React from "react";
import { ModelDefinition } from "../HowItWorks/HowItWorks";
import { Button, Logos } from "@instill-ai/design-system";

function ModelComponent({ model }: { model: ModelDefinition }) {
  return (
    <div
      className="inline-flex min-h-[200px] items-start justify-start border border-[#CBD2E1]"
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
                {model.name.split("/")[0]}
              </span>
              <span>/</span>
              <span className="font-sans font-bold">
                {model.name.split("/")[1]}
              </span>
            </div>
          </div>
          <div className="inline-flex items-center justify-start py-1">
            <Button
              variant="secondaryGrey"
              size="lg"
              className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
            >
              {/* Trim the first 5 characters "Task " */}
              {model.task.split("_").join(" ").toLowerCase().slice(5)}
            </Button>
          </div>
          <div className="self-stretch font-sans text-base font-normal leading-7 text-semantic-fg-secondary">
            {model.description}
          </div>
        </div>
        {/* <div className="mt-5 inline-flex items-end justify-end gap-x-5 self-stretch">
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
        </div> */}
      </div>
    </div>
  );
}

export default ModelComponent;

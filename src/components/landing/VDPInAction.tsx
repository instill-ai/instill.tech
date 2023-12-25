import React, { ForwardedRef } from "react";
import { SectionHeader, SectionLabel } from "../ui";
import { Icons, Tag } from "@instill-ai/design-system";
import { Jumbotron } from "./jumbotron";
import cn from "clsx";

export default function VDPInAction({
  ref,
}: {
  ref: ForwardedRef<HTMLDivElement>;
}) {
  return (
    <div className="mx-auto w-full px-4 xl:px-0" ref={ref}>
      <div className="flex flex-col xl:flex-row">
        <div className={cn("flex w-full flex-col xl:w-2/5")}>
          <div className="mb-10 flex flex-col">
            <SectionLabel
              text="VDP IN ACTION"
              position="mr-auto"
              marginBottom="mb-2.5"
            />
            <SectionHeader
              header="Unlock Limitless AI Potential"
              headerWidth="text-zinc-800 !text-[36px] font-medium font-mono capitalize"
              headerTextColor="text-instillGrey90"
            />
          </div>
          <div className="mb-10 space-y-4">
            <p className="font-sans font-normal">
              Boost Your AI Development with Our Versatile Data Pipeline!{" "}
            </p>
            <p>
              Our Versatile Data Pipeline powers your AI apps with virtually
              endless data, regardless of use case. Seamlessly integrate your
              unstructured data and harness the versatility of AI with Instill
              AIs rapidly expanding community of data connectors.
            </p>
            <p>Build apps in half the time</p>
            <p>
              Unrestricted access to perfectly structured data means unmatched
              experimentation power and lighter workloads.
            </p>
            <p>Experience the future with our interactive demo ⚡️.</p>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 flex w-full flex-wrap justify-center gap-x-3 gap-y-2 xl:justify-start">
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.Type02 className="h-3 w-3 stroke-instillGrey95" />
                Text
              </Tag>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.Image01 className="h-3 w-3 stroke-instillGrey95" />
                Image
              </Tag>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.Speaker01 className="h-3 w-3 stroke-instillGrey95" />
                Audio
              </Tag>
              <div className="hidden xl:block">
                <Tag
                  variant="darkYellow"
                  className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                >
                  <Icons.VideoRecorder className="h-3 w-3 stroke-instillGrey95" />
                  Video
                </Tag>
              </div>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                PDF
              </Tag>
              <div className="hidden xl:block">
                <Tag
                  variant="darkYellow"
                  className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                >
                  <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                  JSON
                </Tag>
              </div>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                CSV
              </Tag>
              <div className="hidden xl:block">
                <Tag
                  variant="darkYellow"
                  className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                >
                  <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                  Parquet
                </Tag>
              </div>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <div className="h-2 w-2 rounded-lg bg-black"></div>
                More
              </Tag>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full xl:mt-0 xl:w-3/5">
          <Jumbotron />
        </div>
      </div>
    </div>
  );
}

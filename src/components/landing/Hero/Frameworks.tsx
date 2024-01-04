import { Icons, Tag } from "@instill-ai/design-system";
import React from "react";

export const Frameworks = () => {
  return (
    <div className="my-7 flex flex-col">
      <div className="mb-2 flex w-full flex-wrap justify-start gap-x-3 gap-y-2">
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
  );
};

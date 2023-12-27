import React from "react";

export const OurPartner = () => {
  return (
    <div className="w-full] my-10 flex flex-col">
      <div className="flex flex-col p-2 xl:flex-row xl:p-16">
        <div className="mb-10 w-full text-center xl:mb-0 xl:w-1/2 xl:text-left">
          <p className="font-sans text-[24px] font-normal leading-9 text-gray-950">
            Partnerships
          </p>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <div className="flex h-[180px] w-auto items-center justify-center border border-b-0 border-r-0 p-4">
              <img
                src={"images/social/number-protocol.svg"}
                alt=""
                className="mx-auto my-auto h-16"
              />
            </div>
            <div className="flex h-[180px] w-auto items-center justify-center border border-b-0 p-4 xl:border-r-0">
              <img
                src={"images/social/huggingface.svg"}
                alt=""
                className="h-16"
              />
            </div>
            <div className="my-auto flex h-[180px] w-auto items-center justify-center border border-b-0 p-4">
              <img src="images/social/unify.svg" alt="" className="h-[180px]" />
            </div>
            <div className="my-auto flex h-[180px] w-auto items-center justify-center border border-b-0 p-4 xl:border-r-0">
              <img src="images/social/nvidia.svg" alt="" className="h-16" />
            </div>
            <div className="my-auto flex h-[180px] w-auto items-center justify-center border border-r-0 p-4">
              <img src="images/social/aws.svg" alt="" className="h-16" />
            </div>
            <div className="my-auto flex h-[180px] w-auto items-center justify-center border p-4">
              <img src="images/social/ubitus.svg" alt="" className="h-16" />
            </div>
            <div className="my-auto flex h-[180px] w-auto items-center justify-center border">
              <img
                src="images/social/national-tiwan.svg"
                alt=""
                className="h-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 xl:flex-row xl:p-16">
        <div className="mb-10 w-full text-center xl:mb-0 xl:w-1/2 xl:text-left">
          <p className="font-sans text-[24px] font-normal leading-9 text-gray-950">
            Investors
          </p>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <div className="flex h-[180px] w-auto items-center justify-center border border-r-0 p-4">
              <img
                src={"images/social/rtp-global.svg"}
                alt=""
                className="mx-auto my-auto h-16"
              />
            </div>
            <div className="flex h-[180px] w-auto items-center justify-center border p-4 xl:border-r-0">
              <img
                src={"images/social/lunar-ventures.svg"}
                alt=""
                className="h-16"
              />
            </div>
            <div className="my-auto flex h-[180px] w-auto items-center justify-center border p-4">
              <img
                src="images/social/hive-ventures.svg"
                alt=""
                className="h-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

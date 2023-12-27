import React from "react";

export const OurPartner = () => {
  return (
    <div className="w-full] my-10 flex flex-col">
      <div className="flex flex-row p-16">
        <div className="w-1/2">
          <p className="font-sans text-[24px] font-normal leading-9 text-gray-950">
            Partnerships
          </p>
        </div>
        <div className="w-1/2">
          <div className="flex flex-row">
            <div className="border p-4">
              <img
                src={"images/social/number-protocol.svg"}
                alt=""
                className="mx-auto my-auto h-16"
              />
            </div>
            <div className="border p-4">
              <img
                src={"images/social/huggingface.svg"}
                alt=""
                className="h-16"
              />
            </div>
            <div className="border p-4">
              <img src={"images/social/google.svg"} alt="" className="h-16" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-16">
        <p className="font-sans text-[24px] font-bold leading-9 text-gray-950">
          Backed by
        </p>
        <div className="flex flex-row gap-x-5">
          <img
            src={"images/social/hive-vertures.svg"}
            alt=""
            className="h-16"
          />
          <img src={"images/social/rtp-global.svg"} alt="" className="h-16" />
        </div>
        <div className="flex flex-row gap-x-5">
          <img
            src={"images/social/lunar-ventures.svg"}
            alt=""
            className="h-16"
          />
          <img src={"images/social/venture.svg"} alt="" className="h-16" />
        </div>
      </div>
    </div>
  );
};

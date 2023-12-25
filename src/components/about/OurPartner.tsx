import React from "react";

export const OurPartner = () => {
  return (
    <div className="my-10 flex w-full bg-[#F9FAFB]">
      <div className="w-1/2 py-16 pl-16">
        <p className="font-sans text-[24px] font-bold leading-9 text-gray-950">
          Partnerships
        </p>
        <div className="flex flex-row">
          <img
            src={"images/social/number-protocol.svg"}
            alt=""
            className="h-16"
          />
          <img src={"images/social/huggingface.svg"} alt="" className="h-16" />
          <img src={"images/social/google.svg"} alt="" className="h-16" />
        </div>
      </div>
      <div className="w-1/2 py-16 pr-16">
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

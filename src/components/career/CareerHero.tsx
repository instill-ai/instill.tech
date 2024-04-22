import * as React from "react";
import { ViewJobsScrollButtonProps } from "./ViewJobsScrollButton";

export const CareerHero = () => {
  return (
    <div className="flex flex-col gap-y-5 text-center">
      <h1 className="font-sans text-[56px] font-bold tracking-[-1.12px] text-black">
        COME TOGETHER
      </h1>
      <div className="flex justify-center">
        <div className="w-[500px]">
          <p className="font-sans text-[20px] font-normal leading-[30px] text-[#010D3E]">
            We can’t build our vision alone.
          </p>
          <p className="font-sans text-[20px] font-normal leading-[30px] text-[#010D3E]">
            Take a look below for your new favorite job.
          </p>
        </div>
      </div>
    </div>
  );
};

import * as React from "react";

export const CareerHero = () => {
  return (
    <div className="flex flex-col gap-y-5 text-center">
      <h1 className="font-sans text-[32px] font-bold leading-[36px] tracking-[-1.12px] text-black xl:text-[56px] xl:leading-[60px]">
        COME TOGETHER
      </h1>
      <div className="flex justify-center">
        <div className="w-[500px]">
          <p className="font-sans text-[16px] font-normal leading-[24px] text-[#010D3E] xl:text-[20px] xl:leading-[30px]">
            We can’t build our vision alone.
          </p>
          <p className="font-sans text-[16px] font-normal leading-[24px] text-[#010D3E] xl:text-[20px] xl:leading-[30px]">
            Take a look below for your new favorite job.
          </p>
        </div>
      </div>
    </div>
  );
};

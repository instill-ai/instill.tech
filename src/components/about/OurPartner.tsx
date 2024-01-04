import * as React from "react";

export const OurPartner = () => {
  return (
    <div className="w-full] my-10 flex flex-col space-y-20">
      <div className="flex flex-col p-2 xl:flex-row xl:p-0">
        <div className="mb-10 w-full text-left xl:mb-0 xl:w-1/2">
          <p className="font-mono text-[24px] font-medium text-gray-950 xl:text-[48px]">
            Partnerships
          </p>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <a
              href="https://numbersprotocol.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-[180px] w-auto items-center justify-center border border-b-0 border-r-0 p-4">
                <img
                  src={"images/social/number-protocol.svg"}
                  alt=""
                  className="mx-auto my-auto h-16"
                />
              </div>
            </a>
            <a
              href="https://huggingface.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-[180px] w-auto items-center justify-center border border-b-0 p-4 xl:border-r-0">
                <img
                  src={"images/social/huggingface.svg"}
                  alt=""
                  className="h-16"
                />
              </div>
            </a>

            <a
              href="https://unify.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border border-b-0 p-4">
                <img
                  src="images/social/unify.svg"
                  alt=""
                  className="h-[180px]"
                />
              </div>
            </a>

            <a
              href="https://infuseai.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border border-b-0 p-4 xl:border-r-0">
                <img
                  src="images/social/infuse-ai.svg"
                  alt=""
                  className="h-16"
                />
              </div>
            </a>

            <a
              href="https://www.nvidia.com/en-us/startups/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border border-b-0 p-4 xl:border-r-0">
                <img src="images/social/nvidia.svg" alt="" className="h-16" />
              </div>
            </a>

            <a
              href="https://aws.amazon.com/activate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border p-4">
                <img src="images/social/aws.svg" alt="" className="h-16" />
              </div>
            </a>

            <a
              href="https://startup.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border border-r-0 p-4">
                <img src="images/social/google.svg" alt="" className="h-16" />
              </div>
            </a>

            <a
              href="https://www.ntu.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border">
                <img
                  src="images/social/national-tiwan.svg"
                  alt=""
                  className="h-[180px]"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 xl:flex-row xl:p-0">
        <div className="mb-10 w-full text-left xl:mb-0 xl:w-1/2">
          <p className="font-mono text-[24px] font-medium text-gray-950 xl:text-[48px]">
            Investors
          </p>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <a href="https://rtp.vc/" target="_blank" rel="noopener noreferrer">
              <div className="flex h-[180px] w-auto items-center justify-center border border-r-0 p-4 xl:border-b-0">
                <img
                  src={"images/social/rtp-global.svg"}
                  alt=""
                  className="mx-auto my-auto h-16"
                />
              </div>
            </a>

            <a
              href="https://lunar.vc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-[180px] w-auto items-center justify-center border p-4 xl:border-r-0">
                <img
                  src={"images/social/lunar-ventures.svg"}
                  alt=""
                  className="h-16"
                />
              </div>
            </a>

            <a
              href="https://www.hiveventures.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border p-4">
                <img
                  src="images/social/hive-ventures.svg"
                  alt=""
                  className="h-[180px]"
                />
              </div>
            </a>

            <a
              href="https://cornerstonevc.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center border p-4">
                <img
                  src="images/social/cornerstonevc.svg"
                  alt=""
                  className="h-[180px]"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

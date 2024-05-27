import * as React from "react";

export const OurPartner = () => {
  return (
    <div className="w-full] mt-4 flex flex-col space-y-[48px]">
      <div className="flex flex-col rounded-sm bg-[#FFFFFF99] bg-opacity-80 p-4 shadow-lg backdrop-blur-sm">
        <div className="mb-6 w-full text-center">
          <p className="font-sans text-[24px] font-normal leading-9 text-semantic-fg-secondary">
            Partnerships
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 xl:grid-cols-4">
            <a
              href="https://numbersprotocol.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-[180px] w-auto items-center justify-center p-4">
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
              <div className="flex h-[180px] w-auto items-center justify-center">
                <img
                  src={"images/social/huggingface.svg"}
                  alt=""
                  className="h-16"
                />
              </div>
            </a>

            <a
              href="https://ukri.frontify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center p-4">
                <img
                  src="images/social/innovate_UK_horizontal.png"
                  alt=""
                  className="h-12"
                />
              </div>
            </a>

            <a
              href="https://infuseai.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center p-4">
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
              <div className="my-auto flex h-[180px] w-auto items-center justify-center p-4">
                <img src="images/social/nvidia.svg" alt="" className="h-16" />
              </div>
            </a>

            <a
              href="https://aws.amazon.com/activate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center p-4">
                <img src="images/social/aws.svg" alt="" className="h-16" />
              </div>
            </a>

            <a
              href="https://startup.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center p-4">
                <img src="images/social/google.svg" alt="" className="h-16" />
              </div>
            </a>

            <a
              href="https://www.ntu.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="my-auto flex h-[180px] w-auto items-center justify-center">
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
      <div className="flex flex-col rounded-sm bg-[#FFFFFF99] bg-opacity-80 p-4 shadow-lg backdrop-blur-sm">
        <div className="mb-6 w-full text-center">
          <p className="font-sans text-[24px] font-normal leading-9 text-semantic-fg-secondary">
            Backed by
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 xl:grid-cols-4">
            <a href="https://rtp.vc/" target="_blank" rel="noopener noreferrer">
              <div className="flex h-[180px] w-auto items-center justify-center p-4">
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
              <div className="flex h-[180px] w-auto items-center justify-center p-4">
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
              <div className="my-auto flex h-[180px] w-auto items-center justify-center p-4">
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
              <div className="my-auto flex h-[180px] w-auto items-center justify-center p-4">
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

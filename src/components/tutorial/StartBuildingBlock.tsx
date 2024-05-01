import React from "react";
import { ContentContainer } from "../ui";
import { Button, Logo } from "@instill-ai/design-system";

export const StartBuildingBlock = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/images/articles/glow.png")' }}
      className="rounded-b-sm bg-cover bg-no-repeat pb-16"
    >
      <ContentContainer margin="my-[20px]" contentMaxWidth="max-w-[1127px]">
        <div className="flex flex-col gap-y-5 rounded-sm bg-[#FFFFFF99] p-7 text-center shadow-lg">
          <div className="flex justify-center">
            <Logo variant="colourLogomark" width={32} />
          </div>
          <p className="font-mono text-[16px] leading-5">
            Create an account and start building with Instill
          </p>
          <div className="flex flex-row justify-center space-x-2">
            {/* <div className="text-center"> */}
            <Button variant="primary" size="lg" className="mb-2 xl:mb-0">
              Get Started
            </Button>
            {/* </div> */}
            {/* <div className="text-center"> */}
            <Button variant="secondaryGrey" size="lg" className="mb-2 xl:mb-0">
              Contact Sales
            </Button>
            {/* </div> */}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

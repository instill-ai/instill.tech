import * as React from "react";
import { CommonCtaButton } from "../ui";

export const SelfHost = () => {
  return (
    <div className="my-20 flex flex-col-reverse xl:my-10 xl:flex-row">
      <div>
        <CommonCtaButton
          withArrow={true}
          link={"/"}
          text="Self-host Instill Core"
          position="xl:hidden block w-full justify-center"
        />
      </div>
      <div className="w-full xl:w-[42%]">
        <img src={"/images/self-host-cube.svg"} alt="" />
      </div>

      <div className="my-auto w-full space-y-6 xl:w-[58%]">
        <p className="font-sans text-[42px] font-semibold">
          Want to self-host?
        </p>
        <p className="font-sans text-[24px] font-normal text-semantic-fg-secondary">
          You can self-host Instill VDP and Instill Model via Instill Core. It
          provides an open-source AI infrastructure tailored for unstructured
          data.
        </p>
        <div className="mx-auto hidden xl:block">
          <CommonCtaButton
            withArrow={true}
            link={"/docs/v0.6.0-alpha/core/deployment"}
            text="Self-host Instill Core"
          />
        </div>
      </div>
    </div>
  );
};

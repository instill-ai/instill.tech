import * as React from "react";
import { CommonCtaButton } from "../ui";
import Slide from "./Slide";

export const SelfHost = () => {
  return (
    <div className="my-20 flex flex-col-reverse xl:my-10 xl:flex-row">
      <Slide>
        <div>
          <CommonCtaButton
            withArrow={true}
            link={"/"}
            text="Self-host Instill Core"
            position="xl:hidden block w-full justify-center"
          />
        </div>
      </Slide>
      <div className="w-full xl:w-[42%]">
        <Slide>
          <img src={"/images/self-host-cube.svg"} alt="" />
        </Slide>
      </div>

      <div className="my-auto w-full space-y-6 xl:w-[58%]">
        <Slide>
          <p className="font-sans text-[42px] font-semibold">
            Want to self-host?
          </p>
        </Slide>
        <Slide>
          <p className="font-sans text-[24px] font-normal text-semantic-fg-secondary">
            You can self-host Instill VDP and Instill Model via Instill Core. It
            provides an open-source AI infrastructure tailored for unstructured
            data.
          </p>
        </Slide>
        <Slide>
          <div className="mx-auto hidden xl:block">
            <CommonCtaButton
              withArrow={true}
              link={"/docs/v0.6.0-alpha/core/deployment"}
              text="Self-host Instill Core"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

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
      <div className="w-full xl:w-[45%]">
        <img src={"/images/self-host-cube.svg"} alt="" />
      </div>

      <div className="my-auto w-full space-y-10 xl:w-[55%]">
        <div className="mx-auto">
          <p className="font-sans text-[36px] font-semibold">
            Want to self-host?
          </p>
        </div>
        <div className="mx-auto">
          <p className="font-sans text-[20px] font-normal">
            You have the option to self-host Instill Core locally using Instill
            CLI, Docker Compose, Kubernetes with Helm, and more. It serves as a
            turnkey solution for developing your AI application on your own
            infrastructure.
          </p>
        </div>

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

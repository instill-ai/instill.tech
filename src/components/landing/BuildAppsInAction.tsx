import * as React from "react";
import { CommonCtaButton, SectionHeader, SectionLabel } from "../ui";

export const BuildAppsInAction = () => {
  return (
    <div className="flex flex-col bg-instillGrey90 py-20">
      <div className="mb-2 flex flex-col">
        <SectionLabel
          text="Build apps in action"
          position="mr-auto"
          marginBottom="mb-8"
          textClass="!text-white"
        />
        <SectionHeader
          header="Power your apps with versatile AI pipelines"
          headerWidth="w-full !leading-[60px] !text-[56px] !font-sans word-spacing-normal"
          headerTextColor="text-white"
          marginBottom="mb-4"
        />
        <p className="text-[24px] font-light text-white">
          Empower your applications by integrating AI pipelines created through
          Instill Versatile Data Pipeline (VDP), which effortlessly links to
          various unstructured data types. Easily convert your data with
          pre-designed AI models, while ensuring reliability through a single
          run and tracking outputs at every stage.
        </p>

        <div className="my-8">
          <CommonCtaButton withArrow={true} link={"/docs"} text="Learn more" />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={"/images/vdp-in-action.svg"}
          alt=""
          className="hidden xl:block"
        />
        <img
          src={"/images/vdp-in-action-mobile.svg"}
          alt=""
          className="block w-full xl:hidden"
        />
      </div>
      <div className="mt-20 flex flex-col-reverse gap-x-10 xl:flex-row">
        <div className="w-full xl:w-1/2">
          {/* <img
            src={"/images/vdp-in-action-2.svg"}
            alt=""
            className="my-10 hidden xl:my-0 xl:block"
          /> */}
          <img
            src={"/images/vdp-in-action-2-mobile.svg"}
            alt=""
            className="my-10 xl:my-0"
          />
          <CommonCtaButton
            withArrow={true}
            link={"/"}
            text="Explore Instill Hub"
            position="xl:hidden block my-10 mx-auto w-full justify-center"
          />
        </div>

        <div className="w-full space-y-5 xl:w-1/2 xl:text-left">
          <p className="font-sans text-[24px] font-semibold text-white xl:text-[42px]">
            The home for AI builders
          </p>

          <p className="font-sans text-[24px] font-light text-white">
            Welcome to Instill Hub, your destination for creating, sharing, and
            exploring a wide range of versatile AI pipelines. Share crafted
            pipelines with the community, providing a platform to showcase your
            work to a wider audience and stimulate collaborative innovation.
          </p>

          <div className="hidden xl:block">
            <CommonCtaButton
              withArrow={true}
              link={"https://console.instill.tech/hub"}
              text="Explore Instill Hub"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

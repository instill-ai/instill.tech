import * as React from "react";
import { CommonCtaButton, SectionHeader, SectionLabel } from "../ui";
import { CommunityBlock } from "./Community/CommunityBlock";

export const BuildAppsInAction = () => {
  return (
    <div className="flex flex-col bg-instillGrey90 py-20">
      <div className="mb-10 flex flex-col">
        <SectionLabel
          text="Build apps in action"
          position="mr-auto"
          marginBottom="mb-2.5"
        />
        <SectionHeader
          header="Power your apps with AI pipelines"
          headerWidth="w-full"
          headerTextColor="text-white"
          marginBottom="mb-4"
        />
        <p className="text-[16px] font-normal  text-white xl:w-7/12">
          Empower your applications with AI pipelines that seamlessly connect to
          a variety of unstructured data types. Effortlessly Transform your data
          using ready-to-use AI models, and ensure the reliability of your
          pipelines with a single click, tracking output at every step.
        </p>

        <div className="my-6 xl:w-3/12">
          <CommonCtaButton
            withArrow={true}
            link={"/docs/v0.6.0-alpha/quickstart"}
            text="Learn more"
            position="w-full justify-center"
          />
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
          <img
            src={"/images/vdp-in-action-2.svg"}
            alt=""
            className="my-10 hidden xl:my-0 xl:block"
          />
          <img
            src={"/images/vdp-in-action-2-mobile.svg"}
            alt=""
            className="my-10 block xl:my-0 xl:hidden"
          />
          <CommonCtaButton
            withArrow={true}
            link={"/"}
            text="Explore Instill Hub"
            position="xl:hidden block my-10 mx-auto w-full justify-center"
          />
        </div>

        <div className="w-full space-y-6 xl:w-1/2 xl:text-left">
          <p className="font-sans text-[24px] font-semibold text-white xl:text-[36px]">
            The home for AI builders
          </p>

          <p className="font-sans  text-[16px] font-normal text-white">
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

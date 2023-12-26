import React from "react";
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
        <p className="text-lg font-normal text-white xl:w-7/12">
          Empower your applications with AI pipelines that seamlessly connect to
          a variety of unstructured data types. Effortlessly Transform your data
          using ready-to-use AI models, and ensure the reliability of your
          pipelines with a single click, tracking output at every step.
        </p>

        <div className="my-6 xl:w-3/12">
          <CommonCtaButton withArrow={true} link={"/"} text="Learn more" />
        </div>
      </div>
      <div>
        <img src={"/images/vdp-in-action.svg"} alt="" />
      </div>

      <div className="my-20 flex flex-row gap-x-10">
        <div className="w-1/2">
          <img src={"/images/vdp-in-action-2.svg"} alt="" />
        </div>

        <div className="w-1/2 space-y-6">
          <p className="font-sans text-[36px] font-semibold text-white">
            The home for AI builders
          </p>

          <p className="font-sans text-lg font-normal text-white">
            Welcome to Instill Hub, your destination for creating, sharing, and
            exploring a wide range of versatile AI pipelines. Share crafted
            pipelines with the community, providing a platform to showcase your
            work to a wider audience and stimulate collaborative innovation.
          </p>

          <CommonCtaButton
            withArrow={true}
            link={"/"}
            text="Explore Instill Hub"
          />
        </div>
      </div>
    </div>
  );
};

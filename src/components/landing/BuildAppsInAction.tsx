import * as React from "react";
import { CommonCtaButton, SectionHeader, SectionLabel } from "../ui";
import Slide from "./Slide";

export const BuildAppsInAction = () => {
  return (
    <div className="flex flex-col bg-instillGrey90 py-20">
      <div className="mb-2 flex flex-col">
        <Slide>
          <div className="flex flex-row">
            <SectionLabel
              text="Build apps in action"
              position="mr-auto !flex !w-auto"
              marginBottom="mb-8"
              textClass="!text-semantic-success-bg"
            />
          </div>
        </Slide>
        <Slide>
          <SectionHeader
            header="Power your apps with versatile AI pipelines"
            headerWidth="w-full xl:!leading-[60px] !leading-normal xl:!text-[56px] !text-[24px] !font-sans word-spacing-normal"
            headerTextColor="text-white"
            marginBottom="mb-4"
          />
        </Slide>
        <Slide>
          <p className="text-[14px] font-light leading-6 text-white xl:text-[24px] xl:leading-9">
            Empower your applications by integrating AI pipelines created
            through Instill Versatile Data Pipeline (VDP), which effortlessly
            links to various unstructured data types. Easily convert your data
            with pre-designed AI models, while ensuring reliability through a
            single run and tracking outputs at every stage.
          </p>
        </Slide>

        <div className="my-8">
          <Slide>
            <CommonCtaButton
              withArrow={true}
              link={"/docs"}
              text="Learn more"
            />
          </Slide>
        </div>
      </div>
      <Slide>
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
      </Slide>
      {/* <Slide> */}
      <div className="mt-20 flex flex-col-reverse gap-x-10 xl:flex-row">
        {/* <Slide> */}
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
        {/* </Slide> */}

        <div className="w-full space-y-5 xl:w-1/2 xl:text-left">
          <Slide>
            <p className="font-sans text-[24px] font-semibold text-white xl:text-[42px]">
              The home for AI builders
            </p>
          </Slide>
          <Slide>
            <p className="font-sans text-[14px] font-light leading-6 text-white xl:text-[24px] xl:leading-9">
              Welcome to Instill Hub, your destination for creating, sharing,
              and exploring a wide range of versatile AI pipelines. Share
              crafted pipelines with the community, providing a platform to
              showcase your work to a wider audience and stimulate collaborative
              innovation.
            </p>
          </Slide>

          <Slide>
            <div className="hidden xl:block">
              <CommonCtaButton
                withArrow={true}
                link={"https://instill.tech/hub"}
                text="Explore Instill Hub"
              />
            </div>
          </Slide>
        </div>
      </div>
      {/* </Slide> */}
    </div>
  );
};

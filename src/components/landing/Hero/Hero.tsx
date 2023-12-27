import {
  ExploreMoreScrollButton,
  ExploreMoreScrollButtonProps,
} from "./ExploreMoreScrollButton";
import { HeroAnimation } from "./HeroAnimation";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { GitHubCtaButton } from "./GitHubCtaButton";
import { ConsoleCtaButton } from "./ConsoleCtaButton";
import { InstillHero } from "../InstillHero";
import { Jumbotron } from "../jumbotron";
import { Icons, Tag } from "@instill-ai/design-system";

export type HeroProps = {
  scrollHandler: ExploreMoreScrollButtonProps["scrollHandler"];
};

export const Hero = ({ scrollHandler }: HeroProps) => {
  return (
    <div className="flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      <div className="flex flex-col xl:mb-[40px] xl:flex-row xl:gap-x-12 xl:gap-y-0">
        <div className="mt-10 flex flex-col xl:mt-0 xl:w-[50%]">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-0" />
          <div className="my-7 flex flex-col">
            <div className="mb-2 flex w-full flex-wrap justify-center gap-x-3 gap-y-2 xl:justify-start">
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.Type02 className="h-3 w-3 stroke-instillGrey95" />
                Text
              </Tag>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.Image01 className="h-3 w-3 stroke-instillGrey95" />
                Image
              </Tag>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.Speaker01 className="h-3 w-3 stroke-instillGrey95" />
                Audio
              </Tag>
              <div className="hidden xl:block">
                <Tag
                  variant="darkYellow"
                  className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                >
                  <Icons.VideoRecorder className="h-3 w-3 stroke-instillGrey95" />
                  Video
                </Tag>
              </div>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                PDF
              </Tag>
              <div className="hidden xl:block">
                <Tag
                  variant="darkYellow"
                  className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                >
                  <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                  JSON
                </Tag>
              </div>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                CSV
              </Tag>
              <div className="hidden xl:block">
                <Tag
                  variant="darkYellow"
                  className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                >
                  <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                  Parquet
                </Tag>
              </div>
              <Tag
                variant="darkYellow"
                className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
              >
                <div className="h-2 w-2 rounded-lg bg-black"></div>
                More
              </Tag>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-5 xl:gap-y-0">
            <ConsoleCtaButton position="w-full justify-center xl:w-auto" />

            <p className="my-auto font-mono text-[14px] text-instillNeonBlue">
              Free, until you’re ready to upgrade
            </p>
          </div>
        </div>
        <div className="mb-20 mt-14 xl:my-auto xl:mt-0 xl:w-[50%]">
          <Jumbotron />
        </div>
      </div>
      {/* <div className="hidden xl:flex">
        <ExploreMoreScrollButton scrollHandler={scrollHandler} />
      </div> */}
    </div>
  );
};

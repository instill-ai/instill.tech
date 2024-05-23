import { ExploreMoreScrollButtonProps } from "./ExploreMoreScrollButton";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { ConsoleCtaButton } from "./ConsoleCtaButton";
import { Jumbotron } from "../jumbotron";
import { Frameworks } from "./Frameworks";

export type HeroProps = {
  scrollHandler: ExploreMoreScrollButtonProps["scrollHandler"];
};

export const Hero = () => {
  return (
    <div className="flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      {/* <Slide> */}
      <div className="flex flex-col xl:mb-[40px] xl:flex-row xl:gap-x-12 xl:gap-y-0">
        <div className="mt-[60px] flex flex-col md:mt-10 lg:mt-10 xl:mt-0 xl:w-[50%] xs:mt-10">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-0" />
          <Frameworks />
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-5 xl:gap-y-0">
              <ConsoleCtaButton position="w-full justify-center xl:w-auto" />
              <p className="my-auto font-mono text-[14px] text-instillNeonBlue">
                Free, until you’re ready to upgrade
              </p>
            </div>
          </div>
        </div>
        <div className="mb-20 mt-14 xl:my-auto xl:mt-0 xl:w-[50%]">
          <Jumbotron />
        </div>
      </div>
      {/* </Slide> */}
    </div>
  );
};

import { SectionHeader, SectionLabel } from "@/components/ui";
import { CommunityBlock } from "./CommunityBlock";
import { StayInTheLoop } from "./StayInTheLoop";
import Slide from "../Slide";

export const Community = () => {
  return (
    <div className="flex flex-col bg-instillGrey90 py-20">
      <div className="mb-10 flex flex-col xl:mb-[100px]">
        <Slide>
          <div className="flex flex-row">
            <SectionLabel
              text="follow us"
              position="mr-auto"
              marginBottom="mb-8"
              textClass="!text-semantic-success-bg"
            />
          </div>
        </Slide>
        <Slide>
          <SectionHeader
            header="Built by and for the community"
            headerWidth="w-full"
            headerTextColor="text-white"
            marginBottom="mb-6"
          />
        </Slide>
        <Slide>
          <p className="text-lg font-normal text-white xl:w-full">
            Join 300+ Data/AI practitioners discussing Instill AI in action and
            help build the modern backbone for all AI needs.
          </p>
        </Slide>
      </div>
      <Slide>
        <div className="grid-col-1 grid gap-y-5 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-0">
          <CommunityBlock
            name="GitHub"
            title="Follow Instill AI on GitHub"
            linkText="Go to Community"
            link="https://github.com/instill-ai/community"
          />
          <CommunityBlock
            name="Discord"
            title="Join the thread on Discord"
            linkText="Join the community"
            link={process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK || "/"}
          />
          <CommunityBlock
            name="Twitter"
            title="Keep updated on X"
            linkText="Follow us"
            link="https://twitter.com/instill_tech"
          />
        </div>
      </Slide>
      <Slide>
        <div>
          <StayInTheLoop isDark={true} />
        </div>
      </Slide>
    </div>
  );
};

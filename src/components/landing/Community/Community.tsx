import { SectionLabel } from "@/components/ui";
import { CommunityBlock } from "./CommunityBlock";

export const Community = () => {
  return (
    <div className="flex flex-col bg-instillGrey90">
      <div className="mb-10 flex flex-col xl:mb-[200px]">
        <SectionLabel
          text="follow us"
          position="mr-auto"
          marginBottom="mb-2.5"
        />
        <h2 className="mb-5 font-mono text-4xl font-medium text-white">
          Built by and for the community
        </h2>
        <p className="text-lg font-normal text-white xl:w-7/12">
          Join 100+ Data/AI practitioners discussing VDP in action and help
          building the modern ETL infrastructure for unstructured visual data.
        </p>
      </div>
      <div className="grid-col-1 grid gap-y-5 xl:grid-cols-3 xl:gap-y-0 xl:gap-x-6">
        <CommunityBlock
          name="GitHub"
          title="Star VDP on GitHub"
          linkText="Star VDP"
          link=""
        />
        <CommunityBlock
          name="Discord"
          title="Join the discussion on Dicord"
          linkText="Join the community"
          link=""
        />
        <CommunityBlock
          name="Twitter"
          title="Keep updated on Twitter"
          linkText="Follow us"
          link=""
        />
      </div>
    </div>
  );
};

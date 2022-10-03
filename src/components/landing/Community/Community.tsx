import cn from "clsx";
import SectionLabel from "../SectionLabel";
import CommunityBlock from "./CommunityBlock";

export type CommunityProps = {
  marginBottom?: string;
};

const Community = ({ marginBottom }: CommunityProps) => {
  return (
    <div className={cn("flex flex-col bg-instillGrey90 p-10", marginBottom)}>
      <div className="mb-[200px] flex  flex-col">
        <SectionLabel
          text="follow us"
          position="mr-auto"
          marginBottom="mb-2.5"
        />
        <h2 className="mb-5 font-mono text-4xl font-medium text-white">
          Built by and for the community
        </h2>
        <p className="w-7/12 text-lg font-normal text-white">
          Join 100+ Data/AI practitioners discussing VDP in action and help
          building the modern ETL infrastructure for unstructured visual data.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-6">
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

export default Community;

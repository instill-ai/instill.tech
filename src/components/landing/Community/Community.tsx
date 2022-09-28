import cn from "clsx";
import CommunityBlock from "./CommunityBlock";

export type CommunityProps = {
  marginBottom?: string;
};

const Community = ({ marginBottom }: CommunityProps) => {
  return (
    <div className={cn("flex flex-col", marginBottom)}>
      <div className="mb-10 flex flex-col">
        <div className="font-sans text-lg font-normal uppercase text-instillBlue50">
          Follow us
        </div>
        <h2 className="mb-5 font-mono text-4xl font-medium text-instillGrey90">
          Built by the community
        </h2>
        <p className="text-lg font-normal text-instillGrey90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo amet
          purus mattis ac, tempus tellus.
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
          title="Join our Dicord"
          linkText="Join the community"
          link=""
        />
        <CommunityBlock
          name="GitHub"
          title="Keep updated on Twitter"
          linkText="Follow us"
          link=""
        />
      </div>
    </div>
  );
};

export default Community;

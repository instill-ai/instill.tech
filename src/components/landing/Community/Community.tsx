import cn from "clsx";
import CommunityBlock from "./CommunityBlock";

export type CommunityProps = {
  marginBottom?: string;
};

const Community = ({ marginBottom }: CommunityProps) => {
  return (
    <div className={cn("flex flex-col", marginBottom)}>
      <div className="flex flex-col mb-10">
        <div className="uppercase font-sans font-normal text-lg text-instillBlue50">
          Follow us
        </div>
        <h2 className="font-mono font-medium text-4xl text-instillGrey90 mb-5">
          Built by the community
        </h2>
        <p className="font-normal text-lg text-instillGrey90">
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

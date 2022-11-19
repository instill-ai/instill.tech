import cn from "clsx";

import { SectionHeader, SectionLabel } from "@/components/ui";
import { ValueBlock } from "./ValueBlock";

export type OurValueProps = {
  marginBottom?: string;
};

export const OurValue = ({ marginBottom }: OurValueProps) => {
  return (
    <div className={cn("flex w-full flex-col", marginBottom)}>
      <SectionLabel
        text="Why we started"
        position="mr-auto"
        marginBottom="mb-2.5"
      />
      <SectionHeader
        header="Our Value"
        headerWidth="w-full"
        headerFontSize="text-3xl"
        headerTextColor="text-black"
        marginBottom="mb-10"
      />
      <div className="grid grid-cols-1 gap-y-10 xl:grid-cols-2 xl:gap-y-0">
        <ValueBlock
          number={1}
          title="User obsession"
          description="We succeed only when our customers succeed. Learning 
            what can really help our customers and delivering the value they 
            need will always be Instill’s highest interest."
        />
        <ValueBlock
          number={2}
          title="High-performing company with shared values"
          description="We always deliver more than expected. To achieve that, 
            we are the optimisers obsessively chasing intrinsic efficiency 
            and effectiveness."
        />
      </div>
    </div>
  );
};

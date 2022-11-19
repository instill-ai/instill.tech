import cn from "clsx";

import { SectionHeader, SectionLabel } from "@/components/ui";

export type OurCompanyProps = {
  marginBottom?: string;
};

export const OurCompany = ({ marginBottom }: OurCompanyProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col bg-instillGrey05 p-10 shadow-instill-solid-10 xl:shadow-instill-solid-20",
        marginBottom
      )}
    >
      <SectionLabel
        text="Why we started"
        position="mr-auto"
        marginBottom="mb-2.5"
      />
      <SectionHeader
        header="Our Company"
        headerWidth="w-full"
        headerFontSize="text-3xl"
        headerTextColor="text-black"
        marginBottom="mb-10"
      />
      <p className="mb-4 text-instillGrey95 text-instill-body-normal">
        Instill AI, founded in 2020 (June 11th 2020, to be more specific),
        provides no-/low-code tools to convert unstructured visual data to
        meaningful structured representations. Users can integrate our service
        into their data stack, and start tapping into the wealth of their visual
        data and benefit from Vision AI in a snap.
      </p>
      <p className="text-instillGrey95 text-instill-body-normal">
        We are a small and ambitious team of passionate engineers/researchers
        sharing an unconventional culture fused by DevOps, MLOps and academic
        research lab. We are hands-on and love to automate everything. We care
        about our products and deliver to the highest standard.
      </p>
    </div>
  );
};

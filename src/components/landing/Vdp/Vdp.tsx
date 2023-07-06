import { forwardRef } from "react";
import cn from "clsx";
import Image from "next/image";
import { VdpLogo } from "@instill-ai/design-system";

import { SectionHeader, SectionLabel } from "@/components/ui";
import { VdpFlow } from "./VdpFlow";
import { VdpAnimation } from "./VdpAnimation";
import { useElementDimension } from "@/hooks/useElementDimension";

export type VdpProps = {
  marginBottom?: string;
};

export const Vdp = forwardRef<HTMLDivElement, VdpProps>(
  ({ marginBottom }, ref) => {
    const [containerRef, containerDimension] = useElementDimension();

    return (
      <div
        className={cn("flex flex-col py-20", marginBottom)}
        ref={containerRef}
      >
        <div className="mb-10 flex flex-col" ref={ref}>
          <SectionLabel
            text="Versatile data pipeline"
            position="mr-auto"
            marginBottom="mb-2.5"
          />
          <SectionHeader
            header="Fastest way to build end-to-end unstructured data pipelines"
            headerWidth="w-full xl:w-7/12"
            headerTextColor="text-instillGrey90"
            subElement={
              <div className="hidden w-full xl:my-auto xl:flex">
                <VdpLogo
                  variant="expand"
                  width={340}
                  className="my-auto ml-auto"
                />
              </div>
            }
          />
        </div>
        <div className="mb-10 flex">
          <VdpLogo
            variant="expand"
            width={
              containerDimension
                ? containerDimension.width > 360
                  ? 320
                  : containerDimension.width * 0.8
                : 0
            }
            className="my-auto mr-auto xl:hidden"
          />
        </div>
        <VdpFlow marginBottom="mb-5" />
        <div className="hidden xl:flex">
          <VdpAnimation />
        </div>
        <div className="flex xl:hidden">
          <Image
            src="/images/vdp-mobile.svg"
            width={1128}
            height={612}
            alt="VDP flow source icon"
            className="w-full"
          />
        </div>
      </div>
    );
  }
);

Vdp.displayName = "Vdp";

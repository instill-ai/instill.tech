import { forwardRef, useRef, useState } from "react";
import cn from "clsx";
import Image from "next/future/image";
import { VdpLogo } from "@instill-ai/design-system";

import { useRefPosition } from "@/hooks/useRefPosition";
import { SectionLabel } from "@/components/ui";
import { VdpFlow } from "./VdpFlow";
import { VdpAnimation, VdpAnimationProps } from "./VdpAnimation";

export type VdpProps = {
  marginBottom?: string;
};

export const Vdp = forwardRef<HTMLDivElement, VdpProps>(
  ({ marginBottom }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerDimension = useRefPosition(containerRef, {
      listenWindowResize: true,
    });

    return (
      <div
        className={cn("flex flex-col py-10", marginBottom)}
        ref={containerRef}
      >
        <div className="mb-10 flex flex-col" ref={ref}>
          <SectionLabel
            text="Visual data preperation"
            position="mr-auto"
            marginBottom="mb-2.5"
          />
          <div className="flex flex-row">
            <h2 className="w-full font-mono text-4xl text-instillGrey90 xl:w-7/12 xl:text-5xl">
              Fastest way to build end-to-end visual data ETL pipelines
            </h2>
            <div className="hidden w-5/12 xl:flex">
              <VdpLogo type="expand" width={340} position="ml-auto my-auto" />
            </div>
          </div>
        </div>
        <div className="mb-10 flex">
          <VdpLogo
            type="expand"
            width={
              containerDimension
                ? containerDimension.width > 360
                  ? 320
                  : containerDimension.width * 0.8
                : 0
            }
            position="mr-auto my-auto xl:hidden"
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

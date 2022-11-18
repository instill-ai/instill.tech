import cn from "clsx";
import Image from "next/future/image";
import { useRef } from "react";

import { CommonCtaButton, SectionHeader } from "@/components/ui";
import { SectionLabel } from "@/components/ui";
import { useRefPosition } from "@/hooks/useRefPosition";

export type NoCodeInterfaceProps = {
  marginBottom?: string;
};

export const NoCodeInterface = ({ marginBottom }: NoCodeInterfaceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerDimension = useRefPosition(containerRef, {
    listenWindowResize: true,
  });

  return (
    <div ref={containerRef} className={cn("flex flex-col py-20", marginBottom)}>
      <SectionLabel text="No-code interface" position="mr-auto mb-2.5" />
      <SectionHeader
        header="Unify all your visual data pipelines in one place"
        headerWidth="w-full xl:w-7/12"
        headerTextColor="text-instillGrey90"
        marginBottom="mb-10"
        subElement={
          <div className="flex w-full flex-col">
            <p className="mb-[45px] text-lg font-normal text-instillGrey90">
              The no-code interface helps provides a unified, clean and
              intuitive user experience of VDP.
            </p>
            <CommonCtaButton
              position="mr-auto"
              link="https://demo.instill.tech/"
              withArrow={true}
              text="Learn more"
            />
          </div>
        }
      />
      <Image
        src="/images/no-code-interface.png"
        width={containerDimension ? containerDimension.width : 0}
        height={containerDimension ? containerDimension.width * 0.54 : 0}
        sizes="100vw"
        alt="The console screenshot of VDP"
      />
    </div>
  );
};

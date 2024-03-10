import cn from "clsx";
import Image from "next/image";

import { CommonCtaButton, SectionHeader } from "@/components/ui";
import { SectionLabel } from "@/components/ui";
import { useElementDimension } from "@/hooks/useElementDimension";

export type NoCodeInterfaceProps = {
  marginBottom?: string;
};

export const NoCodeInterface = ({ marginBottom }: NoCodeInterfaceProps) => {
  const [containerRef, containerDimension] = useElementDimension();

  return (
    <div ref={containerRef} className={cn("flex flex-col py-20", marginBottom)}>
      <SectionLabel
        text="Our Open source FOUNDATION"
        position="mr-auto mb-2.5"
      />
      <SectionHeader
        header="Drag-and-Drop No-code Console"
        headerWidth="w-full"
        headerTextColor="text-instillNeonBlue"
        marginBottom="mb-10"
      />
      <div className="w-full pr-2.5 xl:pr-5">
        <div className="flex flex-col shadow-instill-solid-10-grey xl:shadow-instill-solid-20-grey">
          <div className="flex flex-row bg-instillGrey20 px-4 py-3">
            <div className="hidden flex-row gap-x-[10px] xs:flex">
              <div className="my-auto h-4 w-4 rounded-full bg-instillGrey30" />
              <div className="my-auto h-4 w-4 rounded-full bg-instillGrey30" />
              <div className="my-auto h-4 w-4 rounded-full bg-instillGrey30" />
            </div>
            <div className="flex flex-1">
              <div className="mx-auto flex w-8/12 bg-instillGrey05 py-[3px]">
                <p className="mx-auto font-sans text-xs font-normal text-instillGrey70">
                  www.instill.tech
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/images/no-code-interface.svg"
            width={containerDimension ? containerDimension.width : 0}
            height={containerDimension ? containerDimension.width * 0.54 : 0}
            sizes="100vw"
            alt="The console screenshot of Instill Core"
          />
        </div>
      </div>
    </div>
  );
};

import { VdpLogo } from "@instill-ai/design-system";
import cn from "clsx";
import Image from "next/future/image";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "../SectionLabel";
import VdpFlow from "./VdpFlow";

export type VdpProps = {
  marginBottom?: string;
};

const Vdp = ({ marginBottom }: VdpProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      setContainerWidth(containerRef.current.offsetWidth);
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  return (
    <div className={cn("flex flex-col py-10", marginBottom)} ref={containerRef}>
      <div className="mb-10 flex">
        <VdpLogo
          type="expand"
          width={containerWidth > 360 ? 320 : containerWidth * 0.8}
          position="mr-auto my-auto xl:hidden"
        />
      </div>
      <SectionLabel
        text="Visual data preperation"
        position="mr-auto"
        marginBottom="mb-2.5"
      />
      <div className="mb-[30px] flex flex-row">
        <h2 className="w-full font-mono text-4xl text-instillGrey90 md:w-7/12 xl:text-5xl">
          Fastest way to build end-to-end visual data ETL pipelines
        </h2>
        <div className="hidden w-5/12 xl:flex">
          <VdpLogo type="expand" width={340} position="ml-auto my-auto" />
        </div>
      </div>
      <VdpFlow marginBottom="mb-5" />
      <Image
        src="/images/vdp-flow.png"
        width={containerWidth}
        height={containerWidth * 0.54}
        sizes="100vw"
        alt="The flow of VDP"
      />
    </div>
  );
};

export default Vdp;

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
      console.log(containerRef.current.offsetWidth);
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  return (
    <div className={cn("flex flex-col py-10", marginBottom)} ref={containerRef}>
      <SectionLabel
        text="Visual data preperation"
        position="mr-auto"
        marginBottom="mb-2.5"
      />
      <div className="mb-[30px] flex flex-row">
        <h2 className="w-2/3 font-mono text-5xl text-instillGrey90">
          Fastest way to build end-to-end visual data ETL pipelines
        </h2>
        <VdpLogo type="expand" width={340} position="ml-auto" />
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

import Image from "next/future/image";
import { useEffect, useRef, useState } from "react";
import VdpArrowBlock from "../VdpArrowBlock";

export type VdpFlowProps = {};

const VdpFlow = ({}: VdpFlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blocksWidth, setBlockWidth] = useState<number[]>([]);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;

    // The arrow's width is 65px so in order to get the widht of the box we have
    // this function (a) + (a + 65) + (a + 65) = container's width

    const baseWidth = (containerWidth - 130) / 3;
    setBlockWidth([baseWidth, baseWidth + 65, baseWidth + 65]);
  }, []);

  return (
    <div className="flex flex-row" ref={containerRef}>
      <VdpArrowBlock
        title="Extract"
        description="Extract unstructured visual data from pre-built data sources"
        icon={
          <Image
            src="/images/vdp-flow-source.svg"
            width={70}
            height={63}
            alt="VDP flow source icon"
            className="-scale-x-100"
          />
        }
        width={blocksWidth[0] ? blocksWidth[0] : 0}
        color="#FFFCE3"
        zIndex={20}
      />
      <VdpArrowBlock
        title="Transform"
        description="Transform it into structured insights by Vision AI models"
        icon={
          <Image
            src="/images/vdp-flow-kernel.svg"
            width={65}
            height={42}
            alt="VDP flow source icon"
            className="-scale-x-100"
          />
        }
        width={blocksWidth[1] ? blocksWidth[1] : 0}
        color="#ECFFF0"
        zIndex={10}
        padding="pl-[95px]"
      />
      <VdpArrowBlock
        title="load"
        description="Load the transformed data into centralised warehouses, applications, or wherever you want"
        icon={
          <Image
            src="/images/vdp-flow-destination.svg"
            width={71}
            height={42}
            alt="VDP flow source icon"
            className="-scale-x-100"
          />
        }
        width={blocksWidth[2] ? blocksWidth[2] : 0}
        color="#F4FBFF"
        zIndex={5}
        padding="pl-[95px]"
      />
    </div>
  );
};

export default VdpFlow;

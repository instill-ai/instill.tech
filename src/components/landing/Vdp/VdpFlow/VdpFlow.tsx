import Image from "next/future/image";
import cn from "clsx";
import { useEffect, useRef, useState } from "react";
import { VdpArrowBlock } from "../VdpArrowBlock";

export type VdpFlowProps = {
  marginBottom?: string;
};

export const VdpFlow = ({ marginBottom }: VdpFlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blocksWidth, setBlocksWidth] = useState<number[]>([]);
  const [arrowWidth, setArrowWidth] = useState<number>(65);

  useEffect(() => {
    const updateBlocksWidth = () => {
      if (!containerRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;
      if (
        containerWidth >=
        parseInt(process.env.NEXT_PUBLIC_CONTENT_MAX_WIDTH || "1127") - 10
      ) {
        // The arrow's width is 65px so in order to get the width of the box we have
        // this function (a) + (a + 65) + (a + 65) = container's width
        // We need to prevent the most right arrow to exceed the boundary too, so we
        // need to further minus 65. The final function will be
        // (a) + (a + 65) + (a + 65) = container's width - 65
        const baseWidth = (containerWidth - 130 - 65) / 3;
        setArrowWidth(65);
        setBlocksWidth([baseWidth, baseWidth + 65, baseWidth + 65]);
      } else if (containerWidth < 360) {
        const baseWidth = containerWidth - 65;
        setArrowWidth(65);
        setBlocksWidth([baseWidth, baseWidth, baseWidth]);
      } else {
        const baseWidth = containerWidth - 65;
        setArrowWidth(65);
        setBlocksWidth([baseWidth, baseWidth, baseWidth]);
      }
    };

    updateBlocksWidth();
    window.addEventListener("resize", updateBlocksWidth);
    return () => {
      window.removeEventListener("resize", updateBlocksWidth);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden xl:flex-row",
        marginBottom
      )}
      ref={containerRef}
    >
      <VdpArrowBlock
        title="Extract"
        description="Extract unstructured data from pre-built data sources"
        icon={
          <Image
            src="/images/vdp-flow-source.svg"
            width={60}
            height={63}
            alt="VDP flow source icon"
            className="-scale-x-100"
          />
        }
        width={blocksWidth[0] ? blocksWidth[0] : 0}
        arrowWidth={arrowWidth}
        color="#FFFCE3"
        zIndex={20}
      />
      <VdpArrowBlock
        title="Transform"
        description="Transform it into meaningful data representations by AI"
        icon={
          <Image
            src="/images/vdp-flow-kernel.svg"
            width={60}
            height={42}
            alt="VDP flow source icon"
            className="-scale-x-100"
          />
        }
        width={blocksWidth[1] ? blocksWidth[1] : 0}
        arrowWidth={arrowWidth}
        color="#ECFFF0"
        zIndex={10}
        padding="xl:pl-[85px]"
      />
      <VdpArrowBlock
        title="load"
        description="Load the transformed data into wherever you want"
        icon={
          <Image
            src="/images/vdp-flow-destination.svg"
            width={60}
            height={42}
            alt="VDP flow source icon"
          />
        }
        width={blocksWidth[2] ? blocksWidth[2] : 0}
        arrowWidth={arrowWidth}
        color="#F4FBFF"
        zIndex={5}
        padding="xl:pl-[85px]"
      />
    </div>
  );
};

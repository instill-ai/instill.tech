import cn from "clsx";
import Image from "next/future/image";
import { useEffect, useRef, useState } from "react";
import { LearnMoreButton } from "@/components/ui";
import SectionLabel from "./SectionLabel";

export type NoCodeInterfaceProps = {
  marginBottom?: string;
};

const NoCodeInterface = ({ marginBottom }: NoCodeInterfaceProps) => {
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
    <div ref={containerRef} className={cn("flex flex-col", marginBottom)}>
      <SectionLabel text="No-code interface" position="mr-auto mb-2.5" />
      <div className="mb-10 flex flex-col xl:flex-row">
        <h2 className="mb-5 w-full font-mono text-4xl font-medium text-instillGrey90 xl:mb-0 xl:w-1/2">
          Unify all your visual data pipelines in one place
        </h2>
        <div className="flex w-full flex-col xl:w-1/2">
          <p className="mb-[45px] text-lg font-normal text-instillGrey90">
            The no-code interface helps provides a unified, clean and intuitive
            user experience of VDP.
          </p>
          <LearnMoreButton
            position="mr-auto"
            link="https://demo.instill.tech/"
          />
        </div>
      </div>
      <Image
        src="/images/no-code-interface.png"
        width={containerWidth}
        height={containerWidth * 0.54}
        sizes="100vw"
        alt="The console screenshot of VDP"
      />
    </div>
  );
};

export default NoCodeInterface;

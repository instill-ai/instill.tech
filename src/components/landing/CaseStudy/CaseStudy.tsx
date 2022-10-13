import { BlueprintContainer } from "@/components/ui";
import cn from "clsx";
import { useRef } from "react";

export type CaseStudyProps = {
  marginBottom?: string;
};

const CaseStudy = ({ marginBottom }: CaseStudyProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={parentRef}
      className={cn("h-[1000px] w-full bg-instillGrey90", marginBottom)}
    >
      <BlueprintContainer
        parentRef={parentRef}
        childrenRef={childrenRef}
        unitHeight={30}
        unitWidth={30}
      >
        <div
          ref={childrenRef}
          className="m-auto flex w-full max-w-[1127px] bg-white"
        >
          <div className="block h-[400px] w-full" />
        </div>
      </BlueprintContainer>
    </div>
  );
};

export default CaseStudy;

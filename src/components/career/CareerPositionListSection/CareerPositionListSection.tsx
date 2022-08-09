import { forwardRef } from "react";
import cn from "clsx";
import { OpenPositionList } from "./OpenPositionList";
import { PositionDetails } from "@/types/instill";

export type CareerPositionListSectionProps = {
  positions: PositionDetails[];
  marginBottom?: string;
};

const CareerPositionListSection = forwardRef<
  HTMLDivElement,
  CareerPositionListSectionProps
>(({ positions, marginBottom }, ref) => {
  return (
    <div
      className={cn("flex w-full flex-col bg-white py-20", marginBottom)}
      ref={ref}
    >
      <div className="mb-10 flex flex-col gap-y-5 px-4 md:px-0">
        <h2 className="instill-text-h2-fixed mx-auto text-instillGrey95">
          Open Roles
        </h2>
        <p className="text-cneter instill-text-body-fixed mx-auto text-center text-instillGrey95">
          We&#39;re on a mission to make Vision Al highly accessbile to
          everyone. Join us and make a dent in the universe!
        </p>
      </div>
      <OpenPositionList
        styleName="md:w-11/12 md:mx-auto"
        positions={positions}
      />
    </div>
  );
});

CareerPositionListSection.displayName = "CareerPositionListSection";

export default CareerPositionListSection;

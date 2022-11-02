import { PositionDetails } from "@/types/instill";
import cn from "clsx";
import PositionInfo from "./PositionInfo";
import PositionDescription from "./PositionDescription";

export type CareerPositionDetailsSectionProps = {
  marginBottom: string;
  position: PositionDetails;
};

const CareerPositionDetailsSection = ({
  marginBottom,
  position,
}: CareerPositionDetailsSectionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-20 xl:flex-row xl:gap-y-0 xl:gap-x-6",
        marginBottom
      )}
    >
      <PositionInfo
        padding="px-4 xl:px-0"
        width="xl:w-4/12"
        position={position}
      />
      <PositionDescription
        padding="px-4 xl:px-10"
        width="xl:w-8/12"
        description={position.description}
      />
    </div>
  );
};

export default CareerPositionDetailsSection;

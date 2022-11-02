import cn from "clsx";

import { PositionInfo } from "@/types/instill";
import { PositionInfoBlock } from "./PositionInfoBlock";
import { PositionDescription } from "./PositionDescription";

export type PositionDetailsProps = {
  marginBottom: string;
  position: PositionInfo;
};

export const PositionDetails = ({
  marginBottom,
  position,
}: PositionDetailsProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-20 xl:flex-row xl:gap-y-0 xl:gap-x-6",
        marginBottom
      )}
    >
      <PositionInfoBlock
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

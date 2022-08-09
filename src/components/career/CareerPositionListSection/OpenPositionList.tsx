import cn from "clsx";
import { OpenPositionListUnit } from "./OpenPositionListUnit";
import { PositionDetails } from "@/types/instill";

export type OpenPositionListProps = {
  positions: PositionDetails[];

  /** <Tailwind config> - position and width */
  styleName?: string;
};

export const OpenPositionList = ({
  positions,
  styleName,
}: OpenPositionListProps) => {
  return (
    <div className={cn("flex flex-col", styleName)}>
      {positions.map((position) => {
        return (
          <OpenPositionListUnit
            link={`/career/${position.id}-${position.slug}`}
            unitIsPlaceholder={false}
            name={position.name}
            location={position.location}
            workType={position.workType}
            postDate={position.postDate}
            key={position.id}
          />
        );
      })}
      <OpenPositionListUnit
        link="https://forms.clickup.com/f/2e88k-1856/90J2JKV7NTVLYD6M1J"
        unitIsPlaceholder={true}
        name="Open Position"
        location="Remote"
        workType="Full time"
        postDate=""
      />
    </div>
  );
};

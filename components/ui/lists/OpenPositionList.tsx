import { FC } from "react";
import { OpenPositionListUnit } from "./OpenPositionListUnit";
import * as classNames from "classnames";
import { TPositionDetails } from "../../../types/instill";

interface Props {
  positions: TPositionDetails[];

  /** <Tailwind config> - position and width */
  styleName?: string;
}

export const OpenPositionList: FC<Props> = ({ positions, styleName }) => {
  return (
    <div className={classNames.default("flex flex-col", styleName)}>
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
        link=""
        unitIsPlaceholder={true}
        name="Open Position"
        location="Remote"
        workType="Full time"
        postDate=""
      />
    </div>
  );
};

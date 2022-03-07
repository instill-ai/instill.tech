import { FC } from "react";
import { TPositionDetails } from "../../../types/instill";
import { LocationIcon } from "../icons/LocationIcon";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { WorkTypeIcon } from "../icons/WorkTypeIcon";
import * as classNames from "classnames";
import { ShareThisRoleBlock } from "./ShareThisRoleBlock";

interface Props {
  /** <Tailwind config> - width and position */
  styleName?: string;

  position: TPositionDetails;
}

export const CareerPostionDetailsBlock: FC<Props> = ({
  position,
  styleName,
}) => {
  return (
    <div className={classNames.default("flex flex-col", styleName)}>
      <h2 className="instill-text-h2 text-instillGray05 mb-10">
        {position.name}
      </h2>
      <div className="flex flex-row gap-x-5 mb-10">
        <div className="flex flex-row gap-x-2.5 pr-5">
          <LocationIcon styleName="w-[24px] h-[24px] text-instillGray05" />
          <p className="instill-text-body text-instillGray05">
            {position.location}
          </p>
        </div>
        <div className="flex flex-row gap-x-2.5 pr-5">
          <WorkTypeIcon styleName="w-[20px] h-[20px] text-instillGray05" />
          <p className="instill-text-body text-instillGray05">
            {position.workType}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-x-5 mb-10">
        <div className="flex flex-shrink-0 pt-1.5">
          <RightArrowIcon styleName="w-[15px] h-[15px] mb-auto text-instillGray05" />
        </div>

        <div className="flex flex-col">
          <p className="instill-text-body text-instillGray05">
            {position.packageUK}
          </p>
          <p className="instill-text-body text-instillGray50">
            {`${position.packageTW}, or other locations based on the local living cost`}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-x-5 mb-[120px]">
        <RightArrowIcon styleName="w-[15px] h-[15px] my-auto text-instillGray05" />
        <p className="instill-text-body text-instillGray05">{`Stock options: ${position.stockOptions} Equity`}</p>
      </div>
      <ShareThisRoleBlock />
    </div>
  );
};

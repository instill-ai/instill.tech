import { FC } from "react";
import { TPositionDetails } from "../../../types/instill";
import { LocationIcon } from "../../ui/icons/LocationIcon";
import { RightArrowIcon } from "../../ui/icons/RightArrowIcon";
import { WorkTypeIcon } from "../../ui/icons/WorkTypeIcon";
import * as classNames from "classnames";
import ShareThisPosition from "./ShareThisPosition";

export type PositionInfoProps = {
  position: TPositionDetails;
  padding?: string;
  width?: string;
};

const PositionInfo: FC<PositionInfoProps> = ({ position, padding, width }) => {
  return (
    <div className={classNames.default("flex flex-col", padding, width)}>
      <h2 className="instill-text-h2 mb-10 text-instillGray05">
        {position.name}
      </h2>
      <div className="mb-10 flex flex-row gap-x-5">
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
      <div className="mb-10 flex flex-row gap-x-5">
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
      <div className="mb-[120px] flex flex-row gap-x-5">
        <RightArrowIcon styleName="w-[15px] h-[15px] my-auto text-instillGray05" />
        <p className="instill-text-body text-instillGray05">{`Stock options: ${position.stockOptions} Equity`}</p>
      </div>
      <ShareThisPosition />
    </div>
  );
};

export default PositionInfo;

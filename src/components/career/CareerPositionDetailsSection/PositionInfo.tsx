import { FC } from "react";
import { TPositionDetails } from "../../../types/instill";
import * as classNames from "classnames";
import ShareThisPosition from "./ShareThisPosition";
import {
  ArrowRightIcon,
  PinIcon,
  ToolboxIcon,
} from "@instill-ai/design-system";

export type PositionInfoProps = {
  position: TPositionDetails;
  padding?: string;
  width?: string;
};

const PositionInfo: FC<PositionInfoProps> = ({ position, padding, width }) => {
  return (
    <div className={classNames.default("flex flex-col", padding, width)}>
      <h2 className="instill-text-h2 mb-10 text-instillGrey05">
        {position.name}
      </h2>
      <div className="mb-10 flex flex-row gap-x-5">
        <div className="flex flex-row gap-x-2.5 pr-5">
          <PinIcon
            width="w-6"
            height="h-6"
            color="fill-instillGrey05"
            position="my-auto"
          />
          <p className="instill-text-body text-instillGrey05">
            {position.location}
          </p>
        </div>
        <div className="flex flex-row gap-x-2.5 pr-5">
          <ToolboxIcon
            width="w-5"
            height="h-5"
            color="fill-instillGrey05"
            position="my-auto"
          />
          <p className="instill-text-body text-instillGrey05">
            {position.workType}
          </p>
        </div>
      </div>
      <div className="mb-10 flex flex-row gap-x-5">
        <div className="flex flex-shrink-0 pt-1.5">
          <ArrowRightIcon
            width="w-[15px]"
            height="h-[15px]"
            color="fill-instillGrey05"
            position="mb-auto"
          />
        </div>
        <div className="flex flex-col">
          <p className="instill-text-body text-instillGrey05">
            {position.packageUK}
          </p>
          <p className="instill-text-body text-instillGrey50">
            {`${position.packageTW}, or other locations based on the local living cost`}
          </p>
        </div>
      </div>
      <div className="mb-[120px] flex flex-row gap-x-5">
        <ArrowRightIcon
          width="w-[15px]"
          height="h-[15px]"
          color="fill-instillGrey05"
          position="my-auto"
        />
        <p className="instill-text-body text-instillGrey05">{`Stock options: ${position.stockOptions} Equity`}</p>
      </div>
      <ShareThisPosition />
    </div>
  );
};

export default PositionInfo;

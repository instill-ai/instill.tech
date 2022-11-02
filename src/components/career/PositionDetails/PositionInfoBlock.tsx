import { PositionInfo } from "@/types/instill";
import * as classNames from "classnames";
import ShareThisPosition from "./ShareThisPosition";
import {
  ArrowRightIcon,
  PinIcon,
  ToolboxIcon,
} from "@instill-ai/design-system";

export type PositionInfoBlockProps = {
  position: PositionInfo;
  padding?: string;
  width?: string;
};

export const PositionInfoBlock = ({
  position,
  padding,
  width,
}: PositionInfoBlockProps) => {
  return (
    <div className={classNames.default("flex flex-col", padding, width)}>
      <h2 className="mb-10 text-instillGrey90 text-instill-h2">
        {position.name}
      </h2>
      <div className="mb-10 flex flex-row gap-x-5">
        <div className="flex flex-row gap-x-2.5 pr-5">
          <PinIcon
            width="w-6"
            height="h-6"
            color="fill-instillGrey90"
            position="my-auto"
          />
          <p className="text-instillGrey90 text-instill-body-normal">
            {position.location}
          </p>
        </div>
        <div className="flex flex-row gap-x-2.5 pr-5">
          <ToolboxIcon
            width="w-5"
            height="h-5"
            color="fill-instillGrey90"
            position="my-auto"
          />
          <p className="text-instillGrey90 text-instill-body-normal">
            {position.workType}
          </p>
        </div>
      </div>
      <div className="mb-10 flex flex-row gap-x-5">
        <div className="flex flex-shrink-0 pt-1.5">
          <ArrowRightIcon
            width="w-5"
            height="h-5"
            color="fill-instillGrey90"
            position="mb-auto"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-instillGrey90 text-instill-body-normal">
            {position.packageUK}
          </p>
          <p className="text-instillGrey50 text-instill-body-light">
            {`${position.packageTW}, or other locations based on the local living cost`}
          </p>
        </div>
      </div>
      <div className="mb-[120px] flex flex-row gap-x-5">
        <ArrowRightIcon
          width="w-5"
          height="h-5"
          color="fill-instillGrey90"
          position="my-auto"
        />
        <p className="text-instillGrey90 text-instill-body-normal">{`Stock options: ${position.stockOptions} Equity`}</p>
      </div>
      <ShareThisPosition />
    </div>
  );
};

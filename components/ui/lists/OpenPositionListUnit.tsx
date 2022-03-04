import { FC } from "react";
import * as classNames from "classnames";
import { LocationIcon } from "../icons/LocationIcon";
import { WorkTypeIcon } from "../icons/WorkTypeIcon";

interface Props {
  /** Position full nane */
  name: string;

  /** Position location */
  location: string;

  /** Position work type */
  workType: string;

  /** Position create time */
  createdAt: string;

  /** <Tailwind config> - position */
  styleName?: string;
}

export const OpenPositionListUnit: FC<Props> = ({
  name,
  location,
  workType,
  createdAt,
  styleName,
}) => {
  const daysAgo = 10;

  return (
    <div
      className={classNames.default(
        "flex flex-col md:grid md:grid-cols-2",
        styleName
      )}
    >
      <div className="flex flex-col">
        <h3 className="instill-text-h3 text-instillGray95">{name}</h3>
        <p className="instill-text-body text-instillGray95">{`Posted ${daysAgo} days ago`}</p>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-1">
          <div className="flex flex-row m-auto gap-x-2.5">
            <LocationIcon styleName="w-[24px] h-[24px] text-instillGray70" />
            <p className="instill-text-body text-instillGray70">{location}</p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-row m-auto gap-x-2.5">
            <WorkTypeIcon styleName="w-[20px] h-[20px] text-instillGray70" />
            <p className="instill-text-body text-instillGray70">{workType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import { FC } from "react";
import * as classNames from "classnames";
import { LocationIcon } from "../icons/LocationIcon";
import { WorkTypeIcon } from "../icons/WorkTypeIcon";
import { LinkBase } from "../links/LinkBase";

interface Props {
  /** Indicate whether the list unit is placeholder or not */
  unitIsPlaceholder: boolean;

  /** Position full name */
  name: string;

  /** Position detail page's link */
  link: string;

  /** Position location */
  location: string;

  /** Position work type */
  workType: string;

  /** Position create time */
  postDate: string;

  /** <Tailwind config> - position */
  styleName?: string;
}

export const OpenPositionListUnit: FC<Props> = ({
  name,
  location,
  workType,
  postDate,
  styleName,
  unitIsPlaceholder,
  link,
}) => {
  const now = Date.now();
  const daysAgo = Math.round(Math.abs(parseInt(postDate) - now) / 86400000);

  return (
    <LinkBase href={link} scroll={true}>
      <div
        className={classNames.default(
          "flex flex-col hover:bg-instillGray05 md:grid md:grid-cols-2 md:px-5 md:py-5",
          styleName
        )}
      >
        <div className="flex flex-col px-4 py-5 md:p-0">
          <h3 className="instill-text-h3 text-instillGrey95">{name}</h3>
          <p className="instill-text-body text-instillGrey95">
            {unitIsPlaceholder
              ? "If you're interested in joining us, but don't tick every box, we still encourage you to apply!"
              : `Posted ${daysAgo} days ago`}
          </p>
        </div>
        <div className="flex w-full flex-row gap-x-4 px-4 py-5 md:gap-x-0 md:p-0">
          <div className="flex md:flex-1">
            <div className="m-auto flex flex-row gap-x-2.5 pr-5 md:pr-0">
              <LocationIcon styleName="w-[24px] h-[24px] text-instillGray70" />
              <p className="instill-text-body text-instillGray70">{location}</p>
            </div>
          </div>
          <div className="flex md:flex-1">
            <div className="m-auto flex flex-row gap-x-2.5 pr-5 md:pr-0">
              <WorkTypeIcon styleName="w-[20px] h-[20px] text-instillGray70" />
              <p className="instill-text-body text-instillGray70">{workType}</p>
            </div>
          </div>
        </div>
      </div>
    </LinkBase>
  );
};

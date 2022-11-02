import { PinIcon, ToolboxIcon } from "@instill-ai/design-system";
import Link from "next/link";
import cn from "clsx";

export type CareerPositionListItemProps = {
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
};

export const CareerPositionListItem = ({
  name,
  location,
  workType,
  postDate,
  styleName,
  unitIsPlaceholder,
  link,
}: CareerPositionListItemProps) => {
  const now = Date.now();
  const daysAgo = Math.round(Math.abs(parseInt(postDate) - now) / 86400000);

  return (
    <Link href={link} scroll={true}>
      <a
        className={cn(
          "flex flex-col bg-white hover:shadow-instill-solid-5 md:grid md:grid-cols-2 md:px-10 md:py-5 md:hover:shadow-instill-solid-10",
          styleName
        )}
      >
        <div className="flex flex-col p-4 md:p-0">
          <h3 className="instill-text-h3 text-instillGrey95">{name}</h3>
          <p className="instill-text-body text-instillGrey95">
            {unitIsPlaceholder
              ? "If you're interested in joining us, but don't tick every box, we still encourage you to apply!"
              : `Posted ${daysAgo} days ago`}
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-4 p-4 md:gap-x-0 md:p-0">
          <div className="m-auto flex flex-row gap-x-2.5">
            <PinIcon
              width="w-6"
              height="h-6"
              color="fill-instillGrey70"
              position="my-auto"
            />
            <p className="instill-text-body text-instillGrey70">{location}</p>
          </div>
          <div className="m-auto flex flex-row gap-x-2.5">
            <ToolboxIcon
              width="w-5"
              height="h-5"
              color="fill-instillGrey70"
              position="my-auto"
            />
            <p className="instill-text-body text-instillGrey70">{workType}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

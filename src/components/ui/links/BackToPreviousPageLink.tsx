import { LinkBase } from "./LinkBase";
import { ArrowLeftIcon } from "@instill-ai/design-system";
import cn from "clsx";

export type BackToPreviousPageLinkProps = {
  styleName?: string;

  /** Previous page's link */
  url: string;
};

const BackToPreviousPageLink = ({
  styleName,
  url,
}: BackToPreviousPageLinkProps) => {
  return (
    <LinkBase
      href={url}
      styleName={cn("flex flex-row gap-x-5 group", styleName)}
    >
      <ArrowLeftIcon
        width="w-[15px]"
        height="h-[15px]"
        color="fill-instillGrey30 group-hover:fill-instillGrey05"
        position="my-auto"
      />
      <p className="instill-text-body text-instillGrey30 group-hover:text-instillGrey05">
        Back
      </p>
    </LinkBase>
  );
};

export default BackToPreviousPageLink;

import { ArrowLeftIcon } from "@instill-ai/design-system";
import Link from "next/link";

export type BackToPreviousPageLinkProps = {
  /** Previous page's link */
  url: string;
};

const BackToPreviousPageLink = ({ url }: BackToPreviousPageLinkProps) => {
  return (
    <Link href={url}>
      <a className="flex flex-row gap-x-5 group">
        <ArrowLeftIcon
          width="w-[15px]"
          height="h-[15px]"
          color="fill-instillGrey30 group-hover:fill-instillGrey05"
          position="my-auto"
        />
        <p className="instill-text-body text-instillGrey30 group-hover:text-instillGrey05">
          Back
        </p>
      </a>
    </Link>
  );
};

export default BackToPreviousPageLink;

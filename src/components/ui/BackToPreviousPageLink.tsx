import { ArrowLeftIcon } from "@instill-ai/design-system";
import Link from "next/link";

export type BackToPreviousPageLinkProps = {
  url: string;
};

export const BackToPreviousPageLink = ({
  url,
}: BackToPreviousPageLinkProps) => {
  return (
    <Link href={url}>
      <a className="group flex flex-row gap-x-5">
        <ArrowLeftIcon
          width="w-5"
          height="h-5"
          color="fill-instillGrey50 group-hover:fill-instillGrey90"
          position="my-auto"
        />
        <p className="text-instill-body text-instillGrey50 group-hover:text-instillGrey90">
          Back
        </p>
      </a>
    </Link>
  );
};

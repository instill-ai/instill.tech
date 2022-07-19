import { useRouter } from "next/router";
import { FC } from "react";
import { ShareToFbLink } from "../links/ShareToFbLink";
import { ShareToLinkedInLink } from "../links/ShareToLinkedInLink";
import { ShareToTwitterLink } from "../links/ShareToTwitterLink";

interface Props {}

export const ShareThisRoleBlock: FC<Props> = () => {
  const router = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;
  return (
    <div className="flex w-[167px] flex-col gap-y-5 border-t border-instillGray50 py-2.5">
      <p className="instill-text-body text-instillGray05">Share this role</p>
      <div className="flex flex-row gap-x-5">
        <ShareToFbLink url={pageUrl} />
        <ShareToTwitterLink url={pageUrl} />
        <ShareToLinkedInLink url={pageUrl} />
      </div>
    </div>
  );
};

import { useRouter } from "next/router";
import { FC } from "react";
import { ShareToFbLink } from "../../ui/links/ShareToFbLink";
import ShareToLinkedInLink from "../../ui/links/ShareToLinkedInLink";
import { ShareToTwitterLink } from "../../ui/links/ShareToTwitterLink";

const ShareThisPosition: FC = () => {
  const router = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;
  return (
    <div className="flex w-[167px] flex-col gap-y-5 border-t border-instillGrey50 py-2.5">
      <p className="instill-text-body text-instillGrey05">Share this role</p>
      <div className="flex flex-row gap-x-5">
        <ShareToFbLink url={pageUrl} />
        <ShareToTwitterLink url={pageUrl} />
        <ShareToLinkedInLink url={pageUrl} />
      </div>
    </div>
  );
};

export default ShareThisPosition;

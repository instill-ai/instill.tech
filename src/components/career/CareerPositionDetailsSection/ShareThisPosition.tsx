import { useRouter } from "next/router";
import { ShareToFb, ShareToLinkedIn, ShareToTwitter } from "@/components/ui";

const ShareThisPosition = () => {
  const router = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;
  return (
    <div className="flex w-[167px] flex-col gap-y-5 border-t border-instillGrey50 py-2.5">
      <p className="instill-text-body text-instillGrey05">Share this role</p>
      <div className="flex flex-row gap-x-5">
        <ShareToFb url={pageUrl} />
        <ShareToTwitter url={pageUrl} />
        <ShareToLinkedIn url={pageUrl} />
      </div>
    </div>
  );
};

export default ShareThisPosition;

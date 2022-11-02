import { useRouter } from "next/router";

import { ShareToFb, ShareToLinkedIn, ShareToTwitter } from "@/components/ui";

export const ShareThisPosition = () => {
  const router = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;
  return (
    <div className="flex w-[167px] flex-col gap-y-5 border-t border-instillGrey50 py-2.5">
      <p className="text-instill-body text-instillGrey90">Share this role</p>
      <div className="flex flex-row gap-x-5">
        <ShareToFb
          url={pageUrl}
          color="fill-instillGrey50 hover:fill-instillGrey90"
        />
        <ShareToTwitter
          url={pageUrl}
          color="fill-instillGrey50 hover:fill-instillGrey90"
        />
        <ShareToLinkedIn
          url={pageUrl}
          color="fill-instillGrey50 hover:fill-instillGrey90"
        />
      </div>
    </div>
  );
};

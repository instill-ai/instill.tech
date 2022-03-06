import { FC } from "react";
import { ShareToFbLink } from "../links/ShareToFbLink";
import { ShareToLinkedInLink } from "../links/ShareToLinkedInLink";
import { ShareToTwitterLink } from "../links/ShareToTwitterLink";

interface Props {}

export const ShareThisRoleBlock: FC<Props> = () => {
  return (
    <div className="flex flex-col py-2.5 gap-y-5 border-t border-instillGray50 w-[167px]">
      <p className="instill-text-body text-instillGray05">Share this role</p>
      <div className="flex flex-row gap-x-5">
        <ShareToFbLink url="" />
        <ShareToTwitterLink url="" />
        <ShareToLinkedInLink url="" />
      </div>
    </div>
  );
};

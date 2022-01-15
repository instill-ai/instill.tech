import { FC } from "react";
import { PrivacyPolicyLink } from "../links/PrivacyPolicyLink";
import { SocialLinksGroup } from "../SocialLinksGroup";
import { CopyRightText } from "./CopyRightText";
import { InstillAiLogo } from "./InstillAiLogo";
import { SimpleHorizontalLine } from "./SimpleHorizontalLine";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <div className="py-5 px-[30px] flex flex-col mt-auto">
      <SimpleHorizontalLine styleName="mb-5 border-instillGray70" />
      <div className="flex flex-col gap-y-10">
        <div>
          <InstillAiLogo type="logoOnlyWhite" width={30} />
        </div>
        <div className="grid grid-cols-3">
          <CopyRightText />
          <SocialLinksGroup />
          <div className="flex flex-row justify-end">
            <PrivacyPolicyLink />
          </div>
        </div>
      </div>
    </div>
  );
};

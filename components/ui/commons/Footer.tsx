import { FC } from "react";
import { CookiePolicyLink } from "../links/CookiePolicyLink";
import { PrivacyPolicyLink } from "../links/PrivacyPolicyLink";
import { SocialLinksGroup } from "../SocialLinksGroup";
import { CopyRightText } from "./CopyRightText";
import { InstillAiLogo } from "./InstillAiLogo";
import { SimpleHorizontalLine } from "./SimpleHorizontalLine";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <div className="py-5 px-4 flex flex-col mt-auto">
      <SimpleHorizontalLine styleName="mb-5 border-instillGray70" />
      <div className="flex flex-col gap-y-[60px] sm:gap-y-10">
        <div className="flex flex-col">
          <h3 className="instill-text-h3 text-instillGray05">
            Where Vision Date Preparation
          </h3>
          <h3 className="instill-text-h3 text-instillGray05 mb-5">
            Made for All
          </h3>
          <InstillAiLogo type="logoOnlyWhite" width={30} />
        </div>
        <div className="flex flex-col-reverse gap-y-[30px] sm:gap-y-0 sm:grid sm:grid-cols-3">
          <CopyRightText />
          <div className="flex flex-col gap-y-[60px] sm:hidden">
            <SocialLinksGroup styleName="sm:justify-center" />
            <div className="flex flex-row sm:justify-end gap-x-5">
              <CookiePolicyLink />
              <div className="border-r border-instillGray15 my-1.5" />
              <PrivacyPolicyLink />
            </div>
          </div>
          <SocialLinksGroup styleName="hidden sm:flex sm:justify-center" />
          <div className="hidden sm:flex sm:flex-row sm:justify-end gap-x-2 md:gap-x-5">
            <CookiePolicyLink />
            <div className="border-r border-instillGray15 my-1.5 max-h-[16px]" />
            <PrivacyPolicyLink />
          </div>
        </div>
      </div>
    </div>
  );
};

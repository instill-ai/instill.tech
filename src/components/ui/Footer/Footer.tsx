import { Logo } from "@instill-ai/design-system";
import SocialLinks from "./SocialLinks";
import CopyRightText from "../CopyRightText";
import SimpleHorizontalLine from "../SimpleHorizontalLine";
import PrivacyPolicyLink from "./PrivacyPolicyLink";
import CookiePolicyLink from "./CookiePolicyLink";

const Footer = () => {
  return (
    <div className="flex w-full bg-instillGrey95">
      <div className="mt-auto flex w-full max-w-[1440px] flex-col py-5 px-4 md:mx-auto max:w-10/12 max:px-0">
        <SimpleHorizontalLine
          marginBottom="mb-5"
          borderColor="border-instillGrey70"
        />
        <div className="flex flex-col space-y-[60px] sm:space-y-10">
          <div className="flex flex-col">
            <h3 className="instill-text-h3 mb-5 max-w-[256px] text-instillGrey05">
              Visual Data Preparation Made for All
            </h3>
            <Logo type="whiteLogomark" width={30} />
          </div>
          <div className="flex flex-col-reverse space-y-[30px] sm:grid sm:grid-cols-3 sm:space-y-0">
            <CopyRightText />
            <div className="flex flex-col space-y-[60px] sm:hidden">
              <SocialLinks styleName="sm:justify-center" />
              <div className="flex flex-row space-x-5 sm:justify-end">
                <CookiePolicyLink />
                <div className="my-1.5 border-r border-instillGrey15" />
                <PrivacyPolicyLink />
              </div>
            </div>
            <SocialLinks styleName="hidden sm:flex sm:justify-center" />
            <div className="hidden space-x-2 sm:flex sm:flex-row sm:justify-end md:space-x-5">
              <CookiePolicyLink />
              <div className="my-1.5 max-h-[16px] border-r border-instillGrey15" />
              <PrivacyPolicyLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

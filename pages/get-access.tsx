import { FC, ReactElement } from "react";
import { PageHead } from "../components/layouts/PageHead";
import * as classNames from "classnames";
import { PageBase } from "../components/layouts/PageBase";
import { MailchimpSignupForm } from "../components/forms/MailchimpSignupForm";
import { AlphaBadgeSvg } from "../components/ui/svgs/AlphaBadgeSvg";

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const GetEarlyAccessPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const elementMaxWidth = "max-w-[1440px] md:w-10/12 md:mx-auto";

  return (
    <PageHead
      pageTitle="Get early access | Instill AI"
      pageDescription=" We're now in private alpha. Join and see first-hand how
    Instill AI can help adopt Vision AI in your company."
    >
      <div className={elementMaxWidth}>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-[60px] lg:pt-[244px] lg:pb-[60px] px-4 md:px-0 max:mx-auto max:w-10/12">
          <div className="flex flex-col max-w-[450px] mb-20 lg:mb-0">
            <div className="flex flex-col gap-y-5 mb-[60px]">
              <h2 className="instill-text-h2 text-instillGray05">
                Get Early Access
              </h2>
              <p className="instill-text-body text-instillGray05">
                We&#39;re now in private alpha. Join and see first-hand how
                Instill AI can help adopt Vision AI in your company.
              </p>
            </div>
            <div className="flex w-full">
              <AlphaBadgeSvg styleName="max-w-[355px] w-full" />
            </div>
          </div>
          <div>
            <MailchimpSignupForm />
          </div>
        </div>
      </div>
    </PageHead>
  );
};

GetEarlyAccessPage.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default GetEarlyAccessPage;

import { FC, ReactElement } from "react";
import { PageHead } from "../components/layouts/PageHead";
import * as classNames from "classnames";
import { PageBase } from "../components/layouts/PageBase";
import { MailchimpSignupForm } from "../components/forms/MailchimpSignupForm";

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const GetEarlyAccessPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const elementMaxWidth = "max-w-[1440px] md:w-10/12 md:mx-auto";

  return (
    <PageHead pageTitle="Get early access | Instill Ai" pageDescription="">
      <div
        className={classNames.default(
          "grid grid-cols-1 md:grid-cols-2 py-40 my-auto",
          elementMaxWidth
        )}
      >
        <div className="flex flex-col max-w-[450px]">
          <h2 className="instill-text-h2 text-instillGray05">
            Get Early Access
          </h2>
          <p className="instill-text-body text-instillGray05">
            We&#39;re now in private alpha. Join and see first-hand how Instill
            AI can help adopt Vision AI in your company.
          </p>
        </div>
        <div>
          <MailchimpSignupForm />
        </div>
      </div>
    </PageHead>
  );
};

GetEarlyAccessPage.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default GetEarlyAccessPage;

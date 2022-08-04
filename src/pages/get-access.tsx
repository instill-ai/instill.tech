import { FC, ReactElement } from "react";
import Image from "next/future/image";

import { MailchimpSignupForm } from "../components/forms/MailchimpSignupForm";
import { PageBase, PageHead } from "@/components/ui";

interface GetLayOutProps {
  page: ReactElement;
}

const GetEarlyAccessPage: FC & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  return (
    <>
      <PageHead
        pageTitle="Get early access | Instill AI"
        pageDescription=" We're now in private alpha. Join and see first-hand how Instill AI can help adopt Vision AI in your company."
      />
      <div className="flex w-full bg-instillGrey95">
        <div className="grid w-full max-w-[1440px] grid-cols-1 py-[60px] px-4 md:mx-auto md:w-10/12 md:px-0 lg:grid-cols-2 lg:pt-[244px] lg:pb-[60px]">
          <div className="mx-auto mb-20 flex max-w-[450px]  flex-col md:mx-0 lg:mb-0">
            <div className="mb-[60px] flex flex-col gap-y-5">
              <h2 className="instill-text-h2 mx-auto text-instillGrey05 md:mx-0">
                Get Early Access
              </h2>
              <p className="instill-text-body mx-auto text-instillGrey05 md:mx-0">
                We&#39;re now in private alpha. Join and see first-hand how
                Instill AI can help adopt Vision AI in your company.
              </p>
            </div>
            <Image
              src="/images/alpha-badge.svg"
              alt="instill ai alpha testing badge"
              width={355}
              height={146}
              className="mx-auto md:mx-0"
              sizes="355px"
            />
          </div>
          <div>
            <MailchimpSignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

GetEarlyAccessPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default GetEarlyAccessPage;

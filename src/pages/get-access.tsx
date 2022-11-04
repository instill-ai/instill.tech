import { FC, ReactElement } from "react";
import Image from "next/future/image";

import { PageBase, PageHead, MailchimpSignupForm } from "@/components/ui";
import { EarlyAccessHero } from "@/components/early-access";

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
        pageType="main"
      />
      <div className="mx-auto mt-[100px] mb-[120px] flex max-w-[1127px] flex-col xl:mt-40">
        <div className="w-full p-10 xl:p-0">
          <EarlyAccessHero marginBottom="mb-[100px]" />
          <div className="flex w-full flex-col xl:flex-row xl:gap-x-10">
            <Image
              src="/images/alpha-badge.svg"
              alt="instill ai alpha testing badge"
              width={355}
              height={146}
              className="hidden w-5/12 xl:flex"
              sizes="355px"
            />
            <div className="xl:w-7/12">
              <MailchimpSignupForm />
            </div>
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

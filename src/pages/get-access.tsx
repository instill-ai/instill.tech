import { FC, ReactElement } from "react";
import Image from "next/future/image";

import {
  PageBase,
  PageHead,
  MailchimpSignupForm,
  ContentContainer,
} from "@/components/ui";
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
        pageType="main"
        pageTitle="Get early access | Instill AI"
        pageDescription=" We're now in private alpha. Join as a design partner to adopt AI for unstructured data in your company."
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <EarlyAccessHero marginBottom="mb-[120px] xl:mb-40" />
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
      </ContentContainer>
    </>
  );
};

GetEarlyAccessPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default GetEarlyAccessPage;

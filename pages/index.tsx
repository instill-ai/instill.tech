import { FC, ReactElement } from "react";
import { SubscriptionEmailForm } from "../components/forms/SubscriptionEmailForm";
import { Headline } from "../components/ui/Headline";
import { MainCtaGroup } from "../components/ui/MainCtaGroup";
import { SubHeadline } from "../components/ui/SubHeadline";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const Home: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  return (
    <PageHead
      pageTitle="Where visual data preparation made for all | Instill AI"
      pageDescription="Empower modern data stack, tapping the value of unstructured visual data with our open source community."
    >
      <Headline styleName="mb-5 px-[18px] md:px-0 lg:w-10/12" />
      <SubHeadline styleName="mb-10 px-[18px] md:px-0 md:w-8/12 lg:w-6/12" />
      <MainCtaGroup styleName="mb-[100px] sm:mb-[320px]" />
      <SubscriptionEmailForm styleName="mb-[60px]" />
    </PageHead>
  );
};

Home.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default Home;

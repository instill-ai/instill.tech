import { FC, ReactElement } from "react";
import { SubscriptionEmailForm } from "../components/forms/SubscriptionEmailForm";
import { Headline } from "../components/ui/Headline";
import { MainCtaGroup } from "../components/ui/MainCtaGroup";
import { SubHeadline } from "../components/ui/SubHeadline";
import { PageBase } from "../components/layouts/PageBase";

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const Home: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  return (
    <>
      <Headline styleName="mb-5 px-[18px] md:px-0 md:max-w-[800px]" />
      <SubHeadline styleName="mb-10 px-[18px] md:px-0 md:max-w-[800px]" />
      <MainCtaGroup styleName="mb-[100px] sm:mb-[240px]" />
      <SubscriptionEmailForm styleName="mb-[60px]" />
    </>
  );
};

Home.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default Home;

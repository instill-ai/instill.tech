import { FC, ReactElement } from "react";
import { Headline } from "../components/ui/Headline";
import { MainCtaGroup } from "../components/ui/MainCtaGroup";
import { SubHeadline } from "../components/ui/SubHeadline";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { FeatureBlockGroup } from "../components/ui/groups/FeatureBlockGroup";
import * as classNames from "classnames";
import { StayInTheLoopBlock } from "../components/ui/blocks/StayInTheLoopBlock";

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const Home: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const elementMaxWidth = "max-w-[1440px] md:w-10/12 md:mx-auto";

  return (
    <PageHead
      pageTitle="Where visual data preparation made for all | Instill AI"
      pageDescription="Empower modern data stack, tapping the value of unstructured visual data with our open source community."
    >
      <div
        className={classNames.default(
          "min-h-screen flex flex-col content-center",
          elementMaxWidth
        )}
      >
        <div className="flex flex-col my-auto">
          <Headline styleName="mb-5 px-[18px] md:px-0 lg:w-10/12 mt-[60px]" />
          <SubHeadline styleName="mb-10 px-[18px] md:px-0 md:w-8/12 lg:w-6/12" />
          <MainCtaGroup styleName="" />
        </div>
      </div>
      <FeatureBlockGroup styleName="mb-[152px]" />
      <StayInTheLoopBlock
        styleName={classNames.default("mb-[60px]", elementMaxWidth)}
      />
    </PageHead>
  );
};

Home.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default Home;

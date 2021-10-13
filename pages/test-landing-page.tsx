import { FC } from "react";
import { Footer } from "../components/ui/common/Footer";
import { Headline } from "../components/ui/texts/Headline";
import { HeadCTAGroup } from "../components/layouts/HeadCTAGroup";
import { Header } from "../components/ui/common/Header";
import { NewFeatureBanner } from "../components/NewFeatureBanner";
import { SectionContainer } from "../components/layouts/SectionContainer";
import { SubHeadline } from "../components/ui/texts/SubHeadline";
import { TestMainScreenMockup } from "../components/TestMainScreenMockup";

interface Props {}

const TestLandingPage: FC<Props> = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col">
        <Header />
        <NewFeatureBanner styleName={"mb-4"} featureName={"Check out the team dashboard"} />
        <Headline styleName={"mb-6"} headlineText={"Beautiful analytics to grow smarter"} />
        <SubHeadline
          styleName={"mb-12"}
          subHeadlineText={
            "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
          }
        />
        <HeadCTAGroup styleName={"mb-16"} />
        <TestMainScreenMockup sizeStyle={"w-[984px] h-[614px]"} />
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default TestLandingPage;

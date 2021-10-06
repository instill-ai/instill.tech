import { FC } from "react";
import Headline from "../components/Headline";
import Header from "../components/layouts/Header";
import NewFeatureBanner from "../components/NewFeatureBanner";
import SubHeadline from "../components/SubHeadline";

interface Props {}

const TestLandingPage: FC<Props> = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <NewFeatureBanner className={"mb-4"} featureName={"Check out the team dashboard"} />
      <Headline className={"mb-6"} headlineText={"Beautiful analytics to grow smarter"} />
      <SubHeadline subHeadlineText={"Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."} />
    </div>
  )
}

export default TestLandingPage
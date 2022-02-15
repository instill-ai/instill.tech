import { FC } from "react";
import { HeroAnimationSvg } from "../components/ui/svgs/HeroAnimationSvg";

interface Props {}

const TestPage: FC<Props> = () => {
  return <HeroAnimationSvg styleName="w-[290px] h-[214px]" />;
};

export default TestPage;

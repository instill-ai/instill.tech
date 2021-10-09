import { FC } from "react";
import { HeroAnimation } from "../components/animations/HeroAnimation";
import { TestAvatar } from "../components/TestAvatar";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div className="bg-[#063477]">
      <HeroAnimation />
      <TestAvatar sizeStyle={"w-10 h-10"} />
    </div>
  );
};

export default Home;

import { FC } from "react";
import MainSVG from "../../../assets/animation/hero-animation-main.svg";

interface Props {}

export const HeroAnimationMain: FC<Props> = () => {
  return (
    <div style={{ gridArea: "1/1", zIndex: 2 }}>
      <MainSVG />
    </div>
  );
};

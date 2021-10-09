import { FC } from "react";
import MagicBallSVG from "../../assets/animation/hero-animation-magic-ball.svg";

interface Props {}

export const HeroAnimationMagicBall: FC<Props> = () => {
  return (
    <div style={{ gridArea: "1/1", zIndex: 3 }}>
      <MagicBallSVG />
      <style global jsx>
        {`
          .MagicBall {
            animation: MagicballAnimation 2s linear 1s infinite;
            -webkit-animation: MagicballAnimation 2s linear 1s infinite;
          }

          @keyframes MagicballAnimation {
            0% {
              cy: 327.5px;
            }
            50% {
              cy: 320px;
            }
            100% {
              cy: 327.5px;
            }
          }
          @-webkit-keyframes MagicballAnimation {
            0% {
              cy: 327.5px;
            }
            50% {
              cy: 320px;
            }
            100% {
              cy: 327.5px;
            }
          }
        `}
      </style>
    </div>
  );
};

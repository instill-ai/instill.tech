import { FC } from 'react';
import FishDripSVG from '../../assets/animation/hero-animation-fish-drip.svg';

interface Props {}

const HeroAnimationFishDrip: FC<Props> = () => {
  return (
    <div style={{ gridArea: '1/1', zIndex: 1 }}>
      <FishDripSVG />
      <style global jsx>{`
        .fish1 {
          animation: fish1_2_4 3s linear 0.5s infinite;
          -webkit-animation: fish1_2_4 3s linear 0.5s infinite;
        }
        .fish2 {
          animation: fish1_2_4 3s linear 1s infinite;
          -webkit-animation: fish1_2_4 3s linear 1s infinite;
        }
        .fish3 {
          animation: fish3 3s linear 1.5s infinite;
          -webkit-animation: fish3 3s linear 1.5s infinite;
        }
        .fish4 {
          animation: fish1_2_4 3s linear 2s infinite;
          -webkit-animation: fish1_2_4 3s linear 2s infinite;
        }
        .fish5 {
          animation: fish5 3s linear 2.5s infinite;
          -webkit-animation: fish5 3s linear 2.5s infinite;
        }
        .fish6 {
          animation: fish6 3s linear 3s infinite;
          -webkit-animation: fish6 3s linear 3s infinite;
        }
        .fish7 {
          animation: fish7 3s linear 0.5s infinite;
          -webkit-animation: fish7 3s linear 0.5s infinite;
        }
        .fish8 {
          animation: fish8 3s linear 1s infinite;
          -webkit-animation: fish8 3s linear 1s infinite;
        }

        .drip1-1 {
          animation: drip1-1 2.4s linear 0s infinite;
          -webkit-animation: drip1-1 2.4s linear 0s infinite;
        }
        .drip2-1 {
          animation: drip2-1 4.5s linear 0s infinite;
          -webkit-animation: drip2-1 4.5s linear 0s infinite;
        }
        .drip2-2 {
          animation: drip2-2 6.3s linear 0s infinite;
          -webkit-animation: drip2-2 6.3s linear 0s infinite;
        }
        .drip3-1 {
          animation: drip3-1 1.5s linear 0s infinite;
          -webkit-animation: drip3-1 1.5s linear 0s infinite;
        }
        .drip3-2 {
          animation: drip3-2 3s linear 0s infinite;
          -webkit-animation: drip3-2 3s linear 0s infinite;
        }
        .drip3-3 {
          animation: drip3-3 4.2s linear 0s infinite;
          -webkit-animation: drip3-3 4.2s linear 0s infinite;
        }
        .drip4-1 {
          animation: drip4-1 2.7s linear 0s infinite;
          -webkit-animation: drip4-1 2.7s linear 0s infinite;
        }
        .drip4-2 {
          animation: drip4-2 2.55s linear 0s infinite;
          -webkit-animation: drip4-2 2.55s linear 0s infinite;
        }
        .drip5-1 {
          animation: drip5-1 2.7s linear 0s infinite;
          -webkit-animation: drip5-1 2.7s linear 0s infinite;
        }
        .drip5-2 {
          animation: drip5-2 4.5s linear 0s infinite;
          -webkit-animation: drip5-2 4.5s linear 0s infinite;
        }
        .drip5-3 {
          animation: drip5-3 2.7s linear 0s infinite;
          -webkit-animation: drip5-3 2.7s linear 0s infinite;
        }
        .drip7-1 {
          animation: drip7-1 3.9s linear 0s infinite;
          -webkit-animation: drip7-1 3.9s linear 0s infinite;
        }

        @keyframes fish1_2_4 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-40px) translateY(20px);
          }
        }
        @-webkit-keyframes fish1_2_4 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-40px) translateY(20px);
          }
        }
        @keyframes fish3 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-40px) translateY(30px);
          }
        }
        @-webkit-keyframes fish3 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-40px) translateY(30px);
          }
        }
        @keyframes fish5 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-20px) translateY(40px);
          }
        }
        @-webkit-keyframes fish5 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-20px) translateY(40px);
          }
        }
        @keyframes fish6 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(30px) translateY(10px);
          }
        }
        @-webkit-keyframes fish6 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(30px) translateY(10px);
          }
        }
        @keyframes fish7 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-60px) translateY(10px);
          }
        }
        @-webkit-keyframes fish7 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-60px) translateY(10px);
          }
        }
        @keyframes fish8 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-40px) translateY(5px);
          }
        }
        @-webkit-keyframes fish8 {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-40px) translateY(5px);
          }
        }

        @keyframes drip1-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-8px);
          }
        }
        @-webkit-keyframes drip1-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-8px);
          }
        }
        @keyframes drip2-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-15px);
          }
        }
        @-webkit-keyframes drip2-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-15px);
          }
        }
        @keyframes drip2-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(6px) translateY(15px);
          }
        }
        @-webkit-keyframes drip2-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(6px) translateY(15px);
          }
        }
        @keyframes drip3-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-5px);
          }
        }
        @-webkit-keyframes drip3-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-5px);
          }
        }
        @keyframes drip3-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(2px) translateY(-8px);
          }
        }
        @-webkit-keyframes drip3-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(2px) translateY(-8px);
          }
        }
        @keyframes drip3-3 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(14px);
          }
        }
        @-webkit-keyframes drip3-3 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(14px);
          }
        }
        @keyframes drip4-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-9px);
          }
        }
        @-webkit-keyframes drip4-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-9px);
          }
        }
        @keyframes drip4-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(0.5px) translateY(-8px);
          }
        }
        @-webkit-keyframes drip4-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(0.5px) translateY(-8px);
          }
        }
        @keyframes drip5-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-9px);
          }
        }
        @-webkit-keyframes drip5-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-9px);
          }
        }
        @keyframes drip5-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-15px);
          }
        }
        @-webkit-keyframes drip5-2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-15px);
          }
        }
        @keyframes drip5-3 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(2px) translateY(7px);
          }
        }
        @-webkit-keyframes drip5-3 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateX(2px) translateY(7px);
          }
        }
        @keyframes drip7-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-13px);
          }
        }
        @-webkit-keyframes drip7-1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(-13px);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAnimationFishDrip;

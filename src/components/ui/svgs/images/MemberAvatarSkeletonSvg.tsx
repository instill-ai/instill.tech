import { FC } from "react";
import { SvgBase } from "../SvgBase";

interface Props {
  /** <Tailwind format> viewBox='0 0 360 360' */
  styleName: string;
}

export const MemberAvatarSkeletonSvg: FC<Props> = ({ styleName }) => {
  return (
    <SvgBase viewBox="0 0 360 360" styleName={styleName}>
      <g clipPath="url(#clip0_301_9685)">
        <rect width="360" height="360" fill="#1A1A1A" />
        <line
          y1="-1"
          x2="517.602"
          y2="-1"
          transform="matrix(0.707107 0.707107 -0.734901 0.678174 -3 -2)"
          stroke="#8C8A8A"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="514.067"
          y2="-1"
          transform="matrix(-0.706133 0.708079 -0.735976 -0.677007 360 -2)"
          stroke="#8C8A8A"
          strokeWidth="2"
        />
      </g>
      <rect
        x="1"
        y="1"
        width="358"
        height="358"
        stroke="#8C8A8A"
        strokeWidth="2"
      />
    </SvgBase>
  );
};

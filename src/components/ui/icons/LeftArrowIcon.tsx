import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName: string;
}

export const LeftArrowIcon: FC<Props> = ({ styleName }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 16"
      className={classNames.default("fill-current", styleName)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.46967 1.46978L7 0.939453L8.06066 2.00011L7.53033 2.53044L2.81066 7.25011H14H14.75V8.75011H14H2.81066L7.53033 13.4698L8.06066 14.0001L7 15.0608L6.46967 14.5304L0.469669 8.53044V7.46978L6.46967 1.46978Z"
      />
    </svg>
  );
};

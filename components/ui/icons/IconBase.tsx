import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  viewBox: string;
  styleName: string;
}

export const IconBase: FC<Props> = ({ children, viewBox, styleName }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={classNames.default("fill-current my-auto", styleName)}
    >
      {children}
    </svg>
  );
};

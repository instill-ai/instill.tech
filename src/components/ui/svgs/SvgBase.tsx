import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  viewBox: string;
  styleName?: string;
}

export const SvgBase: FC<Props> = ({ viewBox, styleName, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      className={styleName}
    >
      {children}
    </svg>
  );
};

import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName: string;
}

export const RightArrowIcon: FC<Props> = ({ styleName }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={classNames.default("fill-current", styleName)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5303 3.46966L11 2.93933L9.93934 3.99999L10.4697 4.53032L15.1893 9.24999H4H3.25V10.75H4H15.1893L10.4697 15.4697L9.93934 16L11 17.0607L11.5303 16.5303L17.5303 10.5303V9.46966L11.5303 3.46966Z"
      />
    </svg>
  );
};

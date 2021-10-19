import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName: string;
}

export const ChevonDownIcon: FC<Props> = ({ styleName }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames.default("fill-current my-auto", styleName)}
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};

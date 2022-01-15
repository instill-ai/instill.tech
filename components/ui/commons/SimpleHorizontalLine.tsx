import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const SimpleHorizontalLine: FC<Props> = ({ styleName }) => {
  return (
    <div className={classNames.default("block w-full border-b", styleName)} />
  );
};

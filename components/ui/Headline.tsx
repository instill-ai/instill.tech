import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const Headline: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "font-mono font-semibold text-[64px] leading-[83.2px] mx-auto text-center text-instillGray05",
        styleName
      )}
    >
      Where vision Ai made for all
    </div>
  );
};

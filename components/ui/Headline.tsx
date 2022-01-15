import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const Headline: FC<Props> = ({ styleName }) => {
  return (
    <h1
      className={classNames.default(
        "font-mono instill-text-h1 mx-auto text-center text-instillGray05",
        styleName
      )}
    >
      Where vision Ai made for all
    </h1>
  );
};

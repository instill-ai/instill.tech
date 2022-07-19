import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const Headline: FC<Props> = ({ styleName }) => {
  return (
    <h1
      className={classNames.default(
        "instill-text-h1 font-mono text-instillGray05",
        styleName
      )}
    >
      Visual Data Preparation Made for All
    </h1>
  );
};

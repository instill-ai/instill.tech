import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const Headline: FC<Props> = ({ styleName }) => {
  return (
    <h1
      className={classNames.default(
        "font-mono instill-text-h1 text-instillGray05",
        styleName
      )}
    >
      Where Visual Data Preparation Made for All
    </h1>
  );
};

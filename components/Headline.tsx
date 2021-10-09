import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  headlineText: string;
  styleName?: string;
}

export const Headline: FC<Props> = ({ headlineText, styleName }) => {
  return (
    <h1
      className={classNames.default(
        "font-sans text-center text-black font-semibold text-6xl",
        styleName
      )}
    >
      {headlineText}
    </h1>
  );
};

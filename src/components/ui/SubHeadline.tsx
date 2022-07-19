import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const SubHeadline: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "font-sans text-lg font-light text-instillGray05 sm:text-2xl",
        styleName
      )}
    >
      Empower modern data stack, tapping the value of unstructured visual data
      with our open source community.
    </div>
  );
};

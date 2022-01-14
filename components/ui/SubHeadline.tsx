import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const SubHeadline: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "font-sans font-light text-2xl text-instillGray05 mx-auto text-center",
        styleName
      )}
    >
      Empower modern data stack, tapping the value of unstructured visual data
      with our open source community.
    </div>
  );
};

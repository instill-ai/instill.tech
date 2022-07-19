import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const CopyRightText: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "instill-text-body text-instillGray30",
        styleName
      )}
    >
      © 2022 Instill AI Ltd.
    </div>
  );
};

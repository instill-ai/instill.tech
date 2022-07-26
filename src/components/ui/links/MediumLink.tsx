import { FC, useCallback } from "react";
import { MediumIcon } from "../icons/MediumIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGrey30 */
  iconStyle?: string;
}

export const MediumLink: FC<Props> = ({ iconStyle }) => {
  const style = iconStyle ? iconStyle : "w-4 text-instillGrey30";
  return (
    <LinkBase
      styleName={classNames.default("flex")}
      href="https://medium.com/instill-ai"
    >
      <MediumIcon styleName={style} />
    </LinkBase>
  );
};

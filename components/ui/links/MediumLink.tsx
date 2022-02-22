import { FC, useCallback } from "react";
import { MediumIcon } from "../icons/MediumIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { sendAmplitudeData } from "../../../lib/amplitude";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGray30 */
  iconStyle?: string;
}

export const MediumLink: FC<Props> = ({ iconStyle }) => {
  const handleClick = useCallback(() => {
    sendAmplitudeData("to_medium", { type: "navigation" });
  }, []);

  const style = iconStyle ? iconStyle : "w-4 text-instillGray30";
  return (
    <LinkBase
      styleName={classNames.default("flex")}
      href="https://medium.com/instill-ai"
      onClick={handleClick}
    >
      <MediumIcon styleName={style} />
    </LinkBase>
  );
};

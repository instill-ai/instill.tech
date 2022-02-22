import { FC, useCallback } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { sendAmplitudeData } from "../../../lib/amplitude";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGray30 */
  iconStyle?: string;
}

export const GithubIconLink: FC<Props> = ({ iconStyle }) => {
  const style = iconStyle ? iconStyle : "w-4 text-instillGray30";

  const handleClick = useCallback(() => {
    sendAmplitudeData("to_github", { type: "navigation" });
  }, []);

  return (
    <LinkBase
      styleName={classNames.default("flex")}
      href="https://github.com/instill-ai"
      onClick={handleClick}
    >
      <GithubIcon styleName={style} />
    </LinkBase>
  );
};

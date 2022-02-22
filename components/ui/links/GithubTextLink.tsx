import { FC, useCallback } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { sendAmplitudeData } from "../../../lib/amplitude";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGray30 */
  styleName?: string;
}

export const GithubTextLink: FC<Props> = ({ styleName }) => {
  const style = styleName
    ? styleName
    : "instill-text-body text-instillGray30 hover:text-instillGray05";

  const handleClick = useCallback(() => {
    sendAmplitudeData("to_github", { type: "navigation" });
  }, []);

  return (
    <LinkBase
      styleName={classNames.default("flex", style)}
      href="https://github.com/instill-ai"
      onClick={handleClick}
    >
      <p className="my-auto">GitHub</p>
    </LinkBase>
  );
};

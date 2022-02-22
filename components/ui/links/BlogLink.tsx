import { FC, useCallback } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { sendAmplitudeData } from "../../../lib/amplitude";

interface Props {
  /** textSize and width - tailwindCSS based, default: instill-text-body text-white */
  styleName?: string;
}

export const BlogLink: FC<Props> = ({ styleName }) => {
  const style = styleName
    ? styleName
    : "instill-text-body text-instillGray30 hover:text-instillGray05";

  const handleClick = useCallback(() => {
    sendAmplitudeData("to_blog", { type: "navigation" });
  }, []);

  return (
    <LinkBase
      href="https://blog.instill.tech"
      styleName={classNames.default("flex", style)}
      onClick={handleClick}
    >
      <p className="my-auto">Blog</p>
    </LinkBase>
  );
};

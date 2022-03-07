import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";

interface Props {
  styleName?: string;

  /** Previous page's link */
  url: string;
}

export const BackToPreviousPageLink: FC<Props> = ({ styleName, url }) => {
  return (
    <LinkBase
      href={url}
      styleName={classNames.default("flex flex-row gap-x-5 group", styleName)}
    >
      <LeftArrowIcon styleName="my-auto w-[15px] h-[15px] text-instillGray30 group-hover:text-instillGray05" />
      <p className="instill-text-body text-instillGray30 group-hover:text-instillGray05">
        Back
      </p>
    </LinkBase>
  );
};

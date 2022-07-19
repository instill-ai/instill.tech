import { FC } from "react";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ButtonBase } from "../buttons/ButtonBase";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const ExplorePleaseLink: FC<Props> = ({ styleName }) => {
  return (
    <LinkBase
      href="#landing-page-banner"
      styleName={classNames.default("flex flex-col group", styleName)}
    >
      <p className="mx-auto text-instillBlue30 group-hover:text-[#236698]">
        Explore
      </p>
      <RightArrowIcon styleName="rotate-90 mt-5 mx-auto w-10 h-10 text-instillBlue30 group-hover:text-[#236698]" />
    </LinkBase>
  );
};

import { FC } from "react";
import { MediumIcon } from "../icons/MediumIcon";
import { LinkBase } from "./LinkBase";

interface Props {
  styleName?: string;
  href: string;
}

export const MediumLink: FC<Props> = ({ styleName, href }) => {
  const style = styleName ? styleName : "flex w-4 text-instillGray30";
  return (
    <LinkBase styleName={style} href={href}>
      <MediumIcon />
    </LinkBase>
  );
};

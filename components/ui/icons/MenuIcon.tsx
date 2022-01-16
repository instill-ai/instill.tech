import { FC } from "react";
import { IconBase } from "./IconBase";

interface Props {
  styleName: string;
}

export const MenuIcon: FC<Props> = ({ styleName }) => {
  return (
    <IconBase styleName={styleName} viewBox="0 0 40 40">
      <line x1="9" y1="14" x2="30" y2="14" stroke="#F7F7F7" strokeWidth="2" />
      <line x1="9" y1="20" x2="30" y2="20" stroke="#F7F7F7" strokeWidth="2" />
      <line x1="15" y1="26" x2="30" y2="26" stroke="#F7F7F7" strokeWidth="2" />
    </IconBase>
  );
};

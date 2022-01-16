import { FC } from "react";
import { IconBase } from "./IconBase";

interface Props {
  styleName: string;
}

export const CrossIcon: FC<Props> = ({ styleName }) => {
  return (
    <IconBase viewBox="0 0 40 40" styleName={styleName}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0001 21.4142L28.293 29.7071L29.7072 28.2929L21.4143 20L29.7072 11.7071L28.293 10.2929L20.0001 18.5858L11.7072 10.2929L10.293 11.7071L18.5859 20L10.293 28.2929L11.7072 29.7071L20.0001 21.4142Z"
      />
    </IconBase>
  );
};

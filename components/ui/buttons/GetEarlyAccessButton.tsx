import { FC } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const GetEarlyAccessButton: FC<Props> = ({ styleName }) => {
  return (
    <ButtonBase styleName={styleName} variant="contained" color="primary">
      Get early access
    </ButtonBase>
  );
};

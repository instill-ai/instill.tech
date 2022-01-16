import { FC } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
  onClick?: () => void;
  styleName?: string;
}

export const SubscribeEmailButton: FC<Props> = ({ onClick, styleName }) => {
  return (
    <ButtonBase
      onClick={onClick}
      styleName={styleName}
      type="submit"
      variant="contained"
      color="primary"
    >
      Subscribe
    </ButtonBase>
  );
};

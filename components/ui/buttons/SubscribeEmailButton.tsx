import { FC } from "react";
import { RightArrowIcon } from "../icons/RightArrowIcon";
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
      color="transparant"
      endIcon={
        <RightArrowIcon styleName="w-[14px] h-[14px] text-instillBlue30" />
      }
    >
      <p className="my-auto">Subscribe</p>
    </ButtonBase>
  );
};

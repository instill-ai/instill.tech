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
      color="transparent"
      endIcon={
        <RightArrowIcon styleName="my-auto w-[14px] h-[14px] text-instillBlue30 group-hover:text-[#236698]" />
      }
      itemDirection="horizontal"
    >
      <p className="my-auto mr-5 group-hover:text-[#236698]">Subscribe</p>
    </ButtonBase>
  );
};

import { FC } from "react";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const ExplorePleaseButton: FC<Props> = ({ styleName }) => {
  return (
    <ButtonBase
      itemDirection="vertical"
      endIcon={
        <RightArrowIcon styleName="rotate-90 mt-5 mx-auto w-10 h-10 text-instillBlue30" />
      }
      variant="text"
      color="lightWhite"
      styleName={styleName}
    >
      Explore
    </ButtonBase>
  );
};

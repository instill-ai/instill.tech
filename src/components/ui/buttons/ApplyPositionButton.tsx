import { FC, useCallback } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const ApplyPositionButton: FC<Props> = ({ styleName }) => {
  const handleClick = useCallback(() => {
    window.open(
      "https://forms.clickup.com/f/2e88k-1856/90J2JKV7NTVLYD6M1J",
      "_blank"
    );
  }, []);

  return (
    <ButtonBase
      onClick={handleClick}
      styleName={styleName}
      variant="contained"
      color="primary"
    >
      <p className="mx-auto">Start applying</p>
    </ButtonBase>
  );
};

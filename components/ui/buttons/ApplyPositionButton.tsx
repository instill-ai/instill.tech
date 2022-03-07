import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const ApplyPositionButton: FC<Props> = ({ styleName }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    window.open(
      "https://forms.clickup.com/f/2e88k-1856/90J2JKV7NTVLYD6M1J",
      "_blank"
    );
  }, [router]);

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

import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const ApplyPositionButton: FC<Props> = ({ styleName }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/#");
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

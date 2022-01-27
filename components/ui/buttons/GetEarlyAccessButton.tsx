import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const GetEarlyAccessButton: FC<Props> = ({ styleName }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/get-early-access");
  }, [router]);

  return (
    <ButtonBase
      onClick={handleClick}
      styleName={styleName}
      variant="contained"
      color="primary"
    >
      Get early access
    </ButtonBase>
  );
};

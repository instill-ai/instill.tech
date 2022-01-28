import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const GetEarlyAccessButton: FC<Props> = ({ styleName }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/get-access");
  }, [router]);

  return (
    <ButtonBase
      onClick={handleClick}
      styleName={styleName}
      variant="contained"
      color="primary"
    >
      <p className="mx-auto">Get early access</p>
    </ButtonBase>
  );
};

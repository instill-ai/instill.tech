import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { sendAmplitudeData } from "../../../lib/amplitude";
import { DiscordIcon } from "../icons/DiscordIcon";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

export const GetEarlyAccessButton: FC<Props> = ({ styleName }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    sendAmplitudeData("hit_get_early_access_page", { type: "navigation" });
    router.push("/get-access");
  }, [router]);

  return (
    <ButtonBase
      onClick={handleClick}
      styleName={styleName}
      variant="contained"
      color="primary"
    >
      <p className="mx-auto">Get Early Access</p>
    </ButtonBase>
  );
};

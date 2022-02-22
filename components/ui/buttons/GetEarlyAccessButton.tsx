import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { sendAmplitudeData } from "../../../lib/amplitude";
import { ButtonBase } from "./ButtonBase";

interface Props {
  styleName?: string;
}

/**
 *
 * @param styleName - tailwind format style
 * @returns react function component
 * - The style of button and text are fixed.
 * - Use styleName to change position only.
 */

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

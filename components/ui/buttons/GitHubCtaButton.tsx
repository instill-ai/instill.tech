import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { sendAmplitudeData } from "../../../lib/amplitude";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ButtonBase } from "./ButtonBase";

interface Props {}

/**
 *
 * @param styleName - tailwind format style
 * @returns react function component
 * - The style of button and text are fixed.
 * - Use styleName to change position only.
 */

export const GithubCtaButton: FC<Props> = () => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    sendAmplitudeData("to_github", { type: "navigation" });
    router.push("https://github.com/instill-ai");
  }, [router]);

  return (
    <ButtonBase
      endIcon={<RightArrowIcon styleName="ml-6 w-[15px] h-[15px]" />}
      variant="text"
      color="lightWhite"
      onClick={handleClick}
      itemDirection="horizontal"
    >
      See on GitHub
    </ButtonBase>
  );
};

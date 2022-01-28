import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ButtonBase } from "./ButtonBase";

interface Props {}

export const GithubCtaButton: FC<Props> = () => {
  const router = useRouter();
  const handleClick = useCallback(() => {
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
      See on Github
    </ButtonBase>
  );
};

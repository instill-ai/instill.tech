import { useCallback } from "react";
import { ArrowRightIcon, TextButton } from "@instill-ai/design-system";

const GithubCtaButton = () => {
  const handleClick = useCallback(() => {
    window.open(
      "https://github.com/instill-ai/vdp",
      "_blank",
      "noopener noreferrer"
    );
  }, []);

  return (
    <TextButton
      type="button"
      onClickHandler={handleClick}
      color="primary"
      itemGapX="gap-x-6"
      endIcon={
        <ArrowRightIcon
          width="w-4"
          height="h-4"
          color="fill-instillBlue50 group-hover:fill-instillBlue80"
          position="my-auto"
        />
      }
    >
      <p className="my-auto">See on GitHub</p>
    </TextButton>
  );
};

export default GithubCtaButton;

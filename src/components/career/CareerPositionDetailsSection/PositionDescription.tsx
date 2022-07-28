import { FC, useCallback } from "react";
import cn from "clsx";
import { SolidButton } from "@instill-ai/design-system";
import { ReactMDWrapper } from "../../ReactMDWrapper";

export type PositionDescriptionProps = {
  description: string;
  padding?: string;
  width?: string;
};

export const PositionDescription: FC<PositionDescriptionProps> = ({
  description,
  padding,
  width,
}) => {
  const handleClick = useCallback(() => {
    window.open(
      "https://forms.clickup.com/f/2e88k-1856/90J2JKV7NTVLYD6M1J",
      "_blank",
      "noopener noreferrer"
    );
  }, []);

  return (
    <div className={cn("bg-instillGrey05 p-10", padding, width)}>
      <style jsx global>
        {`
          .career-position-description > ul {
            list-style: url("${process.env
              .NEXT_PUBLIC_BASE_URL}/images/arrow-right.svg") !important;
          }
        `}
      </style>
      <ReactMDWrapper
        content={description}
        styleName="prose-black max-w-none career-position-description mb-[60px]"
      />
      <SolidButton type="button" color="primary" onClickHandler={handleClick}>
        Start applying
      </SolidButton>
    </div>
  );
};

export default PositionDescription;

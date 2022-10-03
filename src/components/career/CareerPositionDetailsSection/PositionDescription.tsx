import { useCallback } from "react";
import cn from "clsx";
import { SolidButton } from "@instill-ai/design-system";
import { ReactMarkdownWrapper } from "@/components/ui";

export type PositionDescriptionProps = {
  description: string;
  padding?: string;
  width?: string;
};

export const PositionDescription = ({
  description,
  padding,
  width,
}: PositionDescriptionProps) => {
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
      <ReactMarkdownWrapper
        content={description}
        prose="prose-black"
        width="max-w-none"
        additionalClassname="career-position-description"
        marginBottom="mb-[60px]"
      />
      <SolidButton type="button" color="primary" onClickHandler={handleClick}>
        Start applying
      </SolidButton>
    </div>
  );
};

export default PositionDescription;

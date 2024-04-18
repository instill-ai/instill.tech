import { useCallback } from "react";
import cn from "clsx";
import { ArrowRightIcon, Button, SolidButton } from "@instill-ai/design-system";

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
            padding-left: 50px !important;
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

      <div className="flex justify-center">
        <Button
          variant="primary"
          size="lg"
          onClick={handleClick}
          className="mx-auto"
        >
          Apply now
        </Button>
      </div>
    </div>
  );
};

import { useCallback } from "react";
import cn from "clsx";
import { Button } from "@instill-ai/design-system";

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
    <div
      className={cn(
        "bg-[#FFFFFF99] bg-opacity-80 p-[30px] backdrop-blur-sm",
        padding,
        width
      )}
    >
      <style jsx global>
        {`
          .career-position-description > ul {
            font-family: "IBM Plex Mono";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            color: #000000b2;
            list-style:;
          }
          .career-position-description > h3 {
            color: #000000b2;
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

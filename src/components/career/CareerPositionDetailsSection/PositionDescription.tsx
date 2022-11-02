import { useCallback } from "react";
import cn from "clsx";
import { ArrowRightIcon, SolidButton } from "@instill-ai/design-system";
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
      <SolidButton
        position="mx-auto"
        type="button"
        color="primaryLight"
        onClickHandler={handleClick}
        itemGapX="gap-x-6"
        endIcon={
          <ArrowRightIcon
            width="w-5 xl:w-[28px]"
            height="h-5 xl:h-[28px]"
            color="fill-instillNeonBlue"
            position="my-auto"
          />
        }
      >
        <p className="text-lg xl:text-2xl">Start applying</p>
      </SolidButton>
    </div>
  );
};

export default PositionDescription;

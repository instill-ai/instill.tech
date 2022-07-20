import { FC } from "react";
import { ReactMDWrapper } from "../../ReactMDWrapper";
import { ApplyPositionButton } from "../../ui/buttons/ApplyPositionButton";
import cn from "clsx";

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
  return (
    <div className={cn("bg-instillGray05 p-10", padding, width)}>
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
      <ApplyPositionButton styleName="mx-auto" />
    </div>
  );
};

export default PositionDescription;

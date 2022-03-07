import { FC } from "react";
import { ReactMDWrapper } from "../../ReactMDWrapper";
import * as classNames from "classnames";
import { ApplyPositionButton } from "../buttons/ApplyPositionButton";

interface Props {
  /** <Markdown formate> */
  description: string;

  /** <Tailwind formate> */
  styleName?: string;
}

export const CareerPositionDescriptionBlock: FC<Props> = ({
  description,
  styleName,
}) => {
  return (
    <div className={classNames.default("bg-instillGray05 p-10", styleName)}>
      <style jsx global>{`
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

import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** <Tailwind format> - textSize and color */
  styleName?: string;

  /** Whether we are hiring */
  hiring: boolean;
}

export const CareerPageLink: FC<Props> = ({ styleName, hiring }) => {
  return (
    <LinkBase
      href="/career"
      styleName={classNames.default("flex group", styleName)}
    >
      <div className="flex flex-row gap-x-[5px] py-1.5">
        <p className="my-auto text-instillGrey30 group-hover:text-instillGrey05">
          Career
        </p>
        {hiring && (
          <div>
            <p className="rounded-full border border-instillYellow px-2.5 py-[2px] font-mono text-[10px] font-normal leading-[14px] text-instillGrey30 group-hover:text-instillYellow">
              hiring
            </p>
          </div>
        )}
      </div>
    </LinkBase>
  );
};

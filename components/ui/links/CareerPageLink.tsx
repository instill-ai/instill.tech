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
      <div className="flex flex-row py-1.5 gap-x-[5px]">
        <p className="my-auto text-instillGray30 group-hover:text-instillGray05">
          Career
        </p>
        {hiring && (
          <div>
            <p className="border rounded-full px-2.5 py-[2px] text-instillGray30 group-hover:text-instillYellow border-instillYellow font-mono font-normal text-[10px] leading-[14px]">
              hiring
            </p>
          </div>
        )}
      </div>
    </LinkBase>
  );
};

import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** <Tailwind format> - textSize and color, default: instill-text-body text-instillGray30 hover:text-instillGray05 */
  styleName?: string;

  /** Whether we are hiring */
  hiring: boolean;
}

export const CareerPageLink: FC<Props> = ({ styleName, hiring }) => {
  const style = styleName
    ? styleName
    : "instill-text-body text-instillGray30 hover:text-instillGray05";
  return (
    <LinkBase href="/career" styleName={classNames.default("flex", style)}>
      <div className="flex flex-row py-1.5 gap-x-[5px]">
        <p className="my-auto">Career</p>
        {hiring && (
          <div>
            <p className="border rounded-full px-2.5 py-[2px] border-instillYellow font-mono font-normal text-[10px] leading-[14px]">
              hiring
            </p>
          </div>
        )}
      </div>
    </LinkBase>
  );
};

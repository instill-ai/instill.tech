import { FC } from "react";
import CustomLink from "../CustomLink";
import * as classNames from "classnames";

interface Props {
  href: string;
  title: string;
  styleName?: string;
}

export const GeneralLinkButton: FC<Props> = ({ href, title, styleName }) => {
  return (
    <CustomLink href={href}>
      <div className="flex">
        <div
          className={classNames.default(
            "px-6 py-2 border border-gray-700 rounded-md cursor-pointer hover:bg-gray-200",
            styleName
          )}
        >
          {title}
        </div>
      </div>
    </CustomLink>
  );
};
import { FC } from "react";
import * as classNames from "classnames";
import { ArrowRightShortIcon } from "./icons/ArrowRightShortIcon";

interface Props {
  featureName: string;
  styleName: string;
}

export const NewFeatureBanner: FC<Props> = ({ featureName, styleName }) => {
  return (
    <button
      className={classNames.default(
        "mx-auto rounded-full p-1 flex flex-row bg-[#063FD1] bg-opacity-[13%] font-sans font-normal",
        styleName
      )}
    >
      <span className="rounded-full px-2 bg-white mr-4">New feature</span>
      <p className="mr-1">{featureName}</p>
      <ArrowRightShortIcon styleName={"w-6 h-6 text-[#063FD1]"} />
    </button>
  );
};

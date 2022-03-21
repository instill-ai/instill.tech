import { FC } from "react";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";
import { AlphaBadgeSvg } from "../svgs/AlphaBadgeSvg";
import * as classNames from "classnames";

interface Props {
  styleName?: string;

  /** Layout
   *  - main: alpha badge horizontal align with title and description, underneath is get early access button
   *  - compact: title and description stick with get early access button and horizontal align with alpha badge
   */
  layout: "main" | "compact";

  /** Color of component background */
  bgColor: "white" | "black";
}

export const SecureYourSpotBlock: FC<Props> = ({
  styleName,
  layout,
  bgColor,
}) => {
  return (
    <div
      className={classNames.default(
        "flex flex-col rounded-[1px] px-10",
        styleName,
        layout === "main" ? "py-[100px]" : "py-10",
        bgColor === "black" ? "bg-instillGray95" : "bg-white"
      )}
    >
      <div
        className={classNames.default(
          "grid grid-cols-1 gap-x-6 md:grid-cols-2",
          layout === "main" && "mb-20"
        )}
      >
        <div className="flex md:col-start-2">
          <AlphaBadgeSvg styleName="w-full md:w-[355px] mx-auto" />
        </div>
        <div
          className={classNames.default(
            "flex flex-col pt-20 md:row-start-1 md:pt-0",
            layout === "compact" ? "mb-auto" : ""
          )}
        >
          <div className="flex flex-col">
            <h3
              className={classNames.default(
                "instill-text-h3 mb-2.5",
                bgColor === "black"
                  ? "text-instillGray05"
                  : "text-instillGray95"
              )}
            >
              Secure Your Spot
            </h3>
            <p
              className={classNames.default(
                "instill-text-body",
                bgColor === "black"
                  ? "text-instillGray05"
                  : "text-instillGray95"
              )}
            >
              We&#39;re now in private alpha. Join and see first-hand how
              Instill AI can help adopt Vision AI in your company.
            </p>
          </div>
        </div>
        {layout === "compact" && <GetEarlyAccessButton styleName="mr-auto" />}
      </div>
      {layout === "main" && <GetEarlyAccessButton styleName="mx-auto" />}
    </div>
  );
};

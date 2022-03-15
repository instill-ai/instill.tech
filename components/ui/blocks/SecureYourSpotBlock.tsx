import { FC } from "react";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";
import { AlphaBadgeSvg } from "../svgs/AlphaBadgeSvg";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const SecureYourSpotBlock: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "flex flex-col rounded-[1px] py-[100px] px-10",
        styleName
      )}
    >
      <div className="mb-20 grid grid-cols-1 gap-x-6 md:grid-cols-2">
        <div className="flex md:col-start-2">
          <AlphaBadgeSvg styleName="w-full md:w-[355px] mx-auto" />
        </div>
        <div className="flex flex-col pt-20 md:row-start-1 md:pt-0">
          <div className="flex flex-col">
            <h3 className="instill-text-h3 mb-2.5 text-instillGray05">
              Secure Your Spot
            </h3>
            <p className="instill-text-body text-instillGray05">
              We&#39;re now in private alpha. Join and see first-hand how
              Instill AI can help adopt Vision AI in your company.
            </p>
          </div>
        </div>
      </div>
      <GetEarlyAccessButton styleName="mx-auto" />
    </div>
  );
};

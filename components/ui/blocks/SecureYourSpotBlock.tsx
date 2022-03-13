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
        "flex flex-col py-[100px] px-10 rounded-[1px] z-50",
        styleName
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-20">
        <div className="flex w-full h-full md:col-start-2">
          <AlphaBadgeSvg styleName="w-full m:w-[355px] m-auto" />
        </div>
        <div className="flex flex-col md:row-start-1 pt-20 md:pt-0">
          <div className="flex flex-col my-auto">
            <h3 className="instill-text-h3 text-instillGray05 mb-2.5">
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

import { FC } from "react";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";
import { AlphaBadgeSvg } from "../svgs/AlphaBadgeSvg";
import * as classNames from "classnames";

interface Props {
  styleName: string;
}

export const SecureYourSpotBlock: FC<Props> = ({ styleName }) => {
  return (
    <div className={classNames.default("flex bg-white p-10", styleName)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div className="flex w-full h-full md:col-start-2">
          <AlphaBadgeSvg styleName="sm:w-[355px] m-auto" />
        </div>
        <div className="flex flex-col md:row-start-1">
          <div className="flex flex-col mb-20 sm:mb-[111px]">
            <h3 className="instill-text-h3 text-instillGray95 mb-2.5">
              Secure Your Spot
            </h3>
            <p className="instill-text-body text-instillGray95">
              We&#39;re now in private alpha. Join and see first-hand how
              Instill AI can help adopt Vision AI in your company.
            </p>
          </div>
          <GetEarlyAccessButton styleName="mr-auto" />
        </div>
      </div>
    </div>
  );
};

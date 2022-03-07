import { FC } from "react";
import { InstillAiBadge } from "./svgs/images/InstillAiBadge";
import * as classNames from "classnames";

interface Props {
  /** <Tailwind format> - position and width */
  styleName?: string;
}

export const CareerGeneralIntro: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "flex flex-col md:flex-row w-full gap-y-20 md:gap-y-0 gap-x-20 py-[100px] px-4 md:px-0",
        styleName
      )}
    >
      <InstillAiBadge styleName="w-full md:w-[201px] md:h-[88.5px] lg:w-[402px] lg:h-[177px] flex-shrink-0" />
      <div className="flex flex-col gap-y-5">
        <p className="instill-text-body text-instillGray05">
          We&#39;re looking for passionate and dedicated early members to build
          open-source and highest-quality products for solving a challenging
          issue in the modern data stack. You&#39;ll be joining the founding
          team to establish its strong foundation from the very beginning.
        </p>
        <p className="instill-text-body text-instillGray05">
          This is a great opportunity for those who want to build their career
          with a fast-growing startup at zero to one stage. It is also a
          position for those who value learning for the long term above earning
          in the short term. Your colleagues are a bunch of super self-motivated
          Vision AI missionaries and data tooling practitioners. You will impact
          the company direction and help Instill AI build its strong foundation
          and shape its open-source community.
        </p>
      </div>
    </div>
  );
};

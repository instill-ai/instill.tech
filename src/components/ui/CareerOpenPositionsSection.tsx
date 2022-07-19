import { FC, forwardRef } from "react";
import { OpenPositionList } from "./lists/OpenPositionList";
import * as classNames from "classnames";
import { TPositionDetails } from "../../types/instill";

type Ref = HTMLDivElement;

interface Props {
  positions: TPositionDetails[];

  /** <Tailwind config> - position and width */
  styleName?: string;
}

const CareerOpenPositionsSection = forwardRef<Ref, Props>(
  ({ positions, styleName }, ref) => {
    return (
      <div
        className={classNames.default(
          "flex w-full flex-col bg-white py-20",
          styleName
        )}
        ref={ref}
      >
        <div className="mb-10 flex flex-col gap-y-5 px-4 md:px-0">
          <h2 className="instill-text-h2-fixed mx-auto text-instillGray95">
            Open Roles
          </h2>
          <p className="text-cneter instill-text-body-fixed mx-auto text-center text-instillGray95">
            We&#39;re on a mission to make Vision Al highly accessbile to
            everyone. Join us and make a dent in the universe!
          </p>
        </div>
        <OpenPositionList
          styleName="md:w-11/12 md:mx-auto"
          positions={positions}
        />
      </div>
    );
  }
);

CareerOpenPositionsSection.displayName = "CareerOpenPositionsSection";

export default CareerOpenPositionsSection;

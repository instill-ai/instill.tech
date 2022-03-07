import { FC, forwardRef } from "react";
import { IClickUpTask } from "../../types/clickUp";
import { OpenPositionList } from "./lists/OpenPositionList";
import * as classNames from "classnames";

type Ref = HTMLDivElement;

interface Props {
  positions: IClickUpTask[];

  /** <Tailwind config> - position and width */
  styleName?: string;
}

const CareerOpenPositionsSection = forwardRef<Ref, Props>(
  ({ positions, styleName }, ref) => {
    return (
      <div
        className={classNames.default(
          "flex flex-col w-full py-20 bg-white",
          styleName
        )}
        ref={ref}
      >
        <div className="flex flex-col gap-y-5 mb-10 px-4 md:px-0">
          <h2 className="mx-auto instill-text-h2-fixed text-instillGray95">
            Open Roles
          </h2>
          <p className="mx-auto text-cneter instill-text-body-fixed text-instillGray95 text-center">
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

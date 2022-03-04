import { FC } from "react";
import { IClickUpTask } from "../../types/clickup";
import { OpenPositionList } from "./lists/OpenPositionList";
import * as classNames from "classnames";

interface Props {
  positions: IClickUpTask[];

  /** <Tailwind config> - position and width */
  styleName?: string;
}

export const CareerOpenPositionsSection: FC<Props> = ({
  positions,
  styleName,
}) => {
  return (
    <div
      className={classNames.default(
        "flex flex-col w-full py-20 bg-white",
        styleName
      )}
    >
      <div className="flex flex-col gap-y-5 mb-10">
        <h2 className="mx-auto instill-text-h2 text-instillGray95">
          Open Roles
        </h2>
        <p className="mx-auto text-cneter instill-text-body text-instillGray95">
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
};

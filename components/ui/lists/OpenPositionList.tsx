import { FC } from "react";
import { IClickUpTask } from "../../../types/clickup";
import { OpenPositionListUnit } from "./OpenPositionListUnit";
import * as classNames from "classnames";

interface Props {
  positions: IClickUpTask[];

  /** <Tailwind config> - position and width */
  styleName?: string;
}

export const OpenPositionList: FC<Props> = ({ positions, styleName }) => {
  console.log(positions);
  return (
    <div className={classNames.default("flex flex-col", styleName)}>
      {positions.map((position) => {
        const locationIndex = position.custom_fields.findIndex(
          (field) => field.name === "location"
        );

        const location = position.custom_fields[locationIndex];

        const workTypeIndex = position.custom_fields.findIndex(
          (field) => field.name === "work_type"
        );

        const workType = position.custom_fields[workTypeIndex];

        return (
          <OpenPositionListUnit
            name={position.name}
            location={location.type_config.options[location.value].name}
            workType={workType.type_config.options[workType.value].name}
            createdAt={position.date_created}
            key={position.id}
          />
        );
      })}
    </div>
  );
};

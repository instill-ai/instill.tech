import { FC } from "react";
import { GetEarlyAccessButton } from "./buttons/GetEarlyAccessButton";
import { JoinDiscordButton } from "./buttons/JoinDiscordButton";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const MainCtaGroup: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 sm:gap-y-0",
        styleName
      )}
    >
      <GetEarlyAccessButton />
      <JoinDiscordButton />
    </div>
  );
};

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
      className={classNames.default("flex flex-row gap-x-5 mx-auto", styleName)}
    >
      <JoinDiscordButton />
      <GetEarlyAccessButton />
    </div>
  );
};

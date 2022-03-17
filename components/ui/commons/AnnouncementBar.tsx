import { FC } from "react";
import { CrossIcon } from "../icons/CrossIcon";

interface Props {}

export const AnnouncementBar: FC<Props> = ({ children }) => {
  return (
    <div className="relative flex w-full bg-instillYellow py-2.5">
      <div className="mx-auto flex">{children}</div>
      <div className="absolute right-4 top-0 flex h-full">
        <CrossIcon styleName="my-auto w-5 h-5 text-instillGray95" />
      </div>
    </div>
  );
};

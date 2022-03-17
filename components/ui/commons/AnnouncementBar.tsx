import { FC, useCallback } from "react";
import { useAnnouncementBarCtx } from "../../../context/AnnouncementBarContext";
import { CrossIcon } from "../icons/CrossIcon";

interface Props {}

export const AnnouncementBar: FC<Props> = ({ children }) => {
  const { setEnableAnnouncementBar } = useAnnouncementBarCtx();

  const handleClick = useCallback(() => {
    setEnableAnnouncementBar(false);
  }, []);

  return (
    <div className="flex w-full gap-x-2 bg-instillYellow py-2.5 px-4">
      <div className="mx-auto flex">{children}</div>
      <div
        onClick={handleClick}
        className="my-auto flex hover:cursor-pointer hover:bg-instillGray15"
      >
        <CrossIcon styleName="my-auto w-5 h-5 text-instillGray95" />
      </div>
    </div>
  );
};

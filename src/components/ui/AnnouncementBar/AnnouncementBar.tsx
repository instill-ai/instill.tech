import { FC, useCallback } from "react";
import { useAnnouncementBarCtx } from "@/contexts/AnnouncementBarContext";
import { CrossIcon } from "@/components/ui/icons/CrossIcon";

const AnnouncementBar: FC = ({ children }) => {
  const { setEnableAnnouncementBar } = useAnnouncementBarCtx();

  const handleClick = useCallback(() => {
    setEnableAnnouncementBar(false);
  }, [setEnableAnnouncementBar]);

  return (
    <div className="flex w-full gap-x-2 bg-instillYellow py-2.5 px-4">
      <div className="mx-auto flex">{children}</div>
      <div
        onClick={handleClick}
        data-testid="close-announcement-bar"
        className="my-auto flex hover:cursor-pointer hover:bg-[#FFED8F]"
      >
        <CrossIcon styleName="my-auto w-5 h-5 text-instillGrey95" />
      </div>
    </div>
  );
};

export default AnnouncementBar;

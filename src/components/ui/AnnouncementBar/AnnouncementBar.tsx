import { FC, useCallback } from "react";
import { useAnnouncementBarCtx } from "@/contexts/AnnouncementBarContext";
import { CrossIcon } from "@instill-ai/design-system";

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
        <CrossIcon
          width="w-5"
          height="h-5"
          color="fill-instillGrey95"
          position="my-auto"
        />
      </div>
    </div>
  );
};

export default AnnouncementBar;

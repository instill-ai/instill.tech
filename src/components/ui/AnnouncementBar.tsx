import { ReactNode, useCallback } from "react";
import { CrossIcon } from "@instill-ai/design-system";
import { useInstillAICtx } from "@/contexts/InstillAIContext";
import cn from "clsx";

export type AnnouncementBarProps = {
  children?: ReactNode;
  className?: string;
  close?: boolean;
};

export const AnnouncementBar = ({
  children,
  className,
  close,
}: AnnouncementBarProps) => {
  const { setEnableAnnouncementBar } = useInstillAICtx();

  const handleClick = useCallback(() => {
    if (setEnableAnnouncementBar) {
      setEnableAnnouncementBar(false);
    }
  }, [setEnableAnnouncementBar]);

  return (
    <div
      data-testid="announcement-bar"
      className={cn(
        "flex w-full gap-x-2  px-4 py-2.5",
        className ? className : "bg-instillYellow"
      )}
    >
      <div className="mx-auto flex">{children}</div>
      {close ? (
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
      ) : null}
    </div>
  );
};

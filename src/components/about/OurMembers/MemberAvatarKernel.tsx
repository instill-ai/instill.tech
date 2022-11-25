import { forwardRef } from "react";
import Image from "next/future/image";
import { useWindowSize } from "@instill-ai/design-system";
import cn from "clsx";

import { MemberKernel } from "./MemberKernelSvg";
import { Nullable } from "@/types/instill";

export type MemberAvatarKernelProps = {
  id: string;
  targetMemberId: Nullable<string>;
  kernelColorRectLocation: string[];
  kernelColor: string;
  avatarAlt: string;
  avatarWithFrameDesktop: string;
  avatarWithFrameMobile: string;
  onClickHandler: (memberId: string) => void;

  /** Every avatar's default will be covered by kernel, this props will turn kernel's opacity to 0 */
  openKernel: boolean;
};

export const MemberAvatarKernel = forwardRef<
  Nullable<HTMLDivElement>,
  MemberAvatarKernelProps
>(
  (
    {
      avatarAlt,
      avatarWithFrameDesktop,
      avatarWithFrameMobile,
      onClickHandler,
      openKernel,
      kernelColorRectLocation,
      kernelColor,
      id,
      targetMemberId,
    },
    ref
  ) => {
    const windowSize = useWindowSize();

    return (
      <div
        className="relative grid h-full w-full max-w-[360px]"
        onClick={() => onClickHandler(id)}
        ref={ref}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 z-10">
          <Image
            alt={avatarAlt}
            style={{ width: "100%" }}
            fill={true}
            src={
              windowSize && windowSize.width > 768
                ? avatarWithFrameDesktop
                : avatarWithFrameMobile
            }
          />
        </div>
        <MemberKernel
          styleName={cn("w-full z-20 opacity-0 mb-auto cursor-pointer", {
            "md:opacity-100": !openKernel,
            "md:invisible": id === targetMemberId,
          })}
          kernelColorRectLocation={kernelColorRectLocation}
          kernelColor={kernelColor}
          id={id}
        />
      </div>
    );
  }
);

MemberAvatarKernel.displayName = "MemberAvatarKernelBlock";

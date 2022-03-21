import Image from "next/image";
import { FC, forwardRef } from "react";
import { MemberKernelSvg } from "../svgs/images/MemberKernelSvg";
import * as classNames from "classnames";
import { useWindowDimension } from "../../../useWindowDimension";

interface Props {
  id: string;
  targetMemberId: string;
  kernelColorRectLocation: string[];
  kernelColor: string;
  avatarAlt: string;
  avatarWithFrameDesktop: string;
  avatarWithFrameMobile: string;
  onClickHandler: (memberId: string) => void;

  /** Every avatar's default will be covered by kernel, this props will turn kernel's opacity to 0 */
  openKernel: boolean;
}

export const MemberAvatarKernelBlock = forwardRef<HTMLDivElement, Props>(
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
    const windowDimenstion = useWindowDimension();

    return (
      <div
        className="relative grid h-full w-full max-w-[360px]"
        onClick={() => onClickHandler(id)}
        ref={ref}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 z-10">
          <Image
            alt={avatarAlt}
            width={358}
            height={358}
            layout="responsive"
            src={
              windowDimenstion && windowDimenstion.width > 768
                ? avatarWithFrameDesktop
                : avatarWithFrameMobile
            }
          />
        </div>
        <MemberKernelSvg
          styleName={classNames.default(
            "w-full z-20 opacity-0 mb-auto cursor-pointer",
            {
              "md:opacity-100": !openKernel,
              "md:invisible": id === targetMemberId,
            }
          )}
          kernelColorRectLocation={kernelColorRectLocation}
          kernelColor={kernelColor}
          id={id}
        />
      </div>
    );
  }
);

MemberAvatarKernelBlock.displayName = "MemberAvatarKernelBlock";

import Image from "next/image";
import { FC, forwardRef } from "react";
import { MemberKernelSvg } from "../svgs/images/MemberKernelSvg";
import * as classNames from "classnames";
import { debounce } from "../../../lib/utilities";
import { useWindowDimension } from "../../../useWindowDimension";

interface Props {
  id: string;
  kernelColorRectLocation: string[];
  kernelColor: string;
  avatarAlt: string;
  avatarWithFrameDesktop: string;
  avatarWithFrameMobile: string;
  onMouseEnterHandler: (memberId: string) => void;
  onMouseLeaveHandler: () => void;
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
      onMouseEnterHandler,
      onMouseLeaveHandler,
      onClickHandler,
      openKernel,
      kernelColorRectLocation,
      kernelColor,
      id,
    },
    ref
  ) => {
    const windowDimenstion = useWindowDimension();

    return (
      <div
        className="relative flex w-full max-w-[360px]"
        onMouseEnter={() => debounce(onMouseEnterHandler(id), 150)}
        onMouseLeave={() => debounce(onMouseLeaveHandler(), 150)}
        onClick={() => onClickHandler(id)}
        ref={ref}
      >
        <MemberKernelSvg
          styleName={classNames.default("w-full z-20 opacity-0 mb-auto", {
            "md:opacity-100": !openKernel,
          })}
          kernelColorRectLocation={kernelColorRectLocation}
          kernelColor={kernelColor}
          id={id}
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 block">
          <Image
            alt={avatarAlt}
            width={360}
            height={360}
            layout="responsive"
            src={
              windowDimenstion && windowDimenstion.width > 768
                ? avatarWithFrameDesktop
                : avatarWithFrameMobile
            }
          />
        </div>
      </div>
    );
  }
);

MemberAvatarKernelBlock.displayName = "MemberAvatarKernelBlock";

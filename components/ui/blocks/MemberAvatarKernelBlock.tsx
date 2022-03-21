import Image from "next/image";
import { FC, forwardRef } from "react";
import { MemberKernelSvg } from "../svgs/images/MemberKernelSvg";
import * as classNames from "classnames";
import { debounce } from "../../../lib/utilities";

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
    return (
      <div
        className="relative flex w-full max-w-[360px]"
        onMouseEnter={() => debounce(onMouseEnterHandler(id), 150)}
        onMouseLeave={() => debounce(onMouseLeaveHandler(), 150)}
        onClick={() => onClickHandler(id)}
        ref={ref}
      >
        <MemberKernelSvg
          styleName={classNames.default(
            "w-full hover:opacity-0 z-20 opacity-0 md:opacity-100 mb-auto",
            {
              "opacity-0": openKernel,
            }
          )}
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
            src={avatarWithFrameDesktop}
          />
        </div>
      </div>
    );
  }
);

MemberAvatarKernelBlock.displayName = "MemberAvatarKernelBlock";

import Image from "next/image";
import { FC } from "react";
import { MemberKernelSvg } from "../svgs/images/MemberKernelSvg";
import * as classNames from "classnames";

interface Props {
  id: string;
  kernelColorRectLocation: string[];
  kernelColor: string;
  avatarAlt: string;
  avatarWithFrameDesktop: string;
  avatarWithFrameMobile: string;
  onMouseEnterHandler: (memberId: string) => void;
  onMouseLeaveHandler: () => void;

  /** Every avatar's default will be covered by kernel, this props will turn kernel's opacity to 0 */
  openKernel: boolean;
}

export const MemberAvatarKernelBlock: FC<Props> = ({
  avatarAlt,
  avatarWithFrameDesktop,
  avatarWithFrameMobile,
  onMouseEnterHandler,
  onMouseLeaveHandler,
  openKernel,
  kernelColorRectLocation,
  kernelColor,
  id,
}) => {
  return (
    <div
      className="relative flex w-full max-w-[360px]"
      onMouseEnter={() => onMouseEnterHandler(id)}
      onMouseLeave={() => onMouseLeaveHandler()}
    >
      <MemberKernelSvg
        styleName={classNames.default(
          "w-full h-full hover:opacity-0 z-20 opacity-0 md:opacity-100",
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
};

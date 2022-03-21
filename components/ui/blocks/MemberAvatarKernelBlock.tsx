import Image from "next/image";
import { FC } from "react";
import { debounce } from "../../../lib/utilities";
import { MemberKernelSvg } from "../svgs/images/MemberKernelSvg";

interface Props {
  id: string;
  kernelColorCubeLocation: string[];
  kernelColor: string;
  avatarAlt: string;
  avatarWithFrameDesktop: string;
  avatarWithFrameMobile: string;
  onMouseEnterHandler: (memberId: string) => void;
  onMouseLeaveHandler: () => void;
}

export const MemberAvatarKernelBlock: FC<Props> = ({
  avatarAlt,
  avatarWithFrameDesktop,
  avatarWithFrameMobile,
  onMouseEnterHandler,
  onMouseLeaveHandler,
  id,
}) => {
  return (
    <div
      className="relative flex w-full max-w-[360px]"
      onMouseEnter={() => onMouseEnterHandler(id)}
      onMouseLeave={() => onMouseLeaveHandler()}
    >
      <MemberKernelSvg styleName="w-full h-full hover:opacity-0 z-20" />
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

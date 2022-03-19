import Image from "next/image";
import { FC } from "react";
import { MemberKernelSvg } from "../svgs/images/MemberKernelSvg";

interface Props {
  kernelColorCubeLocation: string[];
  kernelColor: string;
  avatarAlt: string;
  avatarWithFrameDesktop: string;
  avatarWithFrameMobile: string;
}

export const MemberAvatarKernelBlock: FC<Props> = ({
  avatarAlt,
  avatarWithFrameDesktop,
  avatarWithFrameMobile,
}) => {
  return (
    <div className="relative flex w-full">
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

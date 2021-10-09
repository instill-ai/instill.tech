import { FC } from "react";
import Image from "next/image";

interface Props {
  sizeStyle: string;
}

export const TestAvatar: FC<Props> = ({ sizeStyle }) => {
  return (
    <div className={"relative rounded-full object-contain " + sizeStyle}>
      <Image alt="test avatar" src="/images/test-avatar.png" layout="fill" />
    </div>
  );
};

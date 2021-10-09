import { FC } from "react";
import Image from "next/image";

interface Props {
  sizeStyle: string;
}

export const TestMainScreenMockup: FC<Props> = ({ sizeStyle }) => {
  return (
    <div className={"relative mx-auto " + sizeStyle}>
      <Image
        alt="test screen mockup"
        layout="fill"
        src="/images/screen-mockup-test.png"
        objectFit="cover"
      />
    </div>
  );
};

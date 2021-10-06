import { FC } from 'react';
import Image from 'next/image';

interface Props {
  sizeStyle: string;
}

const TestMainScreenMockup: FC<Props> = ({ sizeStyle }) => {
  return (
    <div className={'relative mx-auto ' + sizeStyle}>
      <Image
        className="object-contain"
        alt="test screen mockup"
        layout="fill"
        src="/images/screen-mockup-test.png"
      />
    </div>
  );
};

export default TestMainScreenMockup;

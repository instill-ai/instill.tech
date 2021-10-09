import { FC } from 'react';
import Image from 'next/image';
import Avatar from '../assets/image/test-avatar.png';

interface Props {
  sizeStyle: string;
}

const TestAvatar: FC<Props> = ({ sizeStyle }) => {
  return (
    <div className={"relative rounded-full object-contain " + sizeStyle}>
      <Image
        alt="test avatar"
        src="/images/test-avatar.png"
        layout="fill"
      />
    </div>
  );
};

<div></div>;
export default TestAvatar;

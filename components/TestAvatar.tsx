import { FC } from 'react';
import Image from 'next/image';
import Avatar from '../assets/image/test-avatar.png';

interface Props {
  sizeStyle: string;
}

const TestAvatar: FC<Props> = ({ sizeStyle }) => {
  return (
    <div className={"relative " + sizeStyle}>
      <Image
        className="rounded-full object-contain"
        alt="test avatar"
        src="/images/test-avatar.png"
        layout="fill"
      />
    </div>
  );
};

<div></div>;
export default TestAvatar;

import { FC } from 'react';
import Image from 'next/image';
import Avatar from '../assets/image/test-avatar.png';

interface Props {
  size: number;
}

const TestAvatar: FC<Props> = ({ size }) => {
  const sizeStyle = `w-${size} h-${size}`
  return (
    <div className={"relative " + sizeStyle}>
      <Image
        className="rounded-full object-contain"
        alt="test avatar"
        src="/image/test-avatar.png"
        layout="fill"
      />
    </div>
  );
};

<div></div>;
export default TestAvatar;

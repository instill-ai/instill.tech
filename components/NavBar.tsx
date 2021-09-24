import { FC } from 'react';
import GetAccessButton from './buttons/GetAccessButton';
import InstillLogo from './InstillLogo';

interface Props {}

const NavBar: FC<Props> = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row w-full h-20 mb-36 bg-white">
      <div className="mr-auto my-auto">
        <InstillLogo />
      </div>
      <div
        className="ml-auto my-auto"
      >
        <GetAccessButton />
      </div>
    </div>
  );
};

export default NavBar;

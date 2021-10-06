import { FC } from 'react';
import { HeaderButtonType } from '../../types/buttons';
import InstillLogo from '../InstillLogo';
import TestAvatar from '../TestAvatar';
import HeaderButtonGroup from './HeaderButtonGroup';

interface Props {
  buttons: HeaderButtonType[]
}

const Header: FC<Props> = ({ buttons }) => {
  return (
    <div className="flex flex-row flex-1 px-28 h-20">
      <div className="flex flex-row mr-auto my-auto">
        <InstillLogo className={'mr-10 my-auto'} />
        <HeaderButtonGroup buttons={buttons} gapStyle={"gap-x-8"} />
      </div>
      <div className="ml-auto my-auto">
        <TestAvatar sizeStyle={"w-10 h-10"} />
      </div>
    </div>
  );
};

export default Header;

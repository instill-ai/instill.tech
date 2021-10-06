import { FC } from 'react';
import { HeaderButtonType } from '../../types/buttons';
import HeaderButton from '../buttons/HeaderButton';

interface Props {
  gapStyle: string;
  buttons: HeaderButtonType[];
}

const HeaderButtonGroup: FC<Props> = ({ gapStyle, buttons }) => {

  return (
    <div className={'flex flex-row my-auto ' + gapStyle}>
      {buttons.map((button) => (
        <HeaderButton key={button.name} withChevon={button.withChevon} name={button.name} />
      ))}
    </div>
  );
};

export default HeaderButtonGroup;

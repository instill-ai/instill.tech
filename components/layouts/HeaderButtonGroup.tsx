import { FC } from 'react';
import HeaderButton from '../buttons/HeaderButton';

interface Props {
  gap: number;
}

const HeaderButtonGroup: FC<Props> = ({ gap }) => {
  const gapStyle = `gap-x-${gap}`;

  return (
    <div className={'flex flex-row my-auto ' + gapStyle}>
      <HeaderButton withChevon={false} name={'Home'} />
      <HeaderButton withChevon={true} name={'Products'} />
      <HeaderButton withChevon={true} name={'Resources'} />
      <HeaderButton withChevon={false} name={'Pricing'} />
    </div>
  );
};

export default HeaderButtonGroup;

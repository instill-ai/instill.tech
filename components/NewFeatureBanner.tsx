import { FC } from 'react';
import ArrowRightShortIcon from './icons/ArrowRightShortIcon';

interface Props {
  featureName: string;
  className: string;
}

const NewFeatureBanner: FC<Props> = ({ featureName, className = '' }) => {
  return (
    <button
      className={
        'mx-auto rounded-full p-1 flex flex-row bg-[#063FD1] bg-opacity-[13%] font-sans font-normal ' +
        className
      }
    >
      <span className="rounded-full px-2 bg-white mr-4">New feature</span>
      <p className="mr-1">{featureName}</p>
      <ArrowRightShortIcon className={'w-6 h-6 text-[#063FD1]'} />
    </button>
  );
};

export default NewFeatureBanner;

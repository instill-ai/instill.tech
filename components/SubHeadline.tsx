import { FC } from 'react';

interface Props {
  subHeadlineText: string;
  className?: string;
}

const SubHeadline: FC<Props> = ({ subHeadlineText, className = '' }) => {
  return (
    <h2 className={"mx-auto font-sans font-normal text-center text-xl text-[#667085] max-w-3xl " + className }>
      {subHeadlineText}
    </h2>
  );
};

export default SubHeadline;

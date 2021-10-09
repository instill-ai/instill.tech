import { FC } from 'react';
import * as classNames from 'classnames';

interface Props {
  subHeadlineText: string;
  styleName?: string;
}

export const SubHeadline: FC<Props> = ({ subHeadlineText, styleName }) => {
  return (
    <h2
      className={classNames.default(
        'mx-auto font-sans font-normal text-center text-xl text-[#667085] max-w-3xl',
        styleName
      )}
    >
      {subHeadlineText}
    </h2>
  );
};
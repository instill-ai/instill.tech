import { FC } from 'react';
import CustomLink from '../CustomLink';

interface Props {
  href: string;
  title: string;
}

const GeneralLinkButton: FC<Props> = ({ href, title }) => {
  return (
    <CustomLink href={href}>
      <div className="flex">
        <div className="px-6 py-2 border border-gray-700 rounded-md cursor-pointer hover:bg-gray-200">
          {title}
        </div>
      </div>
    </CustomLink>
  );
};

export default GeneralLinkButton;

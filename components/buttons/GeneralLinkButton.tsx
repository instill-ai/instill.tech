import { FC } from 'react';
import CustomLink from '../CustomLink';

interface Props {
  href: string;
  title: string;
  className?: string | null;
}

const GeneralLinkButton: FC<Props> = ({ href, title, className=null }) => {
  return (
    <CustomLink href={href}>
      <div className="flex">
        <div className={"px-6 py-2 border border-gray-700 rounded-md cursor-pointer hover:bg-gray-200 " + className}>
          {title}
        </div>
      </div>
    </CustomLink>
  );
};

export default GeneralLinkButton;

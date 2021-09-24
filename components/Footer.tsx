import { FC } from 'react';
import CustomLink from './CustomLink';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <div className="flex flex-row h-20 font-sans font-normal text-gray-700 mt-36">
      <div className="flex flex-row gap-x-4 mr-auto my-auto">
        <CustomLink href={'/privacy'}>
          <div>Privacy</div>
        </CustomLink>
        <div>|</div>
        <CustomLink href={'mailto:hello@instill.tech'}>
          <div>Contact</div>
        </CustomLink>
        <div>|</div>
        <CustomLink href={'https://eepurl.com/hfHl6D'}>
          <div>Newsletter</div>
        </CustomLink>
        <div>|</div>
        <CustomLink href={'/career'}>
          <div>Career</div>
        </CustomLink>
      </div>
      <div className="ml-auto my-auto">© 2021 Instill AI Ltd. All rights reserved.</div>
    </div>
  );
};

export default Footer;

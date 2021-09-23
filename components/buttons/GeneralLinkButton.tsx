import { FC } from "react";
import CustomLink from "../CustomLink";

interface Props {
  href: string;
}

const GeneralLinkButton: FC<Props> = ({ children, href }) => {
  return (
    <CustomLink href={href}>
      <div className="px-6 py-2 border border-gray-700 rounded-md cursor-pointer hover:bg-gray-200">
        {children}
      </div>
    </CustomLink>
  )
}

export default GeneralLinkButton
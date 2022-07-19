import { FC } from "react";

const ContentContainer: FC = ({ children }) => {
  return (
    <div className="flex max-w-[1440px] flex-col pt-[100px] md:mx-auto md:w-10/12 lg:pt-[180px]">
      {children}
    </div>
  );
};

export default ContentContainer;

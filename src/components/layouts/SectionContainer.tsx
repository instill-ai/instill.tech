import { FC } from "react";

interface Props {}

export const SectionContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex max-w-[1440px] flex-1 flex-col md:mx-auto md:w-10/12">
      {children}
    </div>
  );
};

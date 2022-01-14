import { FC } from "react";

interface Props {}

export const SectionContainer: FC<Props> = ({ children }) => {
  return <div className="flex flex-1 max-w-[1440px] md:w-10/12 md:mx-auto">{children}</div>;
};

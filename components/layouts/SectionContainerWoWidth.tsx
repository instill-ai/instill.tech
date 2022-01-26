import { FC } from "react";

interface Props {}

export const SectionContainerWoWidth: FC<Props> = ({ children }) => {
  return <div className="flex flex-1 flex-col">{children}</div>;
};

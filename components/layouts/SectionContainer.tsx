import { FC } from "react";

interface Props {}

export const SectionContainer: FC<Props> = ({ children }) => {
  return <div className="lg:px-28">{children}</div>;
};

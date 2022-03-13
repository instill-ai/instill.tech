import { FC } from "react";

interface Props {}

export const BaseContainer: FC<Props> = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

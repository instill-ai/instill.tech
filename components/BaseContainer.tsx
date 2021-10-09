import { FC } from "react";

interface Props {}

export const BaseContainer: FC<Props> = ({ children }) => {
  return <div className="w-screen min-h-screen">{children}</div>;
};

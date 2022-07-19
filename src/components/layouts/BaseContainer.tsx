import { FC } from "react";

interface Props {}

export const BaseContainer: FC<Props> = ({ children }) => {
  return <div className="flex min-h-screen flex-col">{children}</div>;
};

import { FC } from "react";

interface Props {}

const BaseContainer: FC<Props> = ({ children }) => {
  return (
    <div
      className="w-screen min-h-screen"
    >
      {children}
    </div>
  )
}

export default BaseContainer
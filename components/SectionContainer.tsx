import { FC } from "react";

interface Props {}

const SectionContainer: FC<Props> = ({ children }) => {
  return (
    <div className="lg:px-28">
      {children}
    </div>
  )
}

export default SectionContainer
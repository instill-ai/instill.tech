import { FC } from "react";

interface Props {}

const SectionContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-6 sm:px-8 lg:max-w-5xl lg:px-0">
      {children}
    </div>
  )
}

export default SectionContainer
import { FC } from "react";
import PlayIcon from "../icons/PlayIcon";

interface Props {}

const CTASignUpButton: FC<Props> = () => {
  return (
    <button className="flex flex-row gap-x-3 px-7 py-4 rounded-lg border border-[#7F56D9] bg-[#063FD1]">
      <span className="font-sans text-white font-medium text-lg">Sign up</span>
    </button>
  )
}

export default CTASignUpButton
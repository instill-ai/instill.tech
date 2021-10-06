import { FC } from "react";
import CTAPlayDemoButton from "../buttons/CTAPlayDemoButton";
import CTASignUpButton from "../buttons/CTASignUpButton";

interface Props {
  className?: string
}

const HeadCTAGroup: FC<Props> = ({ className="" }) => {
  return (
    <div className={"flex flex-row mx-auto gap-x-3 " + className}>
      <CTAPlayDemoButton />
      <CTASignUpButton />
    </div>
  )
}

export default HeadCTAGroup
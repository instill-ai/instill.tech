import { FC } from "react";

interface Props {
  headlineText: string;
  className?: string;
}

const Headline: FC<Props> = ({ headlineText, className="" }) => {
  return (
    <h1 className={"font-sans text-center text-black font-semibold text-6xl " + className}>
      { headlineText }
    </h1>
  )
}

export default Headline
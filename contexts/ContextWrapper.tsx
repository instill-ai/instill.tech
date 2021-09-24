import { FC } from "react";
import CareerPositionsContext from "./CareerPositionsContext";

interface Props {}

const ContextWrapper: FC<Props> = ({ children }) => {
  return (
    <CareerPositionsContext>
      {children}
    </CareerPositionsContext>
  )
}

export default ContextWrapper
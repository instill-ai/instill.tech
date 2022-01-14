import { FC } from "react";
import { RequestDemoButton } from "../buttons/RequestDemoButton";
import { InstillAiLogo } from "./InstillAiLogo";

interface Props {}

export const NavBar: FC<Props> = () => {
  return (
    <div className="flex flex-row">
      <InstillAiLogo type="fullWhite" width={159} />
      <div className="flex flex-row">
        <RequestDemoButton />
      </div>
    </div>
  );
};

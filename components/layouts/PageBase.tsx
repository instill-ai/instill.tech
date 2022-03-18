import dynamic from "next/dynamic";
import { FC } from "react";
import { NavBar } from "../ui/commons/NavBar";
import { BaseContainer } from "./BaseContainer";
import { SectionContainerFull } from "./SectionContainerFull";

const Footer = dynamic(() =>
  import("../ui/commons/Footer").then((mod) => mod.Footer)
);

interface Props {}

export const PageBase: FC<Props> = ({ children }) => {
  return (
    <BaseContainer>
      <NavBar />
      <SectionContainerFull>{children}</SectionContainerFull>
      <Footer />
    </BaseContainer>
  );
};

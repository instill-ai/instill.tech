import { FC, ReactNode } from "react";
import { Footer } from "../ui/commons/Footer";
import { NavBar } from "../ui/commons/NavBar";
import { BaseContainer } from "./BaseContainer";
import { SectionContainer } from "./SectionContainer";

interface Props {
  currentPage?: string;
  children: ReactNode;
}

export const PageBase: FC<Props> = ({ currentPage, children }) => {
  return (
    <BaseContainer>
      <NavBar />
      <SectionContainer>{children}</SectionContainer>
      <Footer />
    </BaseContainer>
  );
};

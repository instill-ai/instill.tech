import { FC, ReactNode } from "react";
import { Footer } from "../ui/commons/Footer";
import { NavBar } from "../ui/commons/NavBar";
import { BaseContainer } from "./BaseContainer";
import { SectionContainer } from "./SectionContainer";
import { SectionContainerFull } from "./SectionContainerFull";

interface Props {
  currentPage?: string;
  children: ReactNode;
  withMaxWidth: boolean;
}

export const PageBase: FC<Props> = ({
  currentPage,
  children,
  withMaxWidth,
}) => {
  return (
    <BaseContainer>
      <NavBar />
      {withMaxWidth ? (
        <SectionContainer>{children}</SectionContainer>
      ) : (
        <SectionContainerFull>{children}</SectionContainerFull>
      )}
      <Footer />
    </BaseContainer>
  );
};

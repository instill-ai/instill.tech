import dynamic from "next/dynamic";
import { FC } from "react";
import { NavBar } from "../ui/commons/NavBar";
import { BaseContainer } from "./BaseContainer";
import { SectionContainer } from "./SectionContainer";
import { SectionContainerFull } from "./SectionContainerFull";

const Footer = dynamic(() =>
  import("../ui/commons/Footer").then((mod) => mod.Footer)
);

interface Props {
  /** with max width = max-w-[1440px] md:w-10/12 md:mx-auto */
  withMaxWidth: boolean;
}

export const PageBase: FC<Props> = ({ withMaxWidth, children }) => {
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

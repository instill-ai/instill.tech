import dynamic from "next/dynamic";
import { FC } from "react";
import { NavBar } from "../../ui/commons/NavBar";

const Footer = dynamic(() =>
  import("../../ui/commons/Footer").then((mod) => mod.Footer)
);

const PageBase: FC = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default PageBase;

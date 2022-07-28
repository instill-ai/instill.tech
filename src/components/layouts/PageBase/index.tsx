import dynamic from "next/dynamic";
import { FC } from "react";
import { Nav } from "@/components/ui";

const Footer = dynamic(() =>
  import("@/components/ui").then((mod) => mod.Footer)
);

const PageBase: FC = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-instillGrey95">
      <Nav />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default PageBase;

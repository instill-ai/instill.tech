import dynamic from "next/dynamic";
import { Nav } from "@/components/ui";
import { ReactNode } from "react";

const Footer = dynamic(() =>
  import("@/components/ui").then((mod) => mod.Footer)
);

export type PageBaseProps = {
  children?: ReactNode;
};

const PageBase = ({ children }: PageBaseProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-instillGrey95">
      <Nav />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default PageBase;

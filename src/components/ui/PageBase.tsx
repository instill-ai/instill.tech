import { ReactNode } from "react";
import dynamic from "next/dynamic";

import { Nav } from "@/components/ui";

const Footer = dynamic(() =>
  import("@/components/ui").then((mod) => mod.Footer)
);

export type PageBaseProps = {
  children?: ReactNode;
};

export const PageBase = ({ children }: PageBaseProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
};

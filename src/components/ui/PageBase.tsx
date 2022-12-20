import { ReactNode } from "react";
import dynamic from "next/dynamic";

import { Nav } from "@/components/ui";
import { useInView } from "react-intersection-observer";

const Footer = dynamic(() =>
  import("@/components/ui").then((mod) => mod.Footer)
);

export type PageBaseProps = {
  children?: ReactNode;
};

export const PageBase = ({ children }: PageBaseProps) => {
  const [contentRef, contentIsInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <div ref={contentRef} className="flex flex-1 flex-col">
        {children}
      </div>
      <div>{contentIsInView ? <Footer /> : null}</div>
    </div>
  );
};

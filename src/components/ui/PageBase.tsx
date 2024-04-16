import { ReactNode } from "react";
import dynamic from "next/dynamic";

import { Nav } from "@/components/ui";
import { useInView } from "react-intersection-observer";

/* eslint-disable-next-line @typescript-eslint/ban-types */
const Footer = dynamic<{}>(() =>
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
    <div
      className="flex min-h-screen flex-col bg-[#F7F6F8] bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/tutorials/blur-2.svg")',
        backgroundPosition: "top right",
      }}
    >
      <Nav />
      <div
        ref={contentRef}
        className="flex flex-1 flex-col bg-no-repeat"
        style={{ backgroundImage: 'url("/images/tutorials/blur.svg")' }}
      >
        {children}
      </div>
      <div>{contentIsInView ? <Footer /> : null}</div>
    </div>
  );
};

import { useEffect, useState } from "react";

export type TWindowDimensions = {
  width: number;
  height: number;
};

export const useWindowDimension = () => {
  const [windowDimensions, setWindowDimensions] =
    useState<TWindowDimensions>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const getWindowDimensions = (): { width: number; height: number } => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      return {
        width,
        height,
      };
    };

    setWindowDimensions(getWindowDimensions());

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

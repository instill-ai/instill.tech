import { RefObject, useEffect, useState, UIEvent } from "react";
import { ElementPosition, getElementPosition } from "../lib/utilities";

/**
 *
 */

export type ScrollPositionWhenObserve = {
  isObserving: boolean;
  scrollY: number;
};

export const useScrollPositionWhenObserve = (
  ref: RefObject<HTMLDivElement>,
  rootMargin: number
): ScrollPositionWhenObserve => {
  const [isObserving, setIsObserving] = useState(false);
  const [scrollY, setScrollY] = useState<number>();

  useEffect(() => {
    const onScroll = () => {
      setScrollY(document.documentElement.scrollTop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsObserving(true);
          window.addEventListener("scroll", onScroll);
        } else {
          setIsObserving(false);
          window.removeEventListener("scroll", onScroll);
        }
      },
      { rootMargin: `${rootMargin}px` }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      setScrollY(null);
      setIsObserving(false);
    };
  }, [ref]);

  return {
    scrollY,
    isObserving,
  };
};

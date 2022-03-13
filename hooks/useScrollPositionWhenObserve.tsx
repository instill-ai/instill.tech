import { RefObject, useEffect, useState, UIEvent } from "react";
import { ElementPosition, getElementPosition } from "../lib/utilities";

/**
 *
 */

export type ScrollPositionWhenObserve = {
  isObserving: boolean;
  scrollTop: number;
};

export const useScrollPositionWhenObserve = (
  ref: RefObject<HTMLDivElement>,
  rootMargin: number
): ScrollPositionWhenObserve => {
  const [isObserving, setIsObserving] = useState(false);
  const [scrollTop, setScrollTop] = useState<number>();

  useEffect(() => {
    const onScroll = () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setScrollTop(scrollTop);
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
      setScrollTop(null);
      setIsObserving(false);
    };
  }, [ref]);

  return {
    scrollTop,
    isObserving,
  };
};

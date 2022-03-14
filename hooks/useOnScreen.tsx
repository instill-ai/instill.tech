import { RefObject, useEffect, useState } from "react";

/**
 *
 * @param ref - React ref<HTMLDivElement>
 * @returns whether the element is on the screen or not
 */

export const useOnScreen = (
  ref: RefObject<HTMLDivElement>,
  rootMargin?: string
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: rootMargin ? rootMargin : "0px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => setIntersecting(false);
  }, [ref.current]);
  return isIntersecting;
};

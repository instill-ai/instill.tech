import { RefObject, useEffect, useState } from "react";

/**
 *
 * @param ref - React ref<HTMLDivElement>
 * @returns whether the element is on the screen or not
 */

export const useOnScreen = (ref: RefObject<HTMLDivElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => setIntersecting(false);
  }, [ref]);
  return isIntersecting;
};

import { RefObject, useEffect, useState } from "react";

export type UseOnScreenProps = {
  ref: RefObject<HTMLDivElement>;
  activate: boolean;
  options?: {
    // If the ref component is already on screen, and the isIntersecting
    // state is true, we don't update it anymore.
    once: boolean;
    rootMargin?: string;
  };
};

export const useOnScreen = ({
  ref,
  activate,
  options,
}: UseOnScreenProps): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  const { once, rootMargin } = options;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once && isIntersecting) return;
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: rootMargin ? rootMargin : "0px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => setIntersecting(false);
  }, [ref, rootMargin]);
  return activate ? isIntersecting : null;
};

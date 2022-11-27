// ref: https://usehooks-ts.com/react-hook/use-element-size

import { getElementPosition } from "@instill-ai/design-system";
import { useCallback, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import useResizeObserver from "@react-hook/resize-observer";

export type Position = {
  width: number;
  height: number;
  y: number;
  x: number;
};

// eslint-disable-next-line
export const useElementDimension = <T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Position
] => {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null);
  const [position, setPosition] = useState<Position>({
    y: 0,
    x: 0,
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const handlePosition = useCallback(() => {
    if (!ref) return;

    setPosition(getElementPosition(ref));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useIsomorphicLayoutEffect(() => {
    handlePosition();
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useResizeObserver(ref, () => {
    handlePosition();
  });

  return [setRef, position];
};

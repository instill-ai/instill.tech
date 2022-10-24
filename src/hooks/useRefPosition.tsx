import { Nullable } from "@/types/instill";
import { ElementPosition, getElementPosition } from "@instill-ai/design-system";
import useResizeObserver from "@react-hook/resize-observer";
import { MutableRefObject, useEffect, useState } from "react";

export const useRefPosition = (ref: MutableRefObject<HTMLElement>) => {
  const [position, setPosition] = useState<Nullable<ElementPosition>>(null);

  useEffect(() => {
    if (ref && ref.current) {
      setPosition(getElementPosition(ref.current));
    }
  }, [ref]);

  useResizeObserver(ref, (entry) => {
    setPosition(getElementPosition(entry.target));
  });

  return position;
};

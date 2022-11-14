import { Nullable } from "@/types/instill";
import { ElementPosition, getElementPosition } from "@instill-ai/design-system";
import useResizeObserver from "@react-hook/resize-observer";
import { MutableRefObject, useEffect, useState } from "react";

type UseRefPositionOption = {
  listenWindowResize: boolean;
  additionalDep?: any;
};

export const useRefPosition = (
  ref: MutableRefObject<HTMLElement>,
  option: UseRefPositionOption
) => {
  const [position, setPosition] = useState<Nullable<ElementPosition>>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (ref && ref.current) {
        setPosition(getElementPosition(ref.current));
      }
    };

    updatePosition();

    if (option.listenWindowResize) {
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, [ref, option.additionalDep, option.listenWindowResize]);

  useResizeObserver(ref, (entry) => {
    setPosition(getElementPosition(entry.target));
  });

  return position;
};

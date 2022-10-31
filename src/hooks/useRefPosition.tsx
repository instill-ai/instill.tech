import { Nullable } from "@/types/instill";
import { ElementPosition, getElementPosition } from "@instill-ai/design-system";
import useResizeObserver from "@react-hook/resize-observer";
import { MutableRefObject, useEffect, useLayoutEffect, useState } from "react";

type UseRefPositionOption = {
  listenWindowResize: boolean;
  additionalDep?: any;
};

export const useRefPosition = (
  ref: MutableRefObject<HTMLElement>,
  option: UseRefPositionOption
) => {
  const [position, setPosition] = useState<Nullable<ElementPosition>>(null);

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (ref && ref.current) {
        setPosition(getElementPosition(ref.current));
        console.log(
          "get new position",
          ref.current,
          getElementPosition(ref.current)
        );
      }
    };

    updatePosition();

    if (option.listenWindowResize) {
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, [ref, option.additionalDep]);

  useResizeObserver(ref, (entry) => {
    setPosition(getElementPosition(entry.target));
  });

  return position;
};

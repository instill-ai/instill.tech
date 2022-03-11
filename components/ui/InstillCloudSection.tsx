import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { useScrollPositionWhenObserve } from "../../hooks/useScrollPositionWhenObserve";
import { ElementPosition, getElementPosition } from "../../lib/utilities";
import { InstillCloudBanner } from "./svgs/images/InstillCloudBanner";

interface Props {}

export const InstillCloudSection: FC<Props> = () => {
  const sectionRef = useRef<HTMLDivElement>();
  const [targetPosition, setTargetPosition] = useState<ElementPosition>();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setTargetPosition(getElementPosition(sectionRef.current));
  }, [router.isReady]);

  const { scrollY, isObserving } = useScrollPositionWhenObserve(
    sectionRef,
    200
  );

  return (
    <div ref={sectionRef} className="flex w-full bg-white">
      <InstillCloudBanner
        scrollY={scrollY}
        isObserving={isObserving}
        observeTargetPosition={targetPosition}
        styleName="mx-auto max:w-[1440px] h-[997px]"
      />
    </div>
  );
};

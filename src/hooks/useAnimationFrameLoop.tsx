import { useEffect, useRef } from "react";

export type useAnimationFrameLoopProps = {
  nextHandler: () => void;
  duration: number;
  shouldAnimate: boolean;
};

/**
 * This hook will request nextHandler once the duration exceed and it will
 * reset the timer again for the next loop. The whole point of this hook
 * is to operate upon the browser update frame to make sure our animation
 * or operation will not be interrupt by browser behavior.
 */

export const useAnimationFrameLoop = ({
  nextHandler,
  duration,
  shouldAnimate,
}: useAnimationFrameLoopProps) => {
  const frame = useRef(0);
  const firstFrameTime = useRef(performance.now());

  const animate = (now: number) => {
    // calculate at what time fraction we are currently of whole time of animation
    let timeFraction = (now - firstFrameTime.current) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    if (timeFraction === 1) {
      nextHandler();
      firstFrameTime.current = performance.now();
      frame.current = requestAnimationFrame(animate);
    } else {
      frame.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (shouldAnimate) {
      firstFrameTime.current = performance.now();
      frame.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(frame.current);
    }

    return () => cancelAnimationFrame(frame.current);
  }, [shouldAnimate, animate]);
};

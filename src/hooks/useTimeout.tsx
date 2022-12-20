import { useEffect, useRef } from "react";

// Referece: https://usehooks-ts.com/react-hook/use-timeout

export const useTimeout = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const timeout = setTimeout(tick, delay);
      return () => clearTimeout(timeout);
    }
  }, [delay]);
};

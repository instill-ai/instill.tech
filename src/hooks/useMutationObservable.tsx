import { Nullable } from "@/types/instill";
import { MutableRefObject, useEffect, useRef } from "react";

const DEFAULT_OPTIONS = { attributes: true, childList: true, subtree: true };

const useMutationObservable = (
  ref: MutableRefObject<HTMLElement>,
  callback: (record: MutationRecord[]) => void,
  options = DEFAULT_OPTIONS
) => {
  const observerRef = useRef<Nullable<MutationObserver>>(null);

  useEffect(() => {
    observerRef.current = new MutationObserver(callback);
  }, [callback]);

  useEffect(() => {
    if (observerRef && observerRef.current) {
      observerRef.current.observe(ref.current, options);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);
};

export { useMutationObservable };

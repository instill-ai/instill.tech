import { Nullable } from "@/types/instill";
import { useEffect, useRef } from "react";

const DEFAULT_OPTIONS = { attributes: true, childList: true, subtree: true };

const useMutationObservable = <T extends HTMLElement = HTMLDivElement>(
  ref: T | null,
  callback: (record: MutationRecord[]) => void,
  options = DEFAULT_OPTIONS
) => {
  const observerRef = useRef<Nullable<MutationObserver>>(null);

  useEffect(() => {
    observerRef.current = new MutationObserver(callback);
  }, [callback]);

  useEffect(() => {
    if (!ref) return;

    if (observerRef && observerRef.current) {
      observerRef.current.observe(ref, options);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options, ref]);
};

export { useMutationObservable };

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useControlScroll = () => {
  const router = useRouter();
  const [scrollIsDisable, setScrollIsDisable] = useState<boolean>(false);
  const [wheelEvent, setWheelEvent] = useState<"wheel" | "mousewheel">();

  // modern Chrome requires { passive: false } when adding event
  const [supportsPassive, setSupportPassive] = useState(false);

  const [wheelOpt, setWheelOpt] = useState<boolean | { passive: boolean }>(
    false
  );

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            setSupportPassive(true);
          },
        })
      );
    } catch (e) {}

    setWheelEvent(
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel"
    );
  }, [router.isReady]);

  useEffect(() => {
    if (!supportsPassive) {
      return;
    }

    setWheelOpt({ passive: false });
  }, [supportsPassive]);

  const preventDefault = (e: Event) => {
    e.preventDefault();
  };

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  let keys = { ArrowDown: 1, ArrowUp: 1, ArrowLeft: 1, ArrowRight: 1 };

  const preventDefaultForScrollKeys = (e: KeyboardEvent) => {
    if (keys[e.code]) {
      preventDefault(e);
      return false;
    }
  };

  const disableScroll = (): void => {
    setScrollIsDisable(true);
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  };

  const enableScroll = (): void => {
    setScrollIsDisable(false);
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault);
    window.removeEventListener("touchmove", preventDefault);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  };

  return {
    scrollIsDisable,
    disableScroll,
    enableScroll,
  };
};

import { useCallback, useState } from "react";
import cn from "clsx";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export type ThemeToggleProps = {};

export const ThemeToggle = ({}: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    const html = document.querySelector("html");
    if (!html) return;
    if (isDark) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  }, [isDark]);

  return (
    <button
      aria-checked={isDark}
      role="switch"
      type="button"
      className="my-auto flex h-6 w-[42px] rounded-full border border-instillGrey70 bg-instillGrey05 dark:bg-instillGrey80"
      onClick={() => toggleTheme()}
    >
      <div
        className={cn(
          "relative my-auto flex h-5 w-5 rounded-full p-px transition-all",
          isDark ? "translate-x-5" : ""
        )}
      >
        <div className="h-full w-full rounded-full bg-instillGrey15 dark:bg-instillGrey95">
          <SunIcon
            width="w-3"
            height="h-3"
            color={cn(
              "fill-instillGrey90 dark:fill-instillGrey15",
              isDark ? "opacity-0" : "opacity-100"
            )}
            position="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <MoonIcon
            width="w-3"
            height="h-3"
            color={cn(
              "fill-instillGrey90 dark:fill-instillGrey15",
              isDark ? "opacity-100" : "opacity-0"
            )}
            position="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </button>
  );
};

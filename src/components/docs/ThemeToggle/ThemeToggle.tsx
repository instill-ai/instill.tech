import { useCallback } from "react";
import cn from "clsx";

import useDarkTheme from "@/hooks/useDarkTheme";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkTheme();

  const toggleTheme = useCallback(() => {
    setIsDark(state => !state);
  }, []);

  return (
    <button
      aria-checked={isDark}
      role="switch"
      type="button"
      className="flex h-6 w-[42px] rounded-full border border-instillGrey70 bg-instillGrey05 dark:bg-instillGrey80"
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

import { useCallback, useEffect, useState } from "react";
import cn from "clsx";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

//  Custom Hook for dark mode
export const useDark = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    //  Get value on localstorage
    const darkMode = localStorage.getItem("dark") === "true";
    setValue(darkMode);
  }, []);

  useEffect(() => {
    //  Add or Remove "dark" classname
    const html = document.querySelector("html");
    if (!html) return;
    value ? html.classList.add("dark") : html.classList.remove("dark");
    //  Set value on localstorage
    localStorage.setItem("dark", value ? "true" : "false");
  }, [value]);

  return [value, setValue] as const;
};

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useDark();

  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);
  }, [isDark]);

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

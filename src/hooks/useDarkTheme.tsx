import { useEffect } from "react";
import { useInstillAICtx } from "@/contexts/InstillAIContext";

// Custom Hook for dark mode
const useDarkTheme = () => {
  const { isDark, setIsDark } = useInstillAICtx();

  useEffect(() => {
    //  Get value on localstorage
    const darkMode = localStorage.getItem("dark") === "true";
    if (setIsDark) {
      setIsDark(darkMode);
    }
  }, [setIsDark]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const html = document.querySelector("html");
    if (!html) return;
    if (setIsDark) {
      //  Add or Remove "dark" classname
      setIsDark((prevIsDark) => {
        // Add dark mode transition
        html.classList.add("dark-transition");

        if (prevIsDark) {
          html.classList.add("dark");
          //  Set value on localstorage true
          localStorage.setItem("dark", "true");
        } else {
          html.classList.remove("dark");
          //  Set value on localstorage false
          localStorage.setItem("dark", "false");
        }
        timeout = setTimeout(() => {
          // Remove dark mode transition
          html.classList.remove("dark-transition");
          clearTimeout(timeout);
        }, 500);
        return prevIsDark;
      });
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isDark, setIsDark]);

  return [isDark, setIsDark] as const;
};

export default useDarkTheme;

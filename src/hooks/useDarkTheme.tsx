import { useState, useEffect } from "react";
import { useInstillAICtx } from "@/contexts/InstillAIContext";

// Custom Hook for dark mode
const useDarkTheme = () => {
  const { isDark, setIsDark } = useInstillAICtx();

  useEffect(() => {
    const darkMode = localStorage.getItem("dark") === "true";
    if (setIsDark) {
      setIsDark(darkMode);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;
    if (setIsDark) {
      setIsDark((prevIsDark) => {
        if (prevIsDark) {
          html.classList.add("dark");
          localStorage.setItem("dark", "true");
        } else {
          html.classList.remove("dark");
          localStorage.setItem("dark", "false");
        }
        return prevIsDark;
      });
    }
  }, [isDark]);

  return [isDark, setIsDark] as const;
};

export default useDarkTheme;

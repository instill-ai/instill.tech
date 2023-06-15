import { useState, useEffect } from "react";
import { useInstillAICtx } from "@/contexts/InstillAIContext";

//  Custom Hook for dark mode
const useDarkTheme = () => {
  const { isDark, setIsDark } = useInstillAICtx();

  useEffect(() => {
    //  Get value on localstorage
    const darkMode = localStorage.getItem("dark") === "true";
    if (setIsDark) {
      setIsDark(darkMode);
    }
  }, []);

  useEffect(() => {
    //  Add or Remove "dark" classname
    const html = document.querySelector("html");
    if (!html) return;
    isDark ? html.classList.add("dark") : html.classList.remove("dark");
    //  Set value on localstorage
    localStorage.setItem("dark", isDark ? "true" : "false");
  }, [isDark]);

  return [isDark, setIsDark] as const;
};

export default useDarkTheme;

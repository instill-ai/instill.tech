import { Nullable } from "@/types/instill";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type InstillAICtxValue = {
  enableAnnouncementBar: boolean;
  setEnableAnnouncementBar: Nullable<Dispatch<SetStateAction<boolean>>>;
  isDark: boolean;
  setIsDark: Nullable<Dispatch<SetStateAction<boolean>>>;
};

const defaultInstillAICtxValue: InstillAICtxValue = {
  enableAnnouncementBar: false,
  setEnableAnnouncementBar: null,
  isDark: false,
  setIsDark: null,
};

export const InstillAICtx = createContext(defaultInstillAICtxValue);

export const useInstillAICtx = () => useContext(InstillAICtx);

type InstillAICtxProviderProps = {
  children?: ReactNode;
};

export const InstillAICtxProvider = ({
  children,
}: InstillAICtxProviderProps) => {
  const [enableAnnouncementBar, setEnableAnnouncementBar] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <InstillAICtx.Provider
      value={{
        enableAnnouncementBar,
        setEnableAnnouncementBar,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </InstillAICtx.Provider>
  );
};

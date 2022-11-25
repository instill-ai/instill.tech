import { Nullable } from "@/types/instill";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AnnouncementBarCtxValue = {
  enableAnnouncementBar: boolean;
  setEnableAnnouncementBar: Nullable<Dispatch<SetStateAction<boolean>>>;
};

const defaultAnnouncementBarCtxValue: AnnouncementBarCtxValue = {
  enableAnnouncementBar: true,
  setEnableAnnouncementBar: null,
};

export const announcementBarCtx = createContext(defaultAnnouncementBarCtxValue);

export const useAnnouncementBarCtx = () => useContext(announcementBarCtx);

type AnnouncementBarCtxProviderProps = {
  children?: ReactNode;
};

export const AnnouncementBarCtxProvider = ({
  children,
}: AnnouncementBarCtxProviderProps) => {
  const [enableAnnouncementBar, setEnableAnnouncementBar] = useState(true);

  return (
    <announcementBarCtx.Provider
      value={{
        enableAnnouncementBar,
        setEnableAnnouncementBar,
      }}
    >
      {children}
    </announcementBarCtx.Provider>
  );
};

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
  setEnableAnnouncementBar?: Dispatch<SetStateAction<boolean>>;
};

const defaultAnnouncementBarCtxValue: AnnouncementBarCtxValue = {
  enableAnnouncementBar: true,
  setEnableAnnouncementBar: (state: boolean) => {},
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

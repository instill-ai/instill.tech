import {
  createContext,
  Dispatch,
  FC,
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

type Props = {};

export const AnnouncementBarCtxProvider: FC<Props> = ({ children }) => {
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

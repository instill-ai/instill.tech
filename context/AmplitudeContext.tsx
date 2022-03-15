import { createContext, Dispatch, SetStateAction, useContext } from "react";

type AmplitudeCtxValue = {
  amplitudeIsInit: boolean;
  setAmplitudeIsInit?: Dispatch<SetStateAction<boolean>>;
};

const defaultAmplitudeCtxValue: AmplitudeCtxValue = {
  amplitudeIsInit: false,
  setAmplitudeIsInit: (state: boolean) => {},
};

export const amplitudeCtx = createContext(defaultAmplitudeCtxValue);

export const useAmplitudeCtx = () => useContext(amplitudeCtx);

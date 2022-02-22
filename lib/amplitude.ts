import amplitude from "amplitude-js";

import { UserProperties, Event, EventProperties } from "../types/amplitude";

export const initAmplitude = () => {
  amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY);
};

export const setAmplitudeUserId = (userId: string) => {
  amplitude.getInstance().setUserId(userId);
};

export const setAmplitudeUserProperties = (properties: UserProperties) => {
  amplitude.getInstance().setUserProperties(properties);
};

export const setUserProperty = () => {
  let identify = new amplitude.Identify();
  amplitude.getInstance().identify(identify);
};

export const sendAmplitudeData = (
  eventType: Event,
  eventProperties: EventProperties
) => {
  amplitude.getInstance().logEvent(eventType, eventProperties);
};

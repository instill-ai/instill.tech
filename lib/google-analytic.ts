type eventParam = {
  event_label: string;
  event_category: "navigation" | "interaction" | "engagement";
};

export const event = (action: string, params: eventParam): void => {
  window.gtag("event", action, params);
};

export const eventHelpers = {
  navigation: (label: string) => {
    event("event", { event_label: label, event_category: "navigation" });
  },
  interaction: (label: string) => {
    event("event", { event_label: label, event_category: "interaction" });
  },
  engagement: (label: string) => {
    event("event", { event_label: label, event_category: "engagement" });
  },
};

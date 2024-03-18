interface EventsMap {
  heroBannerViewed: heroBannerViewedProps,
  duplexViewed: duplexViewedProps,
  duplexClicked: duplexClickedProps,
}

interface heroBannerViewedProps {
  category: string;
}

interface duplexViewedProps {
  category: string;
  type: string;
}

interface duplexClickedProps extends duplexViewedProps { }

export type EventName = keyof EventsMap;
export type EventData<T extends keyof EventsMap> = EventsMap[T];

export function createAnalyticEvent<T extends EventName>(eventName: T, eventData: EventData<T>) {
  return {
    eventName, eventData,
  };
};

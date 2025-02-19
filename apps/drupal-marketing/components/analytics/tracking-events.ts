interface EventsMap {
  heroBannerViewed: HeroBannerViewedProps;
  duplexViewed: DuplexViewedProps;
  duplexClicked: DuplexClickedProps;
}

interface HeroBannerViewedProps {
  category: string;
}

interface DuplexViewedProps {
  category: string;
  type: string;
}

type DuplexClickedProps = DuplexViewedProps;

export type EventName = keyof EventsMap;
export type EventData<T extends keyof EventsMap> = EventsMap[T];

export function createAnalyticsEvent<T extends EventName>(eventName: T, eventData: EventData<T>) {
  return {
    eventName,
    eventData,
  };
}

'use client';

import { InView } from 'react-intersection-observer';
import { useAnalytics } from 'use-analytics';

import { type EventData, type EventName } from './tracking-events';

interface TrackInViewProps {
  eventName: EventName;
  eventData: EventData<EventName>;
  children: React.ReactNode;
}

export function TrackInView({ eventName, eventData, children }: TrackInViewProps) {
  const { track } = useAnalytics();
  const onComponentIntersection = (inView: boolean) => {
    if (inView) {
      void track(eventName, eventData);
    }
  };
  return (
    <InView triggerOnce threshold={1} onChange={onComponentIntersection}>
      {children}
    </InView>
  );
}

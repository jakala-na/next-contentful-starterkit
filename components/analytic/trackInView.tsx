'use client';

import { useAnalytics } from 'use-analytics';
import { InView } from 'react-intersection-observer';
import { EventsMap } from './tracking-events';

interface TrackInViewProps {
  eventName:  keyof EventsMap;
  eventData: Record<keyof EventsMap[keyof EventsMap], any>;
  children: React.ReactNode;
}

export const TrackInView = ({
  eventName,
  eventData,
  children,
}: TrackInViewProps) => {
  const { track } = useAnalytics();
  const onComponentIntersection = (inView: boolean) => {
    console.log(inView);
    if (inView) {
      track(eventName, eventData);
    }
  };
  return (
    <InView triggerOnce onChange={(inView) => onComponentIntersection(inView)}>
      {children}
    </InView>
  );
};

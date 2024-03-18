# Analytic

Analytic solution is based on the [getanalytics.io](https://getanalytics.io/) library.
The library provides three base API interfaces to sent tracking information:
- `page()` - trigger page view. This will trigger page calls in any installed plugins
- `identify()` - this will trigger identify calls in any installed plugins and will set user data in localStorage
- `track()` - Track an analytics event. This will trigger track calls in any installed plugins

## NextJS Integration

We will provide integration with NextJS for three different cases: page view,
component in view, click on target. See the `components/analytic/analytic.tsx`
file where we convey the global Analytics context and define a hook to track
page view. Then go to the `app/layout.tsx` where we wrap all children components
inside the analytics context.

### Page view tracking

Page view will automatically triggered after the page will be loaded depending
on the NextJS router `pathname` changes.

### Component InView tracking

We introduced the wrapper component `TrackInView` that can be used to wrap any
client component and send analytics tracking event when the component is fully viewed.

### On Click analytics

Here's the place where we should communicate with the UI component and current
implementation suppose just passing the click tracking event callback to the UI
component and then the passed callback can be attached to any of the elements
inside UI components on demand.

## Type Safe Events

We provide interfaces for each event in the `components/analytic/tracking-events.ts`.
Each event should be registered in the `EventsMap` interface and for each event
data should be provided own interface that describes the event data modal and
will be the value of type the registered event in the `EventsMap`
Also that file provides a helper function `createAnalyticEvent()` that should be
used to create any analytic event on the client level. This function will accept
the event name string as the first argument and the event data object as the
second argument and map given event name to the corresponding event data type.
It will guarantee that all events will have correct data.

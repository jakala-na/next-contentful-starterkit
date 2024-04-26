# NextJS App Router

Date: 2022-12-07

Status: accepted

## Context

This starterkit is exclusively using NextJS App Router and was intended as a demonstration of App Router's new abilities with introduction of React Server Components (RSC)

Let's explore some thoughts that went into this decision:

- RSC gives you a way to ship minimal JS bundles but still use React's component system on the server, which has great composability. Great for our data-fetching oriented starterkit.
- RSC is the future, it's the new default, why fight it?
- RSC lets you reason about components in isolation, without trying to reason about components and API Routes that fetch their data. Each component can fetch their own data now, which promotes collocation, promotes great security with no API routes, and promotes great composition with no dependencies between component and API Route. Did I mention composability?
- RSC supports HTTP streaming, with ability to wrap a component in Suspence boundary and do an expensive additional content data fetching after the first render

## Decision

Go all in on RSC and App Router as the only platform at the time supporting this new paradigm.

## Consequences

- At the time of writing, App Router is in alpha, but it will be stable when we release the starterkit
- Folks familiar with regular React SSR-ed model will have to retrain and rewire the mendal modal with React Server Components in mind
- Early adopter bugs will probably make the starterkit mostly good for demos until stable NextJS app router is released

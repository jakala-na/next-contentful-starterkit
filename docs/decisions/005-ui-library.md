# Adopting a UI library: shadcn/ui

Date: 2023-08-10

Status: accepted

## Context

At first the starterkit was not concerned too much about the UI, as this wasn't the point of making a starter. The original idea was that a starterkit should solve data-fetching, typesafety, component-rendering and other common problems, but one cannot demo a blank unstyled website and get folks excited. This is how UI changes had to be introduced.
Unfortunately there are only a few hundred ways to work with CSS and everyone has their own opinion, so the idea of having a UI in the starter should consider that different teams need different decisions.

At the time of this decision, TailwindCSS was pretty much the preferred styling library in the frontend community, the only problem was that TailwindCSS by itself doesn't give you any forced structure out of the box, so how can we enforce best practices? Ideally we want:

- An example of a few components, styled and with interactions
- An tailwind.config.js that would demonstrate some common theming abilities
- A few variations for one complex component where conditional classes are applied
- An opinion on good accessibility
- An opinion on how UI components can be developed in isolation and integrated with data-fetching components

Fortunately shadcn/ui library started to get a lot of traction, with it's new open-source copy-paste ready library of components. It used Radix UI Primitives under the hood and a few lean React libraries for particular use-cases. Also came with a CLI that lets you install components (and their dependencies) in one command. Additionally, shadcn/ui had a great organization pattern, with a ui/ folder for components and utils.ts for a few class helpers (like CVA).

## Decision

Adopt shadcn/ui as a minimal copy-paste friendly UI library that can be stripped to it's unstyled version by removing tailwind classes.

## Consequences

- Folks who are not sold on Tailwind will have to do more work to remove it from the starter, but we probably don't want it removed, so think twice ;)
- Clean separation of ui components from rest of components via ui/ folder actually gives a great starting point for what later can become a monorepo with shared ui library

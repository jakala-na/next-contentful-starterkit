## UI Components

This folder is meant to contain UI components that can be used to compose any other components in NextJS or other React frameworks. Although this folder is within NextJS App itself (for simplicity), you should think of it as external component library that either lives outside NextJS in a monorepo, or even lives in another repo for some cases.

### Conventions


#### Pure UI Components
There are a few boundaries and principles we set with this UI folder that we should maintain:
- UI folder has no knowledge of Contentful. In other words UI components could work in Contentful or outside. There shouldn't be any data-fetching activities or knowledge of contentful-specific things except when needed to hint to Contentful with external escape hatches (see [addAttributes](./hero-banner/hero-banner.tsx) function as an example)
- UI folder should not have any knowledge of NextJS either. It's easy to put NextLink and NextImage in your UI components, but that makes them not possible to reuse outside of NextJS. For this reason alone we have a demonstated path to register NextJS-specific components via ComponentsProvider/useComponents technique. See [here](./hooks/useComponents.ts)
- Pure UI components in same folder makes it easy to understand when you violated that principle. If you see a NextJS or Contentful implementation detail in this folder, you did this wrong.
- This folder is ready for copy/paste into other projects or from other projects/libraries. Especially using shadcn/ui CLI, you can download components into this folder with commands like `npx shadcn-ui@latest add [component]`. See [components.json](../../components.json) for configuration for shadcn/ui.

#### Storybook

Storybook should be used to demonstrate UI components visuals, variations and interactions and it's much easier to do in isolation without the need to mock real API responses and data-fetching.



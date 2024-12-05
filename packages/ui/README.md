## UI Components

This folder is meant to contain UI components that can be used to compose any other components in Next.js or other React frameworks. This is a sample design system implementation and exists as a separate packages to showcase the separation needed to reuse components outside of Next.js.

### Conventions

#### Pure UI Components

There are a few boundaries and principles we set with this UI folder that we should maintain:

- UI folder has no knowledge of Contentful. In other words UI components could work in Contentful or outside. There shouldn't be any data-fetching activities or knowledge of contentful-specific things except when needed to hint to Contentful with external escape hatches (see [addAttributes](./components/hero-banner/hero-banner.tsx) function as an example)
- UI folder should not have any knowledge of Next.js either. It's easy to put NextLink and NextImage in your UI components, but that makes them not possible to reuse outside of Next.js. For this reason alone we have a demonstrated path to use Next.js components. Check [HeroBannerCtfClient](/apps/marketing/components/hero-banner-ctf/hero-banner-ctf-client.tsx) for example usage of radix-slots asChild property to pass the NextLink and NextImage primitives.
- Pure UI components in separate package makes it easy to understand when you violated that principle. If you see a Next.js or Contentful implementation detail in this package, you did this wrong.
- This folder is ready for copy/paste into other projects or from other projects/libraries. Especially using shadcn/ui CLI, you can download components into this folder with commands like `npx shadcn@latest add [component]`. See [components.json](components.json) for configuration for shadcn/ui.

#### Storybook

Storybook should be used to demonstrate UI components visuals, variations and interactions and it's much easier to do in isolation without the need to mock real API responses and data-fetching.
You can start Storybook dev server with:

```bash
turbo dev --filter=@repo/ui
```

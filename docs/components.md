# Components Architecture Guide

There are a few interesting opinions that go into the component design of this project, let's break it down starting from getting an overview of project structure.

## Structure

You will notice the following structure in the this project.

apps/marketing (Next.js app)

- app (reserved for routing and collocated imports)
- components (separated from app folder in order to not commingle with routing)
  ...
  - hero-banner-ctf (Contentful + Next.js component integration)
    - hero-banner-ctf-client.tsx
    - hero-banner-ctf.tsx
    - index.tsx (optional)

packages/ui (UI components package)

- components
  - hero-banner (UI component folder with no knowledge of Contentful or Next.js)
    - hero-banner.tsx
    - hero-banner-stories.tsx
    - index.ts (optional)

Let's break down each layer and component type and define it's role and purpose.

We'll start from UI components and work our way up.

1. UI components

> hero-banner.tsx

UI components are simply defined as pure React components with ability to manage state or render things in slots, but for the purposes of this project they are designed to be share-able across an ecosystem of React projects that are not necessarily built with Next.js or Contentful. More ideas about this concept are described in [UI folder docs](/packages/ui/README.md).

2. Contentful integration components

> hero-banner-ctf.tsx

These components are designed to integrate Contentful's content model to the UI components's props. This includes things like re-mapping fields to UI prop values, mapping slots, injecting Next.js primitives like links or images.

This component is also responsible for data-fetching any additional data that is not available as props at the time of rendering the component.

These components could be React client components, but then they will lose ability to do data-fetching or read dynamic APIs like cookies() and headers(), hence, we have them as React Server Components by convention.
This means that if we want to store state or do other interactive things on the client, we will lose this ability. This is where the client counterpart of the server component kicks in

> hero-banner-ctf-client.tsx

These components serve 2 purposes:

1. For components that need interactivity, like tabs or forms, they will serve as the transitioning point from React Server Components to traditional pre-rendered SSR components with `use client` annotation. They will receive props from server components and have no further access to data-fetching other than Server Actions passed as props.
2. For components that don't need interactivity, this layer is optional, but there is a feature that you will lose if you don't have it, and that is: instant live preview updates. As you might already know, Contentful's Live Preview feature will let you edit content in-place while previwing it side-by-side, but for this feature to be fast and responsive, Contentful will use React state to pass down midified content values via iframe sendMessage in Live Preview mode. This will result in instant no-wait refresh of preview mode, and it would be a bummer to lost this feature. For this reason, every component that need to use live preview instant updates should be a client component and use React state.

You can add live preview instant updates to your components using:

```jsx
const { data, addAttributes } = useComponentPreview < typeof originalData > originalData;
```

## Adding new components

Let's explore how we can create new components and implementthem end to end.

1. Creating UI component
   This is a shadcn/ui project, and it means that simplest way to start building a new component is by either installing it from shadcn/ui library via shadcn CLI, or by generating one with AI on v0.dev and installing using same shadcn CLI.

The end result should be a component added to [packages/ui/components](/packages/ui/components/). Let's say it's accordion.tsx which exports Accordion and AccordionItem. You can start by testint the component in Storybook, working on some variants, updating styles and polishing the UI.

2. Creating a content model in Contentful.
   Now that you have your pure UI component, you'll want to give it some data, for that you need to create a data model in Contentful that can serve your needs.
   You can create a content type that serves your desired content and configurability, for example for Accordion you may need 2 content types.

> Accordion

- reference (reference to accordionItem)
- openByDefault (boolean)
  > Accordion Item
- label (short text)
- content (richtext)

You'll need to allow your component (Accordion) to be referenced from some field, for example Top Components field in Landing Page in this starter.

Lastly, you'll need to make sure your code knows about the new content model changes by pointing at the environment where you made changes using CONTENTFUL_ENVIRONMENT= variable, but also by exporting the GraphQL schema using:

```sh
pnpm generate:schema
```

More details about gql.tada usage can be found [here](./data-fetching.md).

3. Create integrated component (Server component)

Before we proceed with data-fetching, we should create a new home for our integrated component. This will be a new folder in [components](/components/) named after content type name and with -ctf prefix indicating this is a Contentful integration component. For example `components/accordion-ctf` is a good name, but you can adopt other prefixes, like `components/topic-[topic-name]`.

For now I want you to think in simple terms what we're going to expect in our component, so let's define a placeholder:

```jsx
export const AccordionCtf = (props: any) => {
  return {JSON.stringify(props, null, 2)};
};
```

Now that we have a home, let's talk data fetching.

We use top-level data-fetching on this project (for reasons described [here](./data-fetching.md)), this means that you only need to define the component's required data as a GraphQL fragment and include that fragment in existing data-fetching. You can do so by listing fields you're interested to render like so:

```jsx
export const ComponentAccordionFieldsFragment = graphql(
  `
    fragment ComponentHeroBannerFields on ComponentHeroBanner {
      __typename
      sys {
        id
      }
      headline
      bodyText {
        json
        links {
          assets {
            block {
              ...AssetFields
            }
          }
        }
      }
      ctaText
      targetPage {
        ...PageLinkFields
      }
      image {
        ...AssetFields
      }
      imageStyle
      heroSize
      colorPalette
    }
  `,
  [AssetFieldsFragment, PageLinkFieldsFragment]
);
```

You can define this fragment in any file, but we recommend collocating it with your component in the component folder. This will be enforced by [fragment-masking]() unless you opt out for some reason (not recommended).

Proceed to import and expand your fragment in [page.tsx](/apps/marketing/app/[[...slug]]/page.tsx) as shown below:

```jsx
topSectionCollection(limit: 10) {
  items {
    ...ComponentHeroBannerFields
    ...ComponentDuplexFields
    ...ComponentAccordionFields
  }
}
```

Check out [fragment docs]() on gql.tada site

As soon as you have the GraphQL fragment expanded on the top-level page query, you will get the exact shape of the GraphQL response as props in your component, but only after you implement a ComponentRenderer mapping. We'll implement mapping and come back to finishing this component.

4. Register your component in [components/component-renderer/mappings.ts](/apps/marketing/components/component-renderer/mappings.ts)

All you need to do here is return a dynamic import of your component mapped to the Contentful content type GraphQL \_\_typename. The typename will be derived from your content type ID, for example ComponentAccordion is going to be the name for componentAccordion content type id.

Update mappings.ts like this:

```jsx
export const componentMap = {
  // rest of the components
  ComponentAccordion: dynamic(() => import('#/components/accordion-ctf').then((mod) => mod.AccordionCtf)),
};
```

As soon as you do that, accordion-ctf.tsx will start receiving props from page-level GraphQL query that fetches the component fields you specified in the fragment, so let's test that by opening our Contentful and adding a new Accordion component on a test page.

You should see the JSON object returned by GraphQL query when rendering the component.

5. Add Typescript inference with gql.tada

When defined our GraphQL fragment and passed it to `graphql` function from `gql.tada`, we have created a TadaDocumentNode type matching the shape of our fragment, but how do we use this type to help with Typescript autocomplete?

Well, all the steps are documented in gql.tada docs, but let's break it down for our case

First we need to create a Props type that lists our component props. By convention we use `data` prop to define data passed from GraphQL and this will leave some room for other props that control behavior. It is important to keep them separate as `data` will be inferred by gql.tada and we will have no control over those types.

To do that, we need to use FragmentOf and pass it the type of our fragment using typeof.

```jsx
export type AccordionProps = {
  data: FragmentOf<typeof ComponentAccordionFieldsFragment>;
};
```

What gql.tada will do, it will check out fragment and return a type matching our query.

Now you can use the Props type in your component:

```jsx
export const AccordionCtf = (props: AccordionProps) => {
  return {JSON.stringify(props, null, 2)};
};
```

You can test type inference using autocomplete in your editor on `props.data.` query. You should see all top level fields, however, there is a catch.

Because gql.tada fragment masking promotes collocation of fragments, in order to read the actual data you will need to unmask it first. To unmask the data, you will need the ComponentAccordionFieldsFragment and props.data and pass them to readFragment.

```jsx
const data = readFragment(ComponentAccordionFieldsFragment, props.data);
```

Now you can use `data.label` and get Typescript to be happy.

Now that we have the data, we could render the UI component here, but we'll take a longer path and show how to use this pattern with the layered client component (to use state and have live preview as described above).

6. Add Client component

We'll start of with a boilerplate in `/apps/marketing/components/accordion-ctf/accordion-ctf-client.tsx`. Create the component with the following code:

```jsx
import { ResultOf } from 'gql.tada';

export const AccordionCtfClient = (props: {
  data: ResultOf<typeof ComponentAccordionFieldsFragment>
}) => {
  return {JSON.stringify(props, null, 2)};
}
```

And let's use this component in AccordionCtf like so:

```jsx
import { AccordionCtfClient } from './accordion-ctf-client';
export const AccordionCtf = (props: AccordionProps) => {
  const data = readFragment(ComponentAccordionFieldsFragment, props.data);

  return <AccordionCtfClient data={data} />;
}
```

Now, you should get the same result as on last step, but this time around you have a client-component doing the rendering of content, it means you can interfere and modify content with state for Live Preview!

Let's unpack the gql.tada helper ResultOf first though. When we unmask a fragment using `readFragment` or [in the query](), you will no longer get a masked version, it means our Typescript approach for components that receive unmasked data will change from using `FragmentOf`, to using `ResultOf`, indicating that this type is a result of unmasking.

Now that we have our data printed, let's render UI components!

7. Render UI component

Remember how we layer our components, React Server Component -> Client Component -> UI Component. The Client Component here will be responsible for taking the data from props.data and mapping it to props on UI component.

We can do simple one-to-one mappings, we can wrap or render our props, we can pass components as slots, everything is possible, so we'll look at the larger example here to get a sense of this activity:

```jsx
// EXAMPLE
```

After we do this change, we should start seeing real UI rendering on the page, powered by real Contentful data, but we're not done yet.

8. Wrap data with live preview state

Remember why we bother to create a Client Component in the first place? To get React state support for Live Preview (and interactivity). Let's how easy it is to configure Contentful Live Preview using `useComponentPreview` hook. You'll need to pass your original data to `useComponentPreview` and you'll get modified data from React state in return, you'll also get a helper that lets you annotate components HTML with "Inspector Mode" elements, we call this helper addAttributes. Here is the code in the nutshell.

```jsx
const { data: originalData } = props;
const { data, addAttributes } = useComponentPreview(originalData);

return <Accordion
  label={data.label}
  addAttributes={addAttributes}
/>
```

The [useComponentPreview](/components/hooks/use-component-preview.ts) helper hook effectively combines 2 Contentful hooks, useContentfulLiveUpdates and useContentfulInspectorMode and lets you edit content in Contentful and get instant updates, as well as annotate content for inspector mode.

The `addAttributes` helper is a quite clever hack, we add support to all UI components to receive this helper and we use inversion of control to let the UI component dictate the field names it renders, but ask for attributes from wrappers like our integration components.

For example in ui/accordion.tsx we can call our annotated field 'label' but if the fieldname is different in Contentful or we want to use this annotation outside of Contentful and apply different rules, we can pass a addAttributes prop that can give control to the integrator what attributes to pass.

```jsx
<AccordionLabel>
  {...addAttributes('label')}
/>
```

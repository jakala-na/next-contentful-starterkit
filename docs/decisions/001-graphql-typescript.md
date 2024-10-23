# GraphQL and Typescript

Date: 2022-12-07

Status: accepted

## Context

Originally the next-contentful starterkit project was initiated as a way to demonstrate what a Contentful frontend project for a medium to large sized team could look like. After seeing some problems with data fetching, trouble pickiung between Contentful Delivery API and GraphQL, struggling to deal with manually maintaining React component props and types and seeing gazzilion of optional chaining operators used to address bugs in production with missing data, the starterkit had to address at least some of those issues.

To address the guessing game, it was clear that Typescript with strict rules would be required to analyze statically the data before bugs land on production. There are only a few benefits to Typescript though if you have to maintain types manually. Developer who are forced to reason about types manually, inevitably make wrong assumptions, so it was important to get a good end-to-end type safety out of the box from Contentful.

There are 2 ways to query data from Contentful, you can use Contentful Delivery API (REST) or you can use GraphQL API. It happens that GraphQL API is much more robust in Contentful and you can fetch only the information you need, and, on top of that you get native typesafety support with graphql codegens. Alternatively one could use Contentful Delivery API and use a [REST codegen library](https://github.com/intercom/contentful-typescript-codegen). Unfortunately for REST, it wasn't an equal decision.

It happens that REST API in Contentful has no good ability to fetch exact data you need when it comes to references. If you're fetching a top level entry, you can fetch extra references only with a catch-all bazooka `?include=[depth]` parameter, where depth of 10 for example will let you fetch 10 levels of references deep. What you cannot do, you can't request to fetch one field, but skip the other.
This results in 3 things:

- Massive payloads that don't fit the body size of the response
- Massive NextJS page caches as those payloads end up in props (unless you clean them up)
- Chance of circular references that can't be encoded in a serialized JSON and SDK failing with an error

If you face those issues, you are going to be forced to underfetch with lower `?include=[depth]` param and fetch second/third/fourth pass to mitigate. Additionally you are going to be forced to trim the response from Contentful to remove any excess circular references loops and serialize the props yourself.

Nobody wants to deal with this when you already implemented half of your application and you realize it doesn't scale.

Hence, the decision to go with GraphQL as the default, see decision

## Decision

Use GraphQL as a standard data-fetching solution!

### Benefits

- has fine-grained data fetching per field with ability to expand only references you need
- has no circular-references problems
- has great autocomplete in IDEs and has great introspective DX which eliminates the need to read documentation
- has great typesafety included and codegen tools that let you use one fields that are "fetched" as opposed to guessing types (see graphql-codegen client-preset)
- has Contentful's new [Delivery Functions](https://www.contentful.com/developers/docs/extensibility/app-framework/functions/) ability to deliver third-party data via Contentful's GraphQL schema (federation)

GraphQL is not perfect either, it has certain limits, but it's more suitable for what we try to do. Let's explore some nuances.

### Limitations

- has maximum body size for the request, and also response size is limited (mitigations available)
- has query complexity requirements and prevents queries from fetching more than 11000 entries at once (statically analyzed)

#### Mitigations

Now, a little about mitigating the downsides:

- Max query body size can be increased if you use [GraphQL APQ](https://www.apollographql.com/docs/apollo-server/performance/apq/). See [limits](https://www.contentful.com/developers/docs/references/graphql/#/introduction/query-size-limits)
- Query complexity limits can be minimized with a few techniques:
  - limit collection fields via pagination
  - split first pass fetch from "additiona content fetch", for example fetch only first Tab in a tab group when rendering the page on the server, and implemnent additional fetching when tabs are switched
  - you can request a query complexity limit increase
  - you can split and stitch multiple queries to fit the query complexity, luckily you can statically analyze the query and know if it doesn't fit (see https://github.com/jakala-na/next-contentful-starterkit/issues/5)

## Consequences

- Folks who like Javascript and struggle to work in Typescript will need to gradually start learning Typescript, at first it will be a big learning curve that requires understanding of Typescript type gymnastics and tricks, but once they learn, it will make the team much more productive. Typescript can most of the time replace documentation and make autocomplete a certainty, instead of a guess.
- Folks used to REST API simplicity will have to learn a new way of working and learn GraphQL
- Features available to Contentful Delivery API but not available in GraphQL need a hybrid data-fetching approach. To my knowledge this is only concerning [cross-space references](https://www.contentful.com/help/cross-space-references/) which are only resolvable via Delivery API (cross-references have since became available in GraphQL API)

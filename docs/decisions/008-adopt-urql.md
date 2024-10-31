# Adopt urql as a graphql client library.

Date: 2024-04-22

Status: accepted

## Context

While graphql-request was perfectly capable minimal client, it was never meant to be the end-game for a serious data-fetching solution. The problem with graphql-request as a client were evident:

1. No support for Next.js extra fetch parameters like revalidate, tags or data cache in general (Next Data Cache)
2. No support for complex auth ar Automated Persistent Queries middlewares.
3. No path to grow into a hybrid RSC and Client fetching library (with mature client-side caching ecosystem)

Even though the selling point of Client data fetching library for SSRed client components is not strong yet, it's probably a bonus if we have to ever allow client-fetching use-cases, main driver though for adopting a different approach was points (1) and (2).

Since Contentful's GraphQL endpoint has a recent addition of APQ and benefits unique to it (request caching and smaller body size), we had to start using APQ in our starter

There are only 2 libraries that offer out of the box APQ support, and you could roll your own, but why do that? It is Apollo Client and Urql.

Both libraries are well maintained, both are geared towards client-heavy data fetching solutions, both have some support for Next.js server components, but there are a few differences.

Apollo GraphQL has a Next.js experimental package that supports RSC:
https://github.com/apollographql/apollo-client-nextjs

Urql on the other hand has no experimental features and basically lets you create a client and use it server-side with no need to use react hooks or client components with state.

Urql is not as minimal as "graphql-request", but the idea of "exchanges" (middlewares) was appealing, it has APQ exchange and it has debugging tools and history if we ever need it.

On the second note, Next.js Caching is really useful, especially on Vercel where you can track it's usage on the platform and invalidate it natively with revalidateTag, but having to design a solution to use Next Cache without fetch is tricky, since at the time of writing Next Cache without fetch is only available as an experimental API (unstable_cache), it's better to adopt a solution that can use fetch under the hood natively.

## Decision

1. Adopt Urql as replacement for graphql-request.
2. Enable APQ by default.

## Consequences

1. Most of the API changes are minor, but code has to be adjusted to:

- use new "query" method instead of "request"
- use new "data" property on the response as opposed to getting the response shape directly
- use new OperationOptions as third argument to to pass fetchOptions to the fetch directly, this let you pass revalidate time and/or tags for Next.js Data Cache.

2. All request are now cached indefinitely by default (Next.js's fetch has default caching unless opted out with cache: no-store, or revalidate)
3. Along with the decision to adopt Urql, we enable APQ by default via persistedExchange, which can help with request size and caching on the edge in Contentful.

Overall benefits are evident, but there should be extra care now when writing new GraphQL requests, as they are going to be cached indefinitely even for dynamic pages due to the Next Cache.

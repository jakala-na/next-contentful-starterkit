# Adopt gql.tada as replacement for graphql-codegen's client-preset.

Date: 2024-04-15

Status: accepted

## Context

Originally the GraphQL Codegen was the only choice for GraphQL type generation and client-preset felt great, but a new condender entered the chat, it was [gql.tada](https://gql-tada.0no.co/)
It promised to be the direct replacement for GraphQL Codegen client-preset, but worked as part of Typescript server and inferred types on the fly instead of generating them via extra step. Well, almost, the Typescript server would use a plugin @0no-co/graphqlsp that would generate the types on the fly.

At first, it wasn't such a big of a deal, why do anything if you have a stable client-preset solution already, but after a few iterations of adding new components and changing queries it was clear that the delay from an external codegen process is causing significant hiccups with IDE / VSCode, to the extend that it was confusingi if Typescript errors are from user-error, or from delayed code generation, which made me doubt it's working and made me restart VSCode constantly. 

I decided to give gql.tada a shot, as part of ticket #15
I was blown away by how much faster it felt. And since it had feature-parity with client-preset, it was a no-brainer to migrate.

It wasn't all perfect, a few kinks had to be addressed before we could more. For instance gql.tada didn't have a CLI that would allow a non-IDE user to generate types or verify them. It was fortunatelly added soon after we started evaluating it/

## Decision

Adopt gql.tada in place of GraphQL Codegen client-preset

## Consequences

- Unfortunately gql.tada requires a few code changes, which are done in the PR, but unmerged PR's in open queue will need to be rebased
- gql.tada is claimed to be production ready now, but who knows what else we will encouter
- GraphQL Codegen can be safely removed from the repo


# Use GraphQL Codegen to generate types

Date: 2022-12-28

Status: superseded by [0007](0007-adopt-gql.tada.md)

## Context

There are only a few tools in GraphQL space that can compete with TheGuild's ecosystem, but I believe at the time, [GraphQL Codegen](https://the-guild.dev/graphql/codegen) was the standard tooling available to generate either typed queries, or just plain Typescript types. Even better, at the time of evaluation, GraphQL Codegen had a new plugin called [client-preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) that promised a drop-in zero-configuration best-practice solution for generating types for queries, fragments and responses.

In simple terms the goal is this.
You write a GrapHQL query in your IDE, you want:
- Autocomplete at the time of writing (provided by IDE plugins that use GraphQL schema introspection)
- Autocomplete at the time of using response variables in Typescript (provided by codegen solutions)

GraphQL Codegen client-preset was giving us not only typed API responses, but also ability to collocate fragments with the component that is concerned of reading the API response. This is ultimate heaven for codebases that tend to bubble up all data fetching to top level, but maintain source of truth along the leaves (components).

## Decision

Adopt GraphQL Codegen and client-preset plugin.
Adopt [Fragment Masking](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#fragment-masking) (enabled by default) that promotes collocation of GraphQL Fragments with Components

## Consequences

- Adding a GraphQL Codegen will require developers to keep their local schema up to date and generate types before commiting code (for typescript complication to succeed on CI)
- GraphQL Codegen step adds extra background process that should be running with your dev server during development, so that any query changes generate new typescript types
- Generated types have to be commited to the repo and this results in large PR diffs from what effectively are generated files (not part of the source)

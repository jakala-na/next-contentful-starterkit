# Storybook + Chromatic

Date: 2023-08-13

Status: accepted

## Context

After settling on a UI library, it was important to get the frontends excited about their UI testing tools, or basically adopt the standard de-facto tool for showcasing UI components: Storybook
It wasn't even a question, it would bring UI developers joy of developing components in isolation and let them be integrated in various scenarios as second pass.
Storybook and a separate UI sandbox promotes cleanliness of component isolation/separation, where behavior is modeled externally from the UI.

Along with adopting storybook, we had to decide where to host storybook builds. There were a few options, mainly Vercel (along with NextJS App) and Chromatic.com (hosting by Storybook creators)

There were a few benefits to Chromatic over Vercel

- Visual Testing capabilities allow you to play a story and take snapshots of it and compare against a baseline, making visual regressions a breeze on the component level.
- UI Review workflows - allows you to approve each snapshot difference by involving stakeholders or UI designers in the testing process
- Generous free tier

## Decision

Adopt Storybook and Chromatic.com hosting for it

## Consequences

- Ability for frontend developers to develop components in isolation
- Ability for the team to set UI review and regression testing workflows outside of the codebase via Chromatic rules

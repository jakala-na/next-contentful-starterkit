# Localization Strategy for Next.js Project using Next International Library

Date: 2024-08-30

Status: accepted

## Context

Localization is a critical aspect of this project to support multiple languages and regions, enhancing the user experience for a global audience. The project requires a scalable, maintainable, and developer-friendly localization solution within a Next.js framework.

1. The project needs to support multiple languages and locales.
2. Content should be dynamically localized based on the user's language preference.
3. The solution should integrate seamlessly with the Next.js ecosystem.
4. The solution should allow using project without localization.
5. Consideration of performance, SEO, and ease of use for developers.

Options Considered.
1. Next International Library

Pros:
* Tailored specifically for Next.js, ensuring tight integration.
* Supports static, dynamic, and hybrid rendering, which is beneficial for performance and flexibility.
* Out-of-the-box support for language detection and routing.
* SEO-friendly with localized URLs.
* Good developer experience with strong TypeScript support.

Cons:
* Being a specific solution, it might have a learning curve for developers new to it.
* Limited community support compared to more generic i18n libraries.

2. Next Intl

Pros:
* Better documentation.
* Next.js-native app router.
* Hooks-based API.

Cons:
* Global translation are not strictly typed https://github.com/amannn/next-intl/issues/410

## Decision

1. Adopt Next International for localization https://github.com/QuiiBz/next-international.
2. Add a possibility to disable localization by overriding defaultLocale.

## Consequences

1. App router pages have been moved under `[locale]` folder.
2. language switcher has been added to the header.
3. Middleware file with the code handling localization has been added to the project.
4. In order to disable localization developers have to uncomment `urlMappingStrategy: 'rewriteDefault'` in the middleware file and keep only on locale.

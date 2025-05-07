/* eslint-disable no-unused-vars -- we have undefined components for now */
import { ParagraphHeroBanner } from '#/components/paragraphs/hero-banner/hero-banner';
import { NodePage } from '#/components/node-page/node-page';

export const componentMap = {
  ParagraphHero: ParagraphHeroBanner,
  NodePage,
} as const;

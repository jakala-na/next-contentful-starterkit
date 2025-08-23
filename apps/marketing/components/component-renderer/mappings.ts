import { ComponentProductTable } from '#/components/component-product-table/component-product-table';
import { HeroBannerCtf } from '#/components/hero-banner-ctf/hero-banner-ctf';
import { DuplexCtf } from '#/components/duplex-ctf/duplex-ctf';
import { TopicBusinessInfo } from '#/components/topic-business-info/topic-business-info';
import { TopicPerson } from '#/components/topic-person/topic-person';
import { TopicProduct } from '#/components/topic-product/topic-product';

export const componentMap = {
  ComponentHeroBanner: HeroBannerCtf,
  ComponentDuplex: DuplexCtf,
  TopicBusinessInfo,
  TopicPersons: TopicPerson,
  TopicProduct,
  ComponentProductTable,
} as const;

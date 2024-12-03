import { HeroBannerCtf } from '#/components/hero-banner-ctf/hero-banner-ctf';
import { DuplexCtf } from '#/components/duplex-ctf/duplex-ctf';
import { TopicBusinessInfo } from '#/components/topic-business-info/topic-business-info';
import { TopicPerson } from '#/components/topic-person/topic-person';

export const componentMap = {
  ComponentHeroBanner: HeroBannerCtf,
  ComponentDuplex: DuplexCtf,
  TopicBusinessInfo,
  TopicPersons: TopicPerson,
} as const;

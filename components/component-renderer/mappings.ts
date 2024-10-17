import dynamic from 'next/dynamic';

export const componentMap = {
  ComponentHeroBanner: dynamic(() => import('#/components/hero-banner-ctf').then((mod) => mod.HeroBannerCtf)),
  ComponentDuplex: dynamic(() => import('#/components/duplex-ctf').then((mod) => mod.DuplexCtf)),
  TopicBusinessInfo: dynamic(() => import('#/components/topic-business-info').then((mod) => mod.TopicBusinessInfo)),
  TopicPersons: dynamic(() => import('#/components/topic-person').then((mod) => mod.TopicPerson)),
};

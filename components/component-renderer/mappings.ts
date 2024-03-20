import dynamic from "next/dynamic";

export const componentMap = {
  ComponentHeroBanner: dynamic(() =>
    import("#/components/hero-banner-ctf").then((mod) => mod.HeroBannerCtf)
  ),
  ComponentDuplex: dynamic(() =>
    import("#/components/duplex-ctf").then((mod) => mod.DuplexCtf)
  ),
  Accordion: dynamic(() =>
      import("#/components/accordion").then((mod) => mod.AccordionCtf)
  ),
};

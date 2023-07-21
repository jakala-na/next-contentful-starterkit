import dynamic from "next/dynamic";

export const componentMap = {
  ComponentHeroBanner: dynamic(() =>
    import("#/components/hero-banner").then((mod) => mod.HeroBanner)
  ),
  ComponentDuplex: dynamic(() => import("#/components/duplex").then((mod) => mod.Duplex)),
}

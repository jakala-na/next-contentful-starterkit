import dynamic from 'next/dynamic'

export const componentMap = {
  ComponentHeroBanner: dynamic(() =>
    import('#/components/contentstack/hero-banner').then(
      (mod) => mod.HeroBanner
    )
  ),
  ComponentDuplex: dynamic(() =>
    import('#/components/contentstack/duplex').then((mod) => mod.Duplex)
  ),
}

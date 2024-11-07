import { defineComponents } from '@contentful/experiences-sdk-react';
import { HeroBannerCtfExpClient } from '#/components/hero-banner-ctf/hero-banner-ctf-exp-client';

defineComponents([
  {
    component: HeroBannerCtfExpClient,
    definition: {
      id: 'hero-banner',
      name: 'Hero Banner',
      category: 'Starter Kit Components',
      children: true,
      slots: {
        slotCtas: {
          displayName: 'Slot: CTA Buttons',
        },
      },
      variables: {
        headline: {
          displayName: 'Headline',
          type: 'Text',
          defaultValue: 'In ut quam vitae odio',
        },
        bodyText: {
          displayName: 'Body Text',
          type: 'Text',
          defaultValue:
            'Quisque id odio. Maecenas vestibulum mollis diam. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Donec id justo. Curabitur at lacus ac velit ornare lobortis.',
        },
        size: {
          displayName: 'Full width',
          type: 'Boolean',
        },
        colorPalette: {
          displayName: 'Color palette',
          type: 'Array',
        },
        image: {
          displayName: 'Image',
          type: 'Media',
        },
      },
    },
  },
]);

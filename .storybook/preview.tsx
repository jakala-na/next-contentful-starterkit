import React from 'react';

import type { Preview } from '@storybook/react';

import '../app/globals.css';

import { fontSans } from '../lib/fonts';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={`${fontSans.variable} font-sans`}>
        <Story />
      </main>
    ),
  ],
};

export default preview;

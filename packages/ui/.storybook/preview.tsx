import React from 'react';

import type { Preview } from '@storybook/react';

import '../styles/globals.css';

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
      <main className={`font-sans`}>
        <Story />
      </main>
    ),
  ],
};

export default preview;

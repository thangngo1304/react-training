import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { Preview } from '@storybook/react';

// Theme
import { theme } from '../src/ui/themes';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

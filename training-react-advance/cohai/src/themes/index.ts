import { extendTheme } from '@chakra-ui/react';

// Themes
import { components } from './components';
import { bases } from './bases';

export const theme = extendTheme({
  ...bases,
  components,
  fonts: {
    heading: `'Montserrat Bold', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'body',
        backgroundColor: 'background.200',
      },
    },
  },
});

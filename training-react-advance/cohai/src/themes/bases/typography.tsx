import { ThemeOverride } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '32px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '32px',
  '5xl': '96px',
};

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../assets/fonts/Helvetica.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Helvetica Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../../assets/fonts/Helvetica-Bold.ttf') format('truetype');
      }
      `}
  />
)

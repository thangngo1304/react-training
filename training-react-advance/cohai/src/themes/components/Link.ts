import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
  baseStyle: {
    textDecoration: 'none !important',
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: 'sm',
  },
  variants: {
    primary: {
      py: '12px',
      px: '16px',
    },
    secondary: {
      pl: '5px',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});

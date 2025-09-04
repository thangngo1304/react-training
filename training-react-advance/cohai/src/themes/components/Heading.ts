import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: 'heading',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '1.5 !important',
  },

  sizes: {
    md: {
      fontSize: 'md',
    },
    lg: {
      fontSize: 'lg',
    },
    xl: {
      fontSize: 'xl',
    },
    '2xl': {
      fontSize: '2xl',
    },
    '4xl': {
      fontSize: '4xl',
    },
  },
  variants: {
    primary: {
      color: 'text.200',
    },
    secondary: {
      color: 'text.100',
    },
    tertiary: {
      color: 'text.300',
    },
  },

  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
});

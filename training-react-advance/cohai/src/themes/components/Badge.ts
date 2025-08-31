import { defineStyleConfig } from '@chakra-ui/react';

export const Badge = defineStyleConfig({
  baseStyle: {
    px: '3px',
    py: '1px',
    fontSize: 'md',
    fontWeight: 'medium',
    rounded: 'lg',
  },

  variants: {
    primary: {
      color: 'text.100',
      backgroundColor: 'background.600',
    },
    secondary: {
      color: 'text.100',
      backgroundColor: 'background.700',
    },
    tertiary: {
      color: 'text.200',
      backgroundColor: 'transparent',
    },
  },
  defaultProps: {
    variant: 'secondary',
  },
});

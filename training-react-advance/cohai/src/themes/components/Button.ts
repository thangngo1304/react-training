import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Button = defineStyleConfig({
  baseStyle: {
    py: 3,
    _focus: {
      outline: 'none',
    },
  },
  sizes: {
    xs: {
      py: 3.5,
      px: 4,
      fontSize: 'xs',
    },
    sm: {
      px: 7,
      fontSize: 'sm',
    },
    md: {
      px: 10,
      fontSize: 'md',
    },
    lg: {
      px: 11,
      fontSize: 'lg',
    },
    xl: {
      py: 4,
      fontSize: 'xl',
      width: '100%',
    },
    icon: {
      p: '22px',
    },
  },
  variants: {
    primary: {
      color: 'text.100',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: 'md',
      backgroundColor: 'background.300',
      _hover: {
        backgroundColor: 'background.800',
      },
    },
    secondary: {
      color: 'text.200',
      borderRadius: '2xl',
      backgroundColor: 'background.100',
      _hover: {
        backgroundColor: 'background.800',
      },
    },
    tertiary: {
      color: 'text.300',
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderColor: 'border.100',
      _hover: {
        backgroundColor: 'background.900',
      },
    },
    iconPrimary: {
      borderRadius: 'md',
      backgroundColor: 'background.100',
      boxShadow: '0 2px 5.5px 0 rgba(0, 0 , 0, .25)',
      _hover: {
        backgroundColor: 'background.900',
      },
    },
    iconSecondary: {
      backgroundColor: 'transparent',
      borderRadius: 'lg',
      borderColor: 'border.200',
      borderWidth: '1px',
      opacity: '1 !important',
    },
    iconTertiary: {
      color: 'text.200',
      backgroundColor: 'transparent',
      borderRadius: 'md',
      _hover: {
        backgroundColor: 'background.100',
        boxShadow: '0 2px 5.5px rgba(0, 0 , 0, .06)',
      },
    },
  },
  defaultProps: {
    size: 'xs',
    variant: 'primary',
  },
});

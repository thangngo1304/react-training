import { MouseEvent, ReactElement, ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { ItemIcon } from '@/components/common';

export type TNavigationProps = {
  children: ReactNode;
  leftIcon?: ReactElement;
  destination?: string;
  isActive?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const Navigation = ({
  children,
  leftIcon,
  isActive,
  destination = '/',
  onClick,
}: TNavigationProps) => {
  return (
    <Box
      borderRadius="lg"
      color={isActive ? 'text.200' : 'text.400'}
      backgroundColor={isActive ? 'background.200' : 'transparent'}
      boxShadow={isActive ? '0 5.5px 3.5px rgba(0, 0 , 0, .02)' : 'transparent'}
      transition=".2s ease-in-out"
      _hover={{
        boxShadow: '0 5.5px 3.5px rgba(0, 0 , 0, .02)',
        backgroundColor: 'background.100',
      }}
    >
      <Link to={destination} onClick={onClick}>
        <Text
          display="flex"
          alignItems="center"
          gap="12px"
          aria-label="navigate-item"
          py="12px"
          px="16px"
          textDecoration="none !important"
          fontFamily="heading"
          fontWeight="700"
          fontSize="sm"
        >
          {leftIcon && <ItemIcon icon={leftIcon} isActive={isActive} />}
          {children}
        </Text>
      </Link>
    </Box>
  );
};

export default Navigation;

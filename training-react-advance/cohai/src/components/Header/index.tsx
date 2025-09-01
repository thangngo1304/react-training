import { memo } from 'react';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import isEqual from 'react-fast-compare';
import { LogoIcon } from '@/icons';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, ROUTES } from '@/constants';

import Navbar from './NavbarItem';

const Header = () => {
  return (
    <HStack
      w="100%"
      px="10px"
      py="5px"
      mt="20px"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="lg"
      backgroundColor="white"
      position="relative"
    >
      <HStack alignItems="center">
        <Link to={ROUTES.HOME}>
          <LogoIcon />
        </Link>
        <VStack alignItems="flex-start" gap={0}>
          <Heading
            variant={'primary'}
            size={{ base: '2xl', xl: '4xl' }}
            fontWeight="bold"
          >
            Cô Hai
          </Heading>
          <Text
            variant="tertiary"
            size={{ base: 'textMd', lg: 'textLg' }}
            fontWeight="bold"
          >
            Trái Cây
          </Text>
        </VStack>
      </HStack>
      <Navbar items={NAV_ITEMS} />
    </HStack>
  );
};

export default memo(Header, isEqual);

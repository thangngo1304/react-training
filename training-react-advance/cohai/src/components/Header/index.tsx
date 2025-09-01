import { memo } from 'react';
import {
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import isEqual from 'react-fast-compare';
import { Link } from 'react-router-dom';
import { LogoIcon } from '@/icons';
import { NAV_ITEMS, ROUTES } from '@/constants';

import Navbar from './NavbarItem';
import ExpandSidebar from '../Sidebar/Expand';

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

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

      {isMobile ? <ExpandSidebar /> : <Navbar items={NAV_ITEMS} />}
    </HStack>
  );
};

export default memo(Header, isEqual);

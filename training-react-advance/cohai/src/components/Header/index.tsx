import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

// Component
import ExpandSidebar from '../Sidebar';
import Navbar from './NavbarItem';
import { LogoIcon } from '@/icons';

// Constants
import { NAV_ITEMS, ROUTES } from '@/constants';


const Header = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <HStack
      w="100%"
      pl="10px"
      pr="20px"
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
            fontFamily="DancingScript Bold"
          >
            Cô Hai
          </Heading>
          <Text variant="tertiary" size={{ base: 'textMd' }} fontWeight="bold">
            Trái Cây
          </Text>
        </VStack>
      </HStack>

      {isMobile ? <ExpandSidebar /> : <Navbar items={NAV_ITEMS} />}
    </HStack>
  );
};

export default memo(Header, isEqual);

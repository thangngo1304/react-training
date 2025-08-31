import { memo } from 'react';
import { Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import isEqual from 'react-fast-compare';
import { LogoIcon } from '@/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';

const Header = () => {
  return (
    <Flex
      w="100%"
      px="10px"
      py="5px"
      mt="20px"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      borderRadius="lg"
      backgroundColor="white"
      position="relative"
    >
      <HStack>
        <Link to={ROUTES.HOME}>
          <LogoIcon />
        </Link>
        <VStack alignItems="flex-start">
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
    </Flex>
  );
};

export default memo(Header, isEqual);

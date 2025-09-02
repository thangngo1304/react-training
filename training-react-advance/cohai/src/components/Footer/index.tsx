import { FOOTER_INFO, ROUTES } from '@/constants';
import { LogoIcon } from '@/icons';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Stack w="100%" bg="gray.900" color="gray.300" py={10} alignItems="center">
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        w={{ base: '100%', lg: '80%' }}
        px={5}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 10, lg: 20 }}
          justify="space-between"
        >
          <HStack height="fit-content" alignItems="center">
            <Link to={ROUTES.HOME}>
              <LogoIcon />
            </Link>
            <VStack alignItems="flex-start">
              <Heading as="h2" variant="secondary" size="2xl" fontWeight="bold">
                Cô Hai
              </Heading>
              <Text variant="secondary" fontWeight="600">
                Trái cây.
              </Text>
            </VStack>
          </HStack>

          {FOOTER_INFO.map(({ title, items }) => (
            <VStack key={title} align="flex-start" spacing={3}>
              <Text fontWeight="bold" fontSize="lg" variant="secondary">
                {title}
              </Text>
              {items.map((item, i) => (
                <Text key={i} variant="secondary" fontSize="sm">
                  {item.label && <b>{item.label}</b>} {item.value}
                </Text>
              ))}
            </VStack>
          ))}
        </Stack>
      </Flex>
      <Box w="100%" borderTop="1px solid" borderColor="gray.700" pt={5}>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          Copyright © 2025 CoHai fruit.
        </Text>
      </Box>
    </Stack>
  );
};

export default Footer;

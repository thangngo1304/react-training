import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';

import backgroundImage from '../../assets/imgs/image-cohai-4.jpg';
import { SERVICE_LIST } from '@/mocks';
import { ServiceCard } from '@/components';

const Service = () => {
  return (
    <Stack w="100%" alignItems="center" backgroundColor="background.600">
      <Flex
        w="100%"
        h="250px"
        backgroundImage={backgroundImage}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          size={{ base: 'xl', lg: '4xl' }}
          variant="secondary"
          zIndex={2}
        >
          Dịch vụ
        </Heading>
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="blackAlpha.600"
          zIndex={1}
        />
      </Flex>
      <VStack
        w={{ base: '100%', md: '80%', '3xl': '1336px' }}
        backgroundColor="background.800"
        alignItems="center"
        px="20px"
        py="40px"
        rounded={10}
        my="-40px"
        zIndex={80}
      >
        <Stack w="100%">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="100%">
            {SERVICE_LIST.map((item) => (
              <ServiceCard serviceList={item} />
            ))}
          </SimpleGrid>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Service;

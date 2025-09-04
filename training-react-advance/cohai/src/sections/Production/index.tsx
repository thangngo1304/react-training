import { Heading, SimpleGrid, Stack, VStack } from '@chakra-ui/react';
import { ProductCard } from '@/components';
import { products } from '@/mocks';

const Production = () => {
  return (
    <VStack w="100%" backgroundColor="background.600" px="20px">
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
          <VStack
            w="100%"
            borderBottom="1px solid"
            borderColor="border.200"
            mb="20px"
          >
            <Heading>Sản Phẩm</Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} w="100%">
            {products.map((item) => (
              <ProductCard
                name={item.name}
                price={item.price}
                unit={item.unit}
                image={item.image}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </VStack>
    </VStack>
  );
};

export default Production;

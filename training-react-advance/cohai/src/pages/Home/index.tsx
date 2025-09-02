import { Footer } from '@/components';
import { Overview, Product } from '@/sections';
import { VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <VStack alignItems="flex-start" gap={0}>
      <Overview />
      <Product />
      <Footer />
    </VStack>
  );
};

export default HomePage;

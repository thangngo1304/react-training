import { Footer } from '@/components';
import { Overview, Product } from '@/sections';
import { VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <VStack alignItems="flex-start">
      <Overview />
      <Product />
      <Footer />
    </VStack>
  );
};

export default HomePage;

import { Footer } from '@/components';
import { FacebookIcon, ZaloIcon } from '@/icons';
import { Overview, Product, Service } from '@/sections';
import { VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <VStack alignItems="flex-start" gap={0}>
      <VStack position="fixed" bottom={10} right={6} zIndex={100} gap={4}>
        <Link to="https://www.facebook.com/vuacamcohai">
          <FacebookIcon />
        </Link>
        <Link to="https://zalo.me/0777834506">
          <ZaloIcon />
        </Link>
      </VStack>
      <Overview />
      <Product />
      <Service />
      <Footer />
    </VStack>
  );
};

export default HomePage;

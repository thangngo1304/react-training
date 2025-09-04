import { Footer } from '@/components';
import { FacebookIcon, ZaloIcon } from '@/icons';
import { Overview, Product, Service } from '@/sections';
import { VStack } from '@chakra-ui/react';

const HomePage = () => {
  const openFacebook = () => {
    const fbAppUrl = "fb://page/122096605682850188";
    const fbWebUrl = "https://www.facebook.com/vuacamcohai";

    const newWindow = window.open(fbAppUrl, "_blank");

    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        window.open(fbWebUrl, "_blank");
      }
    }, 800);
  };

  return (
    <VStack alignItems="flex-start" gap={0}>
      <VStack position="fixed" bottom={10} right={6} zIndex={100} gap={4}>
        <button onClick={openFacebook}>
          <FacebookIcon />
        </button>
        <a href="https://zalo.me/0777834506" target="_blank" rel="noopener noreferrer">
          <ZaloIcon />
        </a>
      </VStack>
      <Overview />
      <Product />
      <Service />
      <Footer />
    </VStack>
  );
};

export default HomePage;

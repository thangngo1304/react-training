import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import { Header } from '@/components';
import { imagesOverview } from '@/constants';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);

const Overview = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imagesOverview.length);
  };

  return (
    <VStack w="100%" h="550px" position="relative">
      <AnimatePresence mode="wait">
        <MotionBox
          key={index}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="550px"
          backgroundImage={`url(${imagesOverview[index]})`}
          backgroundSize="cover"
          backgroundPosition="center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          zIndex={0}
        />
      </AnimatePresence>
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.600"
        zIndex={1}
      />

      <Stack
        w={{ base: '100%', md: '748px', xl: '80%', '3xl': '1336px' }}
        h="100%"
        zIndex={10}
        px={{ base: '20px', lg: '0' }}
      >
        <Header />
        <VStack
          w="100%"
          maxW="834px"
          position="relative"
          alignItems="flex-start"
          mt="144px"
        >
          <Heading variant="secondary" size="4xl" lineHeight="1.3">
            Cam Tươi – Trọn Vẹn Hương Vị Tự Nhiên
          </Heading>
          <Text variant="secondary">
            Thưởng thức từng giọt nước cam nguyên chất, giàu vitamin C – tiếp
            thêm năng lượng và sự tươi mới cho mỗi ngày của bạn.
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Overview;

import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import { Header } from '@/components';
import { imagesOverview } from '@/constants';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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

  const handlePrev = () => {
    setIndex(
      (prev) => (prev - 1 + imagesOverview.length) % imagesOverview.length,
    );
  };

  return (
    <VStack w="100%" h="850px" position="relative">
      <AnimatePresence mode="wait">
        <MotionBox
          key={index}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="850px"
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

      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        position="absolute"
        top="50%"
        left="20px"
        transform="translateY(-50%)"
        onClick={handlePrev}
        zIndex={2}
        bg="whiteAlpha.700"
        _hover={{ bg: 'background.300' }}
        rounded="full"
      />
      <IconButton
        aria-label="Next"
        icon={<ChevronRightIcon />}
        position="absolute"
        top="50%"
        right="20px"
        transform="translateY(-50%)"
        onClick={handleNext}
        zIndex={2}
        bg="whiteAlpha.700"
        _hover={{ bg: 'background.300' }}
        rounded="full"
      />

      <HStack position="absolute" bottom="20px" zIndex={2} spacing="8px">
        {imagesOverview.map((_, i) => (
          <Button
            key={i}
            onClick={() => setIndex(i)}
            w="10px"
            h="10px"
            p={0}
            minW="unset"
            borderRadius="full"
            bg={i === index ? 'white' : 'whiteAlpha.500'}
            _hover={{ bg: 'whiteAlpha.800' }}
          />
        ))}
      </HStack>

      <Stack
        w={{ base: '95%', md: '748px', xl: '80%', '3xl': '1336px' }}
        h="100%"
        zIndex={10}
      >
        <Header />
        <VStack w="100%" maxW="834px" position="relative" alignItems="flex-start" mt="144px">
          <Heading variant="secondary" size="4xl">
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

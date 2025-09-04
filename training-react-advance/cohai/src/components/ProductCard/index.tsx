import { formatVND } from '@/utils';
import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';

interface ProductCardProps {
  name: string;
  price: number;
  unit: string;
  image: string;
}

const ProductCard = ({ name, price, unit, image }: ProductCardProps) => (
  <Box
    position="relative"
    bg="white"
    shadow="sm"
    rounded="md"
    overflow="hidden"
    role="group"
    _hover={{ shadow: 'md' }}
    transition="0.3s"
  >
    <Box position="relative" w="100%" h="180px">
      <Image
        src={image}
        alt={name}
        w="100%"
        h="100%"
        objectFit="cover"
        transition="0.3s"
        _groupHover={{ transform: 'scale(1.05)' }}
      />
    </Box>
    <VStack p={2} alignItems="flex-start">
      <Heading fontWeight="500">{name}</Heading>
      <Text color="text.300" fontWeight="600">
        {formatVND(price)}/{unit}
      </Text>
    </VStack>
  </Box>
);

export default ProductCard;

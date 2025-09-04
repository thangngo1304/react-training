import { Check } from '@/icons';
import { ServiceType } from '@/mocks';
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';

interface ServiceProps {
  serviceList: ServiceType;
}

const ServiceCard = ({ serviceList }: ServiceProps) => {
  return (
    <VStack
      p="35px"
      rounded="10px"
      position="relative"
      bg="white"
      shadow="sm"
      overflow="hidden"
      role="group"
      boxShadow="md"
      transition="0.3s"
    >
      <Box w="100%" borderBottom="1px solid" borderColor="border.200" mb="20px">
        <Heading variant="tertiary" size="lg">
          {serviceList.category}
        </Heading>
      </Box>
      <VStack alignItems="flex-start" gap={3}>
        {serviceList.items.map((item) => (
          <HStack alignItems="center" justifyContent="flex-start">
            <Box w="19px" h="13px">
              <Check />
            </Box>
            <Text>{item}</Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default ServiceCard;

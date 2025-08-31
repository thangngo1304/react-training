import { Heading, HStack, Text } from '@chakra-ui/react';

type TInfoItemProps = {
  param?: string;
  content?: string;
};

const InfoItem = ({ param, content }: TInfoItemProps) => (
  <HStack>
    <Heading fontSize="sm" color="text.500">
      {param}:
    </Heading>
    <Text fontSize="sm" maxW={{ base: '150px', lg: '250px' }} noOfLines={1}>{content}</Text>
  </HStack>
);

export default InfoItem;

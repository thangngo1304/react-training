import { ReactNode } from 'react';
import { Heading, VStack } from '@chakra-ui/react';

type TCardInfoProps = {
  title?: string;
  children?: ReactNode;
};

const CardInfo = ({ title, children }: TCardInfoProps) => (
  <VStack
    alignItems="flex-start"
    borderRadius="lg"
    bgColor="background.100"
    h="378px"
    px="20px"
    py="28px"
    boxShadow="0 3.5px 5.5px rgba(0, 0, 0, .02)"
    overflowY="scroll"
  >
    <Heading as="h2" mb="16px">
      {title}
    </Heading>
    {children}
  </VStack>
);

export default CardInfo

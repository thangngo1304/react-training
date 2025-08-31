import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import ErrorBoundary from '../ErrorBoundary';

type TCardProject = {
  id: string;
  image: string;
  name: string;
  projectId: string;
  description: string;
  onClick: (id: string) => void;
};

const CardProject = ({
  id,
  image,
  name,
  projectId,
  description,
  onClick
}: TCardProject) => {
  const handleClick = () => {
    onClick && onClick(id)
  }
  return (
    <ErrorBoundary fallback={<Text textAlign="center">CardProject component went wrong</Text>}>
      <VStack alignItems='flex-start'>
        <Box
          position="relative"
          borderRadius="lg"
          w='100%'
          mb="20px"
        >
          <Image
            src={image}
            alt={name}
            w="100%"
            borderRadius="lg"
            objectFit="cover"
          />
          <Box
            position="absolute"
            borderRadius="lg"
            w="100%"
            h="100%"
            top={0}
            zIndex={2}
            bgGradient="linear(to-t, linear.100, linear.200)"
          />
        </Box>
        <VStack alignItems="flex-start" maxW='410px' px="10px">
          <Text size="textSm">Project #{projectId}</Text>
          <Heading mb="10px">{name}</Heading>
          <Text
            mb="20px"
            noOfLines={2}
          >
            {description}
          </Text>
          <Box>
            <Button w="110px" size="xs" variant="tertiary" onClick={handleClick}>
              VIEW ALL
            </Button>
          </Box>
        </VStack>
      </VStack >
    </ErrorBoundary>
  );
}
export default CardProject;

import { Flex, Heading, Skeleton } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Constants
import { ERROR_MESSAGES } from '@/constants';

type TFetchingProps = {
  errorMessage?: string;
  children?: ReactNode;
  isError?: boolean;
  isLoading?: boolean;
};

const Fetching = ({
  isLoading = false,
  isError = false,
  errorMessage = ERROR_MESSAGES.SOMETHING_ERROR,
  children,
}: TFetchingProps): JSX.Element => {
  return isError ? (
    <Heading
      as="h3"
      color="text.100"
      bgColor="background.700"
      rounded="lg"
      p="4px"
    >
      {errorMessage}
    </Heading>
  ) : isLoading ? (
    <Flex gap="20px" w="100%" flexDirection="column">
      <Skeleton w="100%" h="40px" borderRadius="md" />
      <Skeleton w="100%" h="40px" borderRadius="md" />
      <Skeleton w="100%" h="40px" borderRadius="md" />
      <Skeleton w="100%" h="40px" borderRadius="md" />
      <Skeleton w="100%" h="40px" borderRadius="md" />
    </Flex>
  ) : (
    <>{children}</>
  );
};

export default Fetching;

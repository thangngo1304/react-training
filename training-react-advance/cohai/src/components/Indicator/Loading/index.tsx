// Libs
import { Spinner as SpinnerChakra, Flex } from '@chakra-ui/react';

const LoadingIndicator = (): JSX.Element => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      position="fixed"
      zIndex={60}
      pointerEvents="none"
      inset={0}
    >
      <SpinnerChakra />
    </Flex>
  );
};

export default LoadingIndicator;

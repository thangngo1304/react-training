// Libs
import { ReactNode } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

type TIndicatorProps = {
  isOpen?: boolean;
  children?: ReactNode;
};

const Indicator = ({
  isOpen = false,
  children,
}: TIndicatorProps): JSX.Element => (
  <>
    {children}
    {isOpen && (
      <Center
        position="fixed"
        zIndex={999999999}
        inset={0}
        bg="black"
        opacity={0.7}
      >
        <Spinner
          size={{
            base: 'md',
            md: 'lg',
            lg: 'xl',
          }}
          color="text.300"
        />
      </Center>
    )}
  </>
);

const IndicatorMemorized = Indicator;

export default IndicatorMemorized;

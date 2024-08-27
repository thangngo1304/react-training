import { ReactNode, useCallback, useState } from 'react';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Components
import { AuthForm, ErrorBoundary, Footer } from '@/components';
import { LogoChakra } from '@/icons';

// Hooks
import { useAuthLogin } from '@/hooks';

// Constants
import { ROUTES, ERROR_MESSAGES } from '@/constants';

// Types
import { AuthFormData } from '@/types';

// Store
import { authStore } from '@/stores';

// Utils
import { formatUppercaseFirstLetter } from 'src/utils';

const SignInPage = ({ children }: { children?: ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const setUser = authStore((state) => state.setUser);

  const { users } = useAuthLogin();

  // Sign in api
  const handleUserSignIn = useCallback(
    (data: AuthFormData): void => {
      const res = users?.records.find(
        (user) =>
          user.fields.email.toLowerCase() === data.email.toLowerCase() &&
          user.fields.password === data.password,
      );
      if (res) {
        setUser({ user: res });
        navigate(ROUTES.TABLES);
      } else {
        setErrorMessage(
          formatUppercaseFirstLetter(ERROR_MESSAGES.AUTH_INCORRECT),
        );
      }
    },
    [users, navigate, setUser],
  );

  const onSubmit = useCallback(
    (data: AuthFormData) => {
      handleUserSignIn(data);
    },
    [handleUserSignIn],
  );

  const handleResetError = useCallback(() => {
    setErrorMessage('');
  }, []);

  return (
    <VStack position="relative" height="100%" gap="0px">
      {children}
      <VStack
        w={{ base: '100%', md: "988px" }}
        h="100%"
        pb="40px"
        px={{ base: '25px', md: '0' }}
        gap="0"
        position="relative"
        zIndex={2}
        justifyContent="space-between"
      >
        <Flex w="100%" pt='30px' alignItems="center" justifyContent={{ base: 'center', lg: "unset" }} flex={2}>
          <ErrorBoundary fallback={<Text textAlign="center">AuthForm from sign-in went wrong</Text>}>
            <AuthForm
              onSubmit={onSubmit}
              errorMessage={errorMessage}
              handleClearRootError={handleResetError}
            />
          </ErrorBoundary>
        </Flex>
        <Flex w="100%" flex={1}>
          <Footer />
        </Flex>
      </VStack>
      <Flex
        position="absolute"
        zIndex={1}
        top={0}
        right={0}
        w={{ md: "300px", lg: "862px" }}
        h="872px"
        alignItems="center"
        justifyContent="center"
        borderBottomLeftRadius="25px"
        backgroundImage="/imgs/background-login.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        objectFit="cover"
        display={{ base: 'none', md: 'flex' }}
      >
        <LogoChakra />
      </Flex>
    </VStack>
  );
};

export default SignInPage;

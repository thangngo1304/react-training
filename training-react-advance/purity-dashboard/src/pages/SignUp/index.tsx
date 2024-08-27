import { ReactNode, useCallback } from 'react';
import { Box, Flex, Heading, Text, useToast, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Components
import { Footer, AuthForm, ErrorBoundary } from '@/components';

// Constants
import { ROUTES, ERROR_MESSAGES, SUCCESS_MESSAGE } from '@/constants';

// Types
import { AuthFormData, TUser } from '@/types';

// Hooks
import { useAuthLogin, useAuthRegister } from '@/hooks';

// Stores
import { authStore } from '@/stores';

const SignUpPage = ({ children }: { children?: ReactNode }) => {
  const { users } = useAuthLogin();
  const { createAccount } = useAuthRegister();
  const setUser = authStore((state) => state.setUser);
  const navigate = useNavigate();
  const toast = useToast();

  const handleCreateAccount = useCallback(
    async (data: AuthFormData) => {
      try {
        const isUser = users?.records.some(
          (user) =>
            user.fields.email.toLowerCase() === data.email.toLowerCase(),
        );

        if (isUser) {
          toast({
            title: ERROR_MESSAGES.CREATE_ACCOUNT,
            description: ERROR_MESSAGES.ACCOUNT_CREATED,
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        } else {
          const payload: TUser[] = [
            {
              fields: {
                name: data.name,
                email: data.email,
                password: data.password,
              },
            },
          ];

          await createAccount({ records: payload });

          toast({
            title: SUCCESS_MESSAGE.TITLE_MESSAGE_CREATE('Account'),
            description: SUCCESS_MESSAGE.ACCOUNT_SUCCESS,
            status: 'success',
            duration: 2000,
            isClosable: true,
          });

          navigate(ROUTES.SIGN_IN);
        }
      } catch (error) {
        throw error;
      }
    },
    [createAccount, navigate, setUser, users],
  );

  const onSubmit = useCallback(
    (data: AuthFormData) => {
      handleCreateAccount(data);
    },
    [handleCreateAccount],
  );

  return (
    <VStack position="relative" height="100%" gap="0px">
      {children}
      <VStack
        w={{ base: '100%', md: '988px' }}
        h="100%"
        pb="40px"
        px={{ base: '25px', md: '0' }}
        gap="0"
        position="relative"
        zIndex={2}
        justifyContent="space-between"
      >
        <VStack w="100%" alignItems="center" justifyContent="center" flex={6}>
          <VStack width="333px" pt="30px" mb="66px">
            <Heading size="xl" variant="secondary">
              Welcome!
            </Heading>
            <Text textAlign="center" variant="secondary">
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </VStack>
          <ErrorBoundary fallback={<Text textAlign="center">AuthForm from sign-up went wrong</Text>}>
            <AuthForm isRegister onSubmit={onSubmit} />
          </ErrorBoundary>
        </VStack>
        <Flex w="100%" flex={1}>
          <Footer />
        </Flex>
      </VStack>
      <Box
        position="absolute"
        zIndex={1}
        top={{ base: 0, md: '24px' }}
        w={{ base: '100%', md: '96%' }}
        h={{
          base: '700px',
          md: '500px',
          xl: '320px',
          '2xl': '420px',
          '5xl': 520,
        }}
        borderRadius={{ base: 'unset', md: 'lg' }}
        backgroundImage="/imgs/background-signup.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        objectFit="cover"
      />
    </VStack>
  );
};

export default SignUpPage;

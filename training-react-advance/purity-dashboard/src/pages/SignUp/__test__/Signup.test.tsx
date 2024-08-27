import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

// Components
import SignUpPage from "..";

// Mocks
import { USER } from "@/mocks";

const mockCreateAccount = jest.fn()

jest.mock('@/hooks', () => ({
  useAuthRegister: () => ({
    createAccount: mockCreateAccount,
  }),
  useAuthLogin: () => ({
    users: USER
  })
}));

jest.mock('@/stores', () => ({
  authStore: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(),
}));

const mockToast = jest.fn();
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useToast: () => mockToast,
}));

const queryClient = new QueryClient();
describe('Sign Up page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render match with snapshot.', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <SignUpPage />
      </QueryClientProvider>
    );

    expect(container).toMatchSnapshot();
  });
})

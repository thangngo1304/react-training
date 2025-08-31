import { Heading, Text, Center, Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Constants
import { ROUTES } from '@/constants';

const NotFoundPage = () => (
  <Center h='100vh' backgroundColor="borderSecondaryColor">
    <Stack>
      <Heading as="h1" fontSize="6xl" color="red">
        404
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Page not found
      </Text>
      <Text fontSize="lg" color="gray.600">
        Sorry, the page you are looking for does not exist.
      </Text>
      <Link to={ROUTES.HOME}>
        <Button my="4">Back home page</Button>
      </Link>
    </Stack>
  </Center>
);

export default NotFoundPage;

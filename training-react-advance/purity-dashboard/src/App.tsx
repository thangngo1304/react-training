import { Suspense } from 'react';

// Providers
import { ChakraProvider, QueryProvider, RouterProvider } from '@/providers';

// components
import { LoadingIndicator } from '@/components';

const App = () => {
  return (
    <QueryProvider>
      <ChakraProvider>
        <Suspense fallback={<LoadingIndicator />}>
          <RouterProvider />
        </Suspense>
      </ChakraProvider>
    </QueryProvider>
  );
};

export default App;

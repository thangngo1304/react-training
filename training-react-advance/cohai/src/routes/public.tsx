import { Outlet, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

// Constants
import { ROUTES } from '@/constants';

// Pages
const HomePage = lazy(() => import('@/pages/Home'));

export const publicRoutes: RouteObject = {
  element: (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: ROUTES.ROOT,
      Component: Outlet,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: ROUTES.HOME,
          element: <HomePage />,
        },
      ],
    },
  ],
};

import * as React from 'react';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '#core/router/router.dev-tools';

export const Route = createRootRouteWithContext()({
  component: () => {
    return (
      <>
        <Outlet />
        <React.Suspense>
          <TanStackRouterDevtools />
        </React.Suspense>
      </>
    );
  },
});

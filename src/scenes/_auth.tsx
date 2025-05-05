import { AppLayout } from '#layouts/app.layout.tsx';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: () => {
    return (
      <AppLayout>
        <Outlet />
      </AppLayout>
    );
  },
});

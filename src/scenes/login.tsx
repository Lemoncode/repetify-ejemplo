import { createFileRoute } from '@tanstack/react-router';
import { AuthLayout } from '#layouts';
import { LoginPod } from '#pods/login';

export const Route = createFileRoute('/login')({
  component: () => {
    return (
      <AuthLayout>
        <LoginPod />
      </AuthLayout>
    );
  },
});

import { createFileRoute } from '@tanstack/react-router';
import { DashboardPod } from '#pods/dashboard';

export const Route = createFileRoute('/_auth/dashboard/')({
  component: DashboardPod,
});

import { createFileRoute } from '@tanstack/react-router';
import { DeskPod } from '#pods/desk/index.ts';

export const Route = createFileRoute('/_auth/dashboard/desk/$deskId/')({
  component: DeskPod,
})

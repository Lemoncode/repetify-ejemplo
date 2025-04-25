import { createFileRoute } from '@tanstack/react-router';
import { ResultPod } from '#pods/result';

export const Route = createFileRoute('/_auth/result/')({
  component: ResultPod,
});

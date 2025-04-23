import { createFileRoute } from '@tanstack/react-router';
import { CardPod } from '#pods/card/index.ts';

export const Route = createFileRoute('/_auth/dashboard/card/$deckId/')({
  component: CardPod,
})

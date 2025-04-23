import { createFileRoute } from '@tanstack/react-router';
import { DeckPod } from '#pods/deck/index.ts';

export const Route = createFileRoute('/_auth/dashboard/deck/$deckId/')({
  component: DeckPod,
})

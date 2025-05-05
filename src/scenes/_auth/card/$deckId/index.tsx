import { createFileRoute } from '@tanstack/react-router';
import { CardPod } from '#pods/card/index.ts';

export const Route = createFileRoute('/_auth/card/$deckId/')({
  component: CardPod,
})

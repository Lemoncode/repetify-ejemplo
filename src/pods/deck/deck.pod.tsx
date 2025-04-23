import React from 'react';
import { useParams } from '@tanstack/react-router';

export const DeckPod: React.FC = () => {
  const { deckId } = useParams({ strict: false });

  return <h1>Deck component {deckId}</h1>
}

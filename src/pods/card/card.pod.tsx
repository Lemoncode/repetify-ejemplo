import React from 'react';
import { useParams } from '@tanstack/react-router';

export const CardPod: React.FC = () => {
  const { deckId } = useParams({ strict: false });

  return <h1>Card component {deckId}</h1>
}

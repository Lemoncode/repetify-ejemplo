import React from 'react';
import { useParams } from '@tanstack/react-router';
import { CardComponent } from './card-component';

export const DeckPod: React.FC = () => {
  const { deckId } = useParams({ strict: false });

  return (
    <CardComponent />
  )
}

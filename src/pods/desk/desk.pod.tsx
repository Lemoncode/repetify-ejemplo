import React from 'react';
import { useParams } from '@tanstack/react-router';

export const DeskPod: React.FC = () => {
  const { deskId } = useParams({ strict: false });

  return <h1>Desk component {deskId}</h1>
}

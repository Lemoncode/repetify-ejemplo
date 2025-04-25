import React from 'react';
import { ResultComponent } from './components/result.component';
import { useNavigate } from '@tanstack/react-router';

export const ResultPod: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/dashboard' });
  };

  return (
    <div style={{ height: '100vh' }}>
      <ResultComponent onClick={handleClick} />
    </div>

  )
}

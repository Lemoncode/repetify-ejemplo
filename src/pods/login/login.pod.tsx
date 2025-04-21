import { NavigationButton } from '#common/components/index.ts';
import React from 'react';

export const LoginPod: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Login</h1>
      <NavigationButton path="/dashboard">Go to Dashboard</NavigationButton>
    </div>
  );
};

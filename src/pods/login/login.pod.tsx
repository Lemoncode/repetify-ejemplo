import React from 'react';
import { LoginComponent } from './login.component';

export const LoginPod: React.FC = () => {
  const handleMicrosoftLogin = () => {
    window.location.href = '/api/ExternalLogin/initiateMicrosoftSignin';
  };

  return <LoginComponent onMicrosoftLogin={handleMicrosoftLogin} />;
};

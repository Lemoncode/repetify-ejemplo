import React from 'react';
import { LoginComponent } from './login.component';
import { ENV } from '#core/constants/env.constants.ts';

export const LoginPod: React.FC = () => {
  const handleMicrosoftLogin = () => {
    window.location.href = ENV.MICROSOFT_LOGIN_URL;
  };

  return <LoginComponent onMicrosoftLogin={handleMicrosoftLogin} />;
};

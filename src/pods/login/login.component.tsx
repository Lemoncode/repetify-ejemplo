import React from 'react';
import * as classes from './login.component.style';
import { MicrosoftLoginComponent } from './components/microsoft-login.component';
import { PaperComponent } from '#common/components/paper.component.tsx';

interface Props {
  onMicrosoftLogin: () => void;
}

export const LoginComponent: React.FC<Props> = ({ onMicrosoftLogin }) => {
  return (
    <PaperComponent className={classes.content}>
      <img src="/repetify-logo.png" alt="Logo repetify" className={classes.logo} />
      <h1>Login</h1>
      <MicrosoftLoginComponent onMicrosoftLogin={onMicrosoftLogin} />
    </PaperComponent>
  );
};

import React from 'react';
import * as classes from './login.component.style';
import { MicrosoftLoginComponent } from './components/microsoft-login.component';

interface Props {
  onMicrosoftLogin: () => void;
}

export const LoginComponent: React.FC<Props> = ({ onMicrosoftLogin }) => {
  return (
    <div className={classes.content}>
      <h1>Login</h1>
      <MicrosoftLoginComponent onMicrosoftLogin={onMicrosoftLogin} />
    </div>
  );
};

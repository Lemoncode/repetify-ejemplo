import React from 'react';
import * as classes from './microsoft-login.component.style';

interface Props {
  onMicrosoftLogin: () => void;
}

export const MicrosoftLoginComponent: React.FC<Props> = ({ onMicrosoftLogin }) => {
  return (
    <button className={classes.microsoftButton} onClick={onMicrosoftLogin}>
      <img src="/microsoft-logo.svg" alt="Logo Microsoft" />
    </button>
  );
};

import React from 'react';
import * as classes from './microsoft-login.component.style';
import { Button } from '@mui/material';
interface Props {
  onMicrosoftLogin: () => void;
}

export const MicrosoftLoginComponent: React.FC<Props> = ({ onMicrosoftLogin }) => {
  return (
    <Button sx={classes.microsoftButton} onClick={onMicrosoftLogin}>
      <img src="/microsoft-logo.svg" alt="Logo Microsoft" />
    </Button>
  );
};

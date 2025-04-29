import React from 'react';
import { PaperComponent } from '#common/components';
import * as classes from './app.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <div className={classes.root}>
      <PaperComponent style={{ maxWidth: '480px', width: '100%', padding: '30px' }}>{children}</PaperComponent>
    </div>
  );
};

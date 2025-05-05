import React from 'react';
import Paper, { PaperProps } from '@mui/material/Paper';

interface PaperComponentProps extends PaperProps {
  children: React.ReactNode;
  className?: string;
}

export const PaperComponent: React.FC<PaperComponentProps> = props => {
  const { children, className, ...restProps } = props;
  return (
    <Paper {...restProps} className={className}>
      {children}
    </Paper>
  );
};

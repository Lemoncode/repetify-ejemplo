import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { FileRouteTypes } from '#core/router/route-tree.ts';

interface Props extends ButtonProps {
  path: FileRouteTypes['to'];
  params?: Record<string, string | number>;
  className?: string;
}

export const NavigationButton: React.FC<Props> = props => {
  const { path, params, children, className, ...buttonProps } = props;

  return (
    <Link to={path} params={params} className={className}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
};

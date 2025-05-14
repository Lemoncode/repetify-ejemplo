import React from 'react';
import * as classes from './card-summary.component.style';
import { NavigationButton } from '#common/components';

interface Props {
  correctCount: number;
  total: number;
}

export const CardSummaryComponent: React.FC<Props> = ({ correctCount, total }) => {
  const percentage = Math.round((correctCount / total) * 100);

  return (
    <div className={classes.finished}>
      <h2>¡Terminaste!</h2>
      <p>
        Respuestas correctas: {correctCount} de {total} ({percentage}%)
      </p>
      <NavigationButton path="/dashboard">Volver al inicio</NavigationButton>
    </div>
  );
};

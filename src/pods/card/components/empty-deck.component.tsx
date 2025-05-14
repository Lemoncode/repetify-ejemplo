import React from 'react';
import * as classes from './empty-deck.component.style';

export const EmptyDeck: React.FC = () => {
  return (
    <div className={classes.container}>
      <p>El mazo esta vacío.</p>
    </div>
  );
};

import React from 'react';
import { Deck } from '../dashboard.vm';
import { DashboardCardComponent } from './dashboard.card.component';
import * as classes from './dashboard-list.component.style';

interface Props {
  decks: Deck[];
}

export const DashboardListComponent: React.FC<Props> = (props: Props) => {
  const { decks } = props;

  return (
    <div className={classes.content}>
      <h1 className={classes.title}>Elije tu mazo</h1>
      {decks.map(deck => (
        <DashboardCardComponent key={deck.id} deck={deck} />
      ))}
    </div>
  );
};

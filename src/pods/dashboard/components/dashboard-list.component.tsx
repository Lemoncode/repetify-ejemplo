import React from 'react';
import Typography from '@mui/material/Typography';
import { Deck } from '../dashboard.vm';
import { DashboardCardComponent } from './dashboard.card.component'
import * as classes from './dashboard-list.component.style';

interface Props {
  decks: Deck[];
}

export const DashboardListComponent: React.FC<Props> = (props: Props) => {
  const { decks } = props;

  return (
    <div className={classes.content}>
      <Typography>Elije tu mazo</Typography>
      {
        decks.map(deck => (
          <DashboardCardComponent key={deck.id} deck={deck} />
        ))
      }
    </div>
  )
}

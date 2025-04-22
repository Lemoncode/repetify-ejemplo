import React from 'react';
import Card from '@mui/material/Card';
import { Deck } from './dashboard.vm';
import Typography from '@mui/material/Typography';
import * as classes from './dashboard-list.component.styles';

interface Props {
  decks: Deck[];
}

export const DashboardListComponent: React.FC<Props> = (props: Props) => {
  const { decks } = props;

  return (
    <div className={classes.root}>
      {
        decks.map(deck => (
          <Card key={deck.id} className={classes.card}>
            <Typography>{deck.name}</Typography>
          </Card>
        ))
      }
    </div>

  )
}

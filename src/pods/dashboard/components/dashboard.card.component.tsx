import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import * as classes from './dashboard-card.component.styles';
import { Deck } from '../dashboard.vm';

interface Props {
  deck: Deck;
}

export const DashboardCardComponent: React.FC<Props> = (props: Props) => {
  const { deck } = props;
  const navigate = useNavigate();

  const handleNavegate = (deckId: string) => {
    navigate({ to: '/dashboard/deck/$deckId', params: { deckId } })
  }

  return (
    <div className={classes.content} onClick={() => handleNavegate(deck.id)}>
      <Card className={classes.card}>
        <Typography>{deck.name}</Typography>
      </Card>
    </div>
  )
}

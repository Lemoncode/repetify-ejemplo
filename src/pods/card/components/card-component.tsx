import React from 'react';
import Button from '@mui/material/Button';
import { NavigationButton } from '#common/components/index.ts';
import { Card } from '../card-vm';
import * as classes from './card-component.styles';

interface Props {
  card: Card;
  totalPage: number;
  page: number;
  onShowAnswer: () => void;
}

export const CardComponent: React.FC<Props> = (props: Props) => {
  const { totalPage, page, card, onShowAnswer } = props;

  return (
    <div className={classes.card}>
      <h1>{page}/{totalPage}</h1>
      <h2>{card.originalWord}</h2>
      <Button onClick={onShowAnswer}>Ver respuesta</Button>
      <div className={classes.finishReview}>
        <NavigationButton path=''>Terminar</NavigationButton>
      </div>
    </div>
  )
}

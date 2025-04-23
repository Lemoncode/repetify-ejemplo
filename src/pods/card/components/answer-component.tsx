import React from 'react';
import Button from '@mui/material/Button';
import { Card } from '../card-vm';
import { NavigationButton } from '#common/components/index.ts';
import * as classes from './answer-component.styles';

interface Props {
  card: Card;
  page: number;
  totalPage: number;
  onAccept: () => void;
  onFail: () => void;
}

export const AnswerComponent: React.FC<Props> = (props: Props) => {
  const { card, page, totalPage, onAccept, onFail } = props;

  return (
    <div className={classes.answer}>
      <h1>{page}/{totalPage}</h1>
      <h2>{card.translateWord}</h2>
      <Button onClick={onAccept}>Acerté</Button>
      <Button onClick={onFail}>Fallé</Button>
      <div className={classes.finishReview}>
        <NavigationButton path='/result'>Terminar</NavigationButton>
      </div>
    </div>
  )
}

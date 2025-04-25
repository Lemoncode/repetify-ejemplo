import React from 'react';
import Button from '@mui/material/Button';
import { NavigationButton } from '#common/components/index.ts';
import { HeaderComponent } from './header-component';
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
      <HeaderComponent title={card.originalWord} page={page} totalPage={totalPage} />
      <Button onClick={onShowAnswer}>Ver respuesta</Button>
      <div className={classes.finishReview}>
        <NavigationButton path='/result'>Terminar</NavigationButton>
      </div>
    </div>
  )
}

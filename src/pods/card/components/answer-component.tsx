import React from 'react';
import Button from '@mui/material/Button';
import { Card } from '../card-vm';
import { NavigationButton } from '#common/components/index.ts';
import { HeaderComponent } from './header-component';
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
      <HeaderComponent title={card.translateWord} page={page} totalPage={totalPage} />
      <Button onClick={onAccept}>Acerté</Button>
      <Button onClick={onFail}>Fallé</Button>
      <div className={classes.finishReview}>
        <NavigationButton path='/result'>Terminar</NavigationButton>
      </div>
    </div>
  )
}

import React from 'react';
import * as classes from './card.component.style';
import { Card } from './card.vm';
import { CardAnswerComponent, CardQuestionComponent } from './components';

interface Props {
  card: Card;
  currentIndex: number;
  total: number;
  showAnswer: boolean;
  onReveal: () => void;
  onNext: (wasCorrect: boolean) => void;
}

export const CardComponent: React.FC<Props> = ({ card, currentIndex, total, showAnswer, onReveal, onNext }) => {
  return (
    <div className={classes.container}>
      {showAnswer ? (
        <CardAnswerComponent
          translatedWord={card.translatedWord}
          currentIndex={currentIndex}
          total={total}
          onNext={onNext}
        />
      ) : (
        <CardQuestionComponent
          originalWord={card.originalWord}
          currentIndex={currentIndex}
          total={total}
          onReveal={onReveal}
        />
      )}
    </div>
  );
};

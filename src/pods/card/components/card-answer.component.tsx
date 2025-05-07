import React from 'react';
import { Button } from '@mui/material';
import * as classes from './card-answer.component.style';
import { NavigationButton } from '#common/components/index.ts';

interface Props {
  translatedWord: string | undefined;
  currentIndex: number;
  total: number;
  onNext: (wasCorrect: boolean) => void;
}

export const CardAnswerComponent: React.FC<Props> = ({ translatedWord, currentIndex, total, onNext }) => {
  return (
    <>
      <div className={classes.counter}>
        {currentIndex + 1} / {total}
      </div>
      <div className={classes.word}>{translatedWord}</div>
      <div className={classes.feedbackButtons}>
        <Button sx={classes.btnEmojiSx} onClick={() => onNext(true)}>
          <span role="img" aria-hidden className={classes.emoji}>
            😊
          </span>
          Acerté
        </Button>
        <Button sx={classes.btnEmojiSx} onClick={() => onNext(false)}>
          <span role="img" aria-hidden className={classes.emoji}>
            😣
          </span>
          Fallé
        </Button>
      </div>
      <NavigationButton path="/dashboard" className={classes.terminateLink}>
        Terminar
      </NavigationButton>
    </>
  );
};

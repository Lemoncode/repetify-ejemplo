import React from 'react';
import { Button, Typography } from '@mui/material';
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
        <Button className={classes.btnEmojiSx} onClick={() => onNext(true)} color="success">
          <span role="img" aria-hidden className={classes.emoji}>
            😊
          </span>
          <Typography variant="h6">Acerte</Typography>
        </Button>
        <Button className={classes.btnEmojiSx} onClick={() => onNext(false)} color="error">
          <span role="img" aria-hidden className={classes.emoji}>
            😣
          </span>
          <Typography variant="h6">Fallé</Typography>
        </Button>
      </div>
      <NavigationButton path="/dashboard" className={classes.terminateLink}>
        Terminar
      </NavigationButton>
    </>
  );
};

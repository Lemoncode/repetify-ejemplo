import React from 'react';
import { Button } from '@mui/material';
import * as classes from './card-question.component.style';
import { NavigationButton } from '#common/components/index.ts';

interface Props {
  originalWord: string | undefined;
  currentIndex: number;
  total: number;
  onReveal: () => void;
}

export const CardQuestionComponent: React.FC<Props> = ({ originalWord, currentIndex, total, onReveal }) => {
  return (
    <>
      <div className={classes.counter}>
        {currentIndex + 1} / {total}
      </div>
      <div className={classes.word}>{originalWord}</div>
      <Button sx={classes.btnRevealSx} onClick={onReveal}>
        Ver respuesta
      </Button>
      <NavigationButton path="/dashboard" className={classes.terminateLink}>
        Terminar
      </NavigationButton>
    </>
  );
};

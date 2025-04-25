import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as classes from './result.component.style';

interface Props {
  onClick: () => void;
}

export const ResultComponent: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <div className={classes.result}>
      <h1>Resultado</h1>
      <Typography>Porcentaje de acierto</Typography>
      <Typography>80%</Typography>
      <Button onClick={onClick}>Volver a inicio</Button>
    </div>
  )
}

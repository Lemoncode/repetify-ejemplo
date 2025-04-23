import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const CardComponent: React.FC = () => {

  return (
    <div>
      <h1>1/8</h1>
      <Typography>Soccer</Typography>
      <Button onClick={() => {
        console.log('hola')
      }}>Ver respuesta</Button>
    </div>
  )
}

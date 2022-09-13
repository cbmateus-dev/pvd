import { Button } from '@mui/material';
import React from 'react';

export default function InputEntrada({title, children}) {
  return (
    <div>
      <Button variant="outlined">{title}{children}</Button>
    </div>
  )
}

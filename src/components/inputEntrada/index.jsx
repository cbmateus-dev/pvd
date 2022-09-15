import { Button } from '@mui/material';
import React from 'react';

export default function InputEntrada({ title, children, width, onClick, onKeyDown }) {
  return (
    <div>
      <Button onClick={onClick} onKeyDown={onKeyDown} style={{ width }} variant="outlined">{title}{children}</Button>
    </div>
  )
}

import { Button } from '@mui/material';
import React from 'react';

export default function InputDisabled({ title, children }) {
  return (
    <div>
      <Button  >{title}{children}</Button>
    </div>
  )
}

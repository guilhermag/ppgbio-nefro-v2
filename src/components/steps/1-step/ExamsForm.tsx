// Step 1

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';

export const ExamsForm = ({ selectNextStep }: CheckerNextStep) => {
  const handleChange = () => {
    selectNextStep(1);
  };

  return (
    <div>
      <h2>Exames</h2>
      <p>
        Todos esses exames devem ser realizados e selecionados para prosseguir.
      </p>
      <FormControl>
        <FormLabel component='legend'>Lista de exames realizados:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox name='creatinine' onChange={handleChange} required />
            }
            label='Creatinina'
          />
          <FormControlLabel
            control={<Checkbox name='urine' onChange={handleChange} required />}
            label='Urina I'
          />
          <FormControlLabel
            control={
              <Checkbox name='microalb' onChange={handleChange} required />
            }
            label='Microalbuminuria.'
          />
          <FormControlLabel
            control={
              <Checkbox name='ultrasound' onChange={handleChange} required />
            }
            label='Ultrassom de aparelho urinário.'
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

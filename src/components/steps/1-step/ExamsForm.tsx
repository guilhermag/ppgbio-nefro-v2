// Step 1

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';

export const ExamsForm = ({ selectNextStep }: CheckerNextStep) => {
  const checkOptions = [
    { name: 'creatine', label: 'Creatinina.' },
    { name: 'urine', label: 'Urina I.' },
    { name: 'microalb', label: 'Microalbuminuria.' },
    { name: 'ultrasound', label: 'Ultrassom de aparelho urinário.' },
  ];

  const handleChange = () => {
    selectNextStep(1);
  };

  return (
    <div>
      <h2 className='step-title'>Exames</h2>
      <p className='subtitle'>
        Todos esses exames devem ser realizados e selecionados para prosseguir.
      </p>
      <FormControl>
        <FormLabel component='legend'>Lista de exames realizados:</FormLabel>
        <FormGroup>
          {checkOptions.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox name={option.name} onChange={handleChange} required />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
};

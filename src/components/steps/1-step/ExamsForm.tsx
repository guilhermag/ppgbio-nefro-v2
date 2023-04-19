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

export const ExamsForm = ({ disableNextStep, clicked }: CheckerNextStep) => {
  const [error, setError] = useState(false);
  const [counterCheck, setCounterCheck] = useState(0);
  const [helperText, setHelpertText] = useState('');
  let newValue = 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const statusSelected = event.target.checked;
    newValue = 0;

    if (statusSelected) {
      newValue = counterCheck + 1;
    } else {
      newValue = counterCheck - 1;
    }

    setCounterCheck(newValue);

    const resultCheck = newValue === 4 ? false : true;
    disableNextStep!(resultCheck);
  };

  useEffect(() => {
    const resultCheck = newValue === 4 ? false : true;
    if (resultCheck && clicked) {
      setError(resultCheck);
      setTimeout(() => {
        setError(false);
      }, 5000);
      setHelpertText(
        'Para prosseguir se certifique que todos os exames foram feitos!'
      );
    } else {
      setHelpertText('');
    }
  });

  return (
    <div>
      <h2>Exames</h2>
      <h3>Exames necessários para prosseguir</h3>
      <FormControl required error={error}>
        <FormLabel component='legend'>Exames realizados:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} name='creatinine' />}
            label='Creatinina'
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange} name='urine' />}
            label='Urina I'
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange} name='microalb' />}
            label='Microalbuminuria.'
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange} name='ultrasound' />}
            label='Ultrassom de aparelho urinário.'
          />
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
};

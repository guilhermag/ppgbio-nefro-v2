// Step 1

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import React, { useState } from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';

const ExamsForm = ({ disableNextStep }: CheckerNextStep) => {
  const [error, setError] = useState(true);
  const [counterCheck, setCounterCheck] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const statusSelected = event.target.checked;
    let newValue = 0;

    if (statusSelected) {
      newValue = counterCheck + 1;
    } else {
      newValue = counterCheck - 1;
    }

    setCounterCheck(newValue);

    const resultCheck = newValue === 4 ? false : true;
    setError(resultCheck);
    disableNextStep!(resultCheck);
  };

  return (
    <div>
      <h2>Exames</h2>
      <h3>Exames necessários para prosseguir</h3>
      <FormControl required error={error}>
        <FormLabel component='legend'>Exames realizados:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} name='creatinine' />}
            label='Creatinina.'
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
        <FormHelperText>
          Para prosseguir se certifique que todos os exames foram feitos!
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default ExamsForm;

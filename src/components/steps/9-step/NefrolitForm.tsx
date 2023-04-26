// Step 9

import React from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { NEFROLIT_OPTIONS } from '../../../shared/constants/questions';

export const NefrolitForm = ({ selectNextStep }: CheckerNextStep) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionSelected = event.target.value;
    if (optionSelected === 'option3') {
      selectNextStep(9);
    } else {
      selectNextStep(12);
    }
  };

  return (
    <div>
      <h2>Apresenta nefrolitiase recorrente ?</h2>
      <p>Sobre litíase renal considere: </p>
      <div className='center-content left-content'>
        <FormControl>
          <RadioGroup name='history' onChange={handleChange}>
            <FormControlLabel
              value='option1'
              control={<Radio required />}
              label={NEFROLIT_OPTIONS.IDENTIFIED}
            />

            <FormControlLabel
              value='option2'
              control={<Radio required />}
              label={NEFROLIT_OPTIONS.NOT_IDENTIFIED}
            />
            <FormControlLabel
              value='option3'
              control={<Radio required />}
              label={NEFROLIT_OPTIONS.TREATED}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

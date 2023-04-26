// Step 12

import React from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export const DiabetesForm = ({ selectNextStep }: CheckerNextStep) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      selectNextStep(12);
    } else {
      selectNextStep(13);
    }
  };

  return (
    <div className='center-content'>
      <h2>Apresenta diabetes e macroalbuminuria ?</h2>

      <FormControl className='center-content'>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='answer'
          row
          onChange={handleChange}
        >
          <FormControlLabel
            value='yes'
            control={<Radio required />}
            label='Sim'
          />
          <FormControlLabel
            value='no'
            control={<Radio required />}
            label='Não'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

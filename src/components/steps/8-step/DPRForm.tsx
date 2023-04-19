// Step 8

import React, { useState } from 'react';
import './DPRForm.css';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { OPTIONS } from '../../../shared/constants/dprOptions';

export const DPRForm = ({ disableNextStep }: CheckerNextStep) => {
  const [isNegativeOptionSelected, setIsNegativeOptionSelected] =
    useState(false);
  const [isPositiveOptionSelected, setIsPositiveOptionSelected] =
    useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionGroup = event.target.name;
    switch (optionGroup) {
      case 'positiveHistory':
        setIsPositiveOptionSelected(true);
        break;
      case 'negativeHistory':
        setIsNegativeOptionSelected(true);
        break;
      default:
        setIsPositiveOptionSelected(false);
        setIsNegativeOptionSelected(false);
        break;
    }
    console.log(event.target.checked);
  };

  return (
    <div>
      <h2>Suspeita de doença policística renal ?</h2>
      <p>Avaliação pela US ou TC</p>
      <div className='center-content left-content'>
        <FormControl>
          <FormLabel>Histórico familiar positivo</FormLabel>
          <RadioGroup name='positiveHistory' onChange={handleChange}>
            <FormControlLabel
              value='option1'
              control={<Radio />}
              label={OPTIONS.OPTION_1}
            />

            <FormControlLabel
              value='option2'
              control={<Radio />}
              label={OPTIONS.OPTION_2}
            />
            <FormControlLabel
              value='option3'
              control={<Radio />}
              label={OPTIONS.OPTION_3}
            />
            <FormLabel>Histórico familiar negativo:</FormLabel>
            <FormControlLabel
              value='option4'
              control={<Radio />}
              label={OPTIONS.OPTION_4}
            />
            <FormControlLabel
              value='option5'
              control={<Radio />}
              label={OPTIONS.OPTION_5}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

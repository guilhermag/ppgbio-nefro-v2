// Step 12

import React from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import diabetes from '../../../shared/assets/diabetes.jpeg';
import macroalb from '../../../shared/assets/macroalb.jpeg';
import './DiabetesForm.css';

export const DiabetesForm = ({ selectNextStep }: CheckerNextStep) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      selectNextStep(13);
    } else {
      selectNextStep(14);
    }
  };

  return (
    <div className='center-content'>
      <h2 className='step-title'>Diabetes e Macroalbuminuria</h2>
      <div className='subtitle-macro'>
        <p className='subtitle'>
          O paciente possui diabetes ou macroalbuminuria ?
        </p>
      </div>
      <div className='center-content image-container'>
        <div className='image-item center-content'>
          <img src={diabetes} alt='diabetes' className='image-form' />
          <span className='image-title'>Diabetes</span>
          <span className='image-subtitle'>
            Alto nível de glicose no sangue
          </span>
        </div>
        <div className='image-item center-content'>
          <img src={macroalb} alt='diabetes' className='image-form macroalb' />
          <span className='image-title'>Macroalbuminuria</span>
          <span className='image-subtitle'>Perda de proteína na urina</span>
        </div>
      </div>

      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='answer'
          row
          onChange={handleChange}
          className='radio-test'
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

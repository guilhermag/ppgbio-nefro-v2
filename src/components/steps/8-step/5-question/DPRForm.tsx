// Step 8

import React, { useEffect, useState } from 'react';
import './DPRForm.css';
import { CheckerNextStep } from '../../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { DPR_OPTIONS } from '../../../../shared/constants/questions';

export const DPRForm = ({ selectSteps }: CheckerNextStep) => {
  const tfgValue = Number(localStorage.getItem('tfgValue') || '0');
  const [nextState, setNextState] = useState(9);
  let previousStep = tfgValue > 60 ? 3 : 7;
  useEffect(() => {
    selectSteps(nextState, previousStep);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionSelected = event.target.value;
    if (optionSelected === 'option6') {
      setNextState(9);
    } else {
      localStorage.setItem('previousStep', '8');
      setNextState(13);
    }
  };

  return (
    <div>
      <h2 className='step-title'>Suspeita de doença policística renal ?</h2>
      <p className='subtitle'>
        Selecione a situação que mais se adeque com o histórico do paciente:
      </p>
      <div className='center-content left-content'>
        <FormControl>
          <FormLabel focused>Histórico familiar positivo</FormLabel>
          <RadioGroup name='history' onChange={handleChange}>
            <FormControlLabel
              value='option1'
              control={<Radio required />}
              label={DPR_OPTIONS.POSITIVE_1}
            />

            <FormControlLabel
              value='option2'
              control={<Radio required />}
              label={DPR_OPTIONS.POSITIVE_2}
            />
            <FormControlLabel
              value='option3'
              control={<Radio required />}
              label={DPR_OPTIONS.POSITIVE_3}
            />
            <FormLabel focused>Histórico familiar negativo:</FormLabel>
            <FormControlLabel
              value='option4'
              control={<Radio required />}
              label={DPR_OPTIONS.NEGATIVE_1}
            />
            <FormControlLabel
              value='option5'
              control={<Radio required />}
              label={DPR_OPTIONS.NEGATIVE_2}
            />
            <FormLabel focused>
              Sem histórico e sem a presença de cistos:
            </FormLabel>
            <FormControlLabel
              value='option6'
              control={<Radio required />}
              label={DPR_OPTIONS.OPTION_NONE}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

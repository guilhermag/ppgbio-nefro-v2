// Step 7

import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import './CilinderForm.css';
import { QuestionMarkTooltip } from '../../../shared/elements/QuestionMarkTooltip';
import cilinder from '../../../shared/assets/cilinder.jpeg';

export const CilinderForm = ({ selectSteps }: CheckerNextStep) => {
  const tooltipText = ' cilindros ';
  const toolTipinfo =
    'Céreos, largos, graxos, epiteliais, hemáticos ou leucocitários.';
  const [nextState, setNextState] = useState(4);
  useEffect(() => {
    selectSteps(nextState, 6);
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      localStorage.setItem('previousStep', '7');
      setNextState(13);
    } else {
      setNextState(8);
    }
  };

  return (
    <div className='center-content bg-card'>
      <h2 className='header-title'>Cilindros</h2>
      <p className='subtitle subtitle-content'>
        Apresenta
        <QuestionMarkTooltip title={toolTipinfo} placement='top-start'>
          <span className='tooltip-content'>{tooltipText}</span>
        </QuestionMarkTooltip>
        com potencial patológico?
      </p>

      <img src={cilinder} alt='cilinder image' className='cilinder-image' />

      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='answer'
          row
          onChange={handleChange}
          className='radio-space-around'
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

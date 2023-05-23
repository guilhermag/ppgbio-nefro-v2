// Step 4

import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from '../../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export const RenalFunctionForm = ({ selectSteps }: CheckerNextStep) => {
  const [nextState, setNextState] = useState(4);
  useEffect(() => {
    selectSteps(nextState, 3);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      localStorage.setItem('previousStep', '4');
      setNextState(13);
    } else {
      setNextState(5);
    }
  };

  return (
    <div className='center-content'>
      <h2 className='step-title'>Apresenta perda rápida da função renal ?</h2>
      <p className='subtitle'>
        Maior que 5 ml/min/ 1,73 m², confirmados em dois exames em um intervalo
        de 6 meses.
      </p>
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

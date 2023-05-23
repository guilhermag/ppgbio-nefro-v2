// Step 6

import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from '../../../../shared/interfaces/form';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { HEMAT_OPTIONS } from '../../../../shared/constants/questions';
import hematImage from '../../../../shared/assets/hemat.png';
import './HematForm.css';

export const HematForm = ({ selectSteps }: CheckerNextStep) => {
  const [counterSelected, setCounterSelected] = useState(0);

  const checkOptions = HEMAT_OPTIONS;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCounterSelected(counterSelected + 1);
    } else {
      setCounterSelected(counterSelected + -1);
    }
  };

  useEffect(() => {
    if (counterSelected >= 1) {
      localStorage.setItem('previousStep', '6');
      selectSteps(13, 5);
    } else {
      selectSteps(7, 5);
    }
  }, [counterSelected]);

  return (
    <div>
      <h2 className='step-title'>Apresenta hematúria persistente ?</h2>
      <p className='subtitle'>Selecione uma, duas ou nenhuma opção</p>
      <img src={hematImage} alt='hemat-image' className='hemat-image' />
      <FormControl>
        <FormGroup>
          {checkOptions.map((option, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox name={option.NAME} onChange={handleChange} />}
              label={option.LABEL}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
};

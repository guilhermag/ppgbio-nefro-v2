// Step 6

import React from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

export const HematForm = ({ selectNextStep }: CheckerNextStep) => {
  const handleChange = () => {
    selectNextStep(4);
  };

  return (
    <div>
      <h2>Apresenta hematúria persistente ?</h2>
      <p>
        Selecione as opções que se encaixam com o paciente, se tratando de
        hematúria:
      </p>
      <FormControl>
        <FormLabel component='legend'>Lista de exames realizados:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox name='creatinine' onChange={handleChange} required />
            }
            label='Creatinina'
          />
          <FormControlLabel
            control={<Checkbox name='urine' onChange={handleChange} required />}
            label='Urina I'
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

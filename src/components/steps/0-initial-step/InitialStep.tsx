// Step 1

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

import { CheckerNextStep } from '../../../shared/interfaces/form';
import { useEffect } from 'react';

export const InitialStep = ({ selectNextStep }: CheckerNextStep) => {
  useEffect(() => {
    selectNextStep(1);
  });
  return (
    <>
      <h2 className='step-title'>
        Calculadora para triagem de paciente com doença renal crônica
      </h2>
      <p className='subtitle'>
        NefroCheck, a sua fonte rápida para encaminhamento nefrologico.
      </p>
    </>
  );
};

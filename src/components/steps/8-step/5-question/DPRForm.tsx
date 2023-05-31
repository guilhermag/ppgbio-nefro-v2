// Step 8

import React, { useEffect, useState } from 'react';
import './DPRForm.css';
import { CheckerNextStep } from 'shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { DPR_OPTIONS, LABELS } from 'shared/constants/questions';
import { Option } from 'shared/interfaces/firestore-db';
import { saveQuestionLocalStorage } from 'shared/util/util';

export const DPRForm = ({ selectSteps }: CheckerNextStep) => {
  const tfgValue = Number(localStorage.getItem('tfgValue') || '0');
  const checkOptions = DPR_OPTIONS;
  const optionArray: Option[] = checkOptions.map((option) => ({
    label: option.LABEL,
    selected: false,
  }));

  const [options, setOptions] = useState<Option[]>(optionArray);

  const [nextState, setNextState] = useState(9);
  let previousStep = tfgValue > 60 ? 3 : 7;
  useEffect(() => {
    selectSteps(nextState, previousStep);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = options;
    const selected = checkOptions.find(
      (option) => option.NAME === event.target.value
    );
    const optionIndex = newOptions.findIndex(
      (option) => option.label === selected!.LABEL
    );

    newOptions.forEach((option, index) => {
      if (index === optionIndex) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
    setOptions(newOptions);

    if (event.target.value === 'option6') {
      saveQuestionLocalStorage(5, LABELS.QUESTION_5.TITLE, false, options);
      setNextState(9);
    } else {
      localStorage.setItem('previousStep', '8');
      saveQuestionLocalStorage(5, LABELS.QUESTION_5.TITLE, true, options);
      setNextState(13);
    }
  };

  return (
    <div>
      <h2 className='step-title'>{LABELS.QUESTION_5.TITLE}</h2>
      <p className='subtitle'>{LABELS.QUESTION_5.SUBTITLE}</p>
      <div className='center-content left-content'>
        <FormControl>
          <FormLabel focused>Histórico familiar positivo</FormLabel>
          <RadioGroup name='history' onChange={handleChange}>
            <FormControlLabel
              value={checkOptions[0].NAME}
              control={<Radio required />}
              label={checkOptions[0].LABEL}
            />

            <FormControlLabel
              value={checkOptions[1].NAME}
              control={<Radio required />}
              label={checkOptions[1].LABEL}
            />
            <FormControlLabel
              value={checkOptions[2].NAME}
              control={<Radio required />}
              label={checkOptions[2].LABEL}
            />
            <FormLabel focused>Histórico familiar negativo:</FormLabel>
            <FormControlLabel
              value={checkOptions[3].NAME}
              control={<Radio required />}
              label={checkOptions[3].LABEL}
            />
            <FormControlLabel
              value={checkOptions[4].NAME}
              control={<Radio required />}
              label={checkOptions[4].LABEL}
            />
            <FormLabel focused>
              Sem histórico e sem a presença de cistos:
            </FormLabel>
            <FormControlLabel
              value={checkOptions[5].NAME}
              control={<Radio required />}
              label={checkOptions[5].LABEL}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

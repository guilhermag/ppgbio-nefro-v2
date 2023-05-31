// Step 6

import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from 'shared/interfaces/form';
import { Option } from 'shared/interfaces/firestore-db';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { HEMAT_OPTIONS, LABELS } from 'shared/constants/questions';
import hematImage from 'shared/assets/hemat.png';
import './HematForm.css';
import { saveQuestionLocalStorage } from 'shared/util/util';

export const HematForm = ({ selectSteps }: CheckerNextStep) => {
  const checkOptions = HEMAT_OPTIONS;
  const [counterSelected, setCounterSelected] = useState(0);
  const [options, setOptions] = useState<Option[]>([
    { label: checkOptions[0].LABEL, selected: false },
    { label: checkOptions[1].LABEL, selected: false },
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = options;
    const selected = checkOptions.find(
      (option) => option.NAME === event.target.name
    );
    const optionIndex = newOptions.findIndex(
      (option) => option.label === selected!.LABEL
    );

    if (event.target.checked) {
      newOptions[optionIndex].selected = true;
      setCounterSelected(counterSelected + 1);
    } else {
      newOptions[optionIndex].selected = false;
      setCounterSelected(counterSelected - 1);
    }
    setOptions(newOptions);
  };

  useEffect(() => {
    if (counterSelected >= 1) {
      localStorage.setItem('previousStep', '6');
      saveQuestionLocalStorage(3, LABELS.QUESTION_3.TITLE, true, options);
      selectSteps(13, 5);
    } else {
      saveQuestionLocalStorage(3, LABELS.QUESTION_3.TITLE, false, options);
      selectSteps(7, 5);
    }
  }, [counterSelected]);

  return (
    <div>
      <h2 className='step-title'>{LABELS.QUESTION_3.TITLE}</h2>
      <p className='subtitle'>{LABELS.QUESTION_3.SUBTITLE}</p>
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

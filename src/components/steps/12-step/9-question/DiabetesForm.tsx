// Step 12

import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from 'shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import diabetes from 'shared/assets/diabetes.jpeg';
import macroalb from 'shared/assets/macroalb.jpeg';
import './DiabetesForm.css';
import { LABELS } from 'shared/constants/questions';
import { Question } from 'shared/interfaces/firestore-db';
import { setQuestion } from 'shared/util/questions';

export const DiabetesForm = ({ selectSteps }: CheckerNextStep) => {
  const [nextState, setNextState] = useState(12);
  useEffect(() => {
    selectSteps(nextState, 11);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const question: Question = {
      label: LABELS.QUESTION_9.TITLE,
      number: 9,
      options: [],
      result: false,
    };

    if (event.target.value === 'yes') {
      localStorage.setItem('previousStep', '12');
      question.result = true;
      setNextState(13);
    } else {
      setNextState(14);
    }
    setQuestion(question, 'question9');
  };

  return (
    <div className='center-content'>
      <h2 className='step-title'>{LABELS.QUESTION_9.TITLE}</h2>
      <div className='subtitle-macro'>
        <p className='subtitle'>{LABELS.QUESTION_9.SUBTITLE}</p>
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
          <span className='image-title'>Macroalbuminúria</span>
          <span className='image-subtitle'>Perda de proteína na urina</span>
        </div>
      </div>

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

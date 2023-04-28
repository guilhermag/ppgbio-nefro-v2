// Step 7

import React from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
} from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './CilinderForm.css';
import { QuestionMarkTooltip } from '../../../shared/elements/QuestionMarkTooltip';
import { red } from '@mui/material/colors';

export const CilinderForm = ({ selectNextStep }: CheckerNextStep) => {
  const tooltipText = ' cilindros ';
  const toolTipinfo =
    'Céreos, largos, graxos, epiteliais, hemáticos ou leucocitários.';
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      selectNextStep(12);
    } else {
      selectNextStep(7);
    }
  };

  return (
    <div className='center-content bg-card'>
      <h2 className='header-title'>
        Apresenta
        <div className='tooltip-content'>
          {tooltipText}
          <QuestionMarkTooltip title={toolTipinfo} placement='top-start'>
            <QuestionMarkIcon
              sx={{ color: red[500] }}
              className='tooltip-icon'
              fontSize='small'
            />
          </QuestionMarkTooltip>
        </div>
        com potencial patológico?
      </h2>

      <FormControl>
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

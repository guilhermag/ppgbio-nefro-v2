import React from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './FinalNephroStep.css';
import { CheckerNextStep } from '../../../shared/interfaces/form';

export const FinalNephroStep = ({ selectNextStep }: CheckerNextStep) => {
  return (
    <div>
      <div className='high-risk'>
        <h2 className='step-title'>Risco Alto.</h2>
        <ReportProblemIcon color='error' />
      </div>
    </div>
  );
};

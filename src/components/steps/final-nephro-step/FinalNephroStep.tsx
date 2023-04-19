import React from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './FinalNephroStep.css';

export const FinalNephroStep = () => {
  return (
    <div className='center-content'>
      <h2>Encaminhar ao Nefrologista.</h2>
      <div className='high-risk'>
        <h2>Risco Alto.</h2>
        <ReportProblemIcon color='error' />
      </div>
    </div>
  );
};

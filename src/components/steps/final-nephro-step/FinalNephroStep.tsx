import React, { useState } from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './FinalNephroStep.css';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import highRisk from '../../../shared/assets/high-risk.png';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const FinalNephroStep = ({ selectNextStep }: CheckerNextStep) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const label = 'Terapia renal substitutiva';
  const detail =
    'Diálise é um procedimento artificial que remove os resíduos e a água em excesso no sangue. As duas principais formas de diálise são a diálise peritoneal e a hemodiálise.';

  return (
    <div>
      <div className='center-content'>
        <div className='high-risk'>
          <h2 className='step-title'>Risco Alto.</h2>
          <ReportProblemIcon color='error' />
        </div>
        <p className='subtitle'>
          Risco alto de evoluir para terapia renal substitutiva.
        </p>
        <p className='subtitle'>Encaminhar para serviço de nefrologia.</p>

        <img src={highRisk} alt='high-risk' className='risk-image' />
      </div>
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={label} />
          <QuestionMarkIcon fontSize='small' color='error' />
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={detail} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

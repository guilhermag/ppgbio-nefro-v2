// Step 10

import React, { useEffect, useState } from 'react';
import './InfectionForm.css';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { Transition } from '../../../shared/elements/Transition';
import {
  INFECTION_OPTIONS,
  PROPHYLAXIS_TABLE,
} from '../../../shared/constants/questions';

export const InfectionForm = ({ selectNextStep }: CheckerNextStep) => {
  const [counterSelected, setCounterSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCounterSelected(counterSelected + 1);
    } else {
      setCounterSelected(counterSelected + -1);
    }
  };

  useEffect(() => {
    if (counterSelected >= 3) {
      selectNextStep(12);
    } else {
      selectNextStep(10);
    }
  }, [counterSelected]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{PROPHYLAXIS_TABLE.TITLE}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            <span className='dialog-container'>
              <span className='item'>{PROPHYLAXIS_TABLE.STEP_1}</span>
              <span className='item middle-item'>
                {PROPHYLAXIS_TABLE.STEP_2}
              </span>
              <span className='item final-item'>
                <span>{PROPHYLAXIS_TABLE.STEP_3.TITLE}</span>
                <span>{PROPHYLAXIS_TABLE.STEP_3.OPTION_1}</span>
                <span>{PROPHYLAXIS_TABLE.STEP_3.OPTION_2}</span>
                <span>{PROPHYLAXIS_TABLE.STEP_3.OPTION_3}</span>
                <span>{PROPHYLAXIS_TABLE.STEP_3.OPTION_4}</span>
              </span>
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>

      <h2>Apresenta infecção recorrente ?</h2>
      <p>
        Selecione as opções que se encaixam com o paciente, se nenhuma se
        encaixar não selecione nada.
      </p>
      <Button
        color='info'
        startIcon={<PriorityHighIcon fontSize='large' />}
        onClick={handleClickOpen}
      >
        Indicações para profilaxia em mulheres.
      </Button>
      <div>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name='name1' onChange={handleChange} />}
              label={INFECTION_OPTIONS.OPTION_1}
            />
            <FormControlLabel
              control={<Checkbox name='name1' onChange={handleChange} />}
              label={INFECTION_OPTIONS.OPTION_2}
            />
            <FormControlLabel
              control={<Checkbox name='name1' onChange={handleChange} />}
              label={INFECTION_OPTIONS.OPTION_3}
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

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
  Grid,
} from '@mui/material';
import { Transition } from '../../../shared/elements/Transition';
import {
  INFECTION_OPTIONS,
  PROPHYLAXIS_TABLE,
} from '../../../shared/constants/questions';
import { conditionsInfection } from '../../../shared/assets/infection';

export const InfectionForm = ({ selectSteps }: CheckerNextStep) => {
  const formControlLabelStyle = {
    '& .MuiFormControlLabel-label': {
      fontSize: '15px',
    },
  };

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
      localStorage.setItem('previousStep', '10');
      selectSteps(13, 9);
    } else {
      selectSteps(11, 9);
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

      <h2 className='step-title'>Apresenta infecção recorrente ?</h2>
      <p className='subtitle'>
        Selecione as opções que se encaixam com o paciente, se nenhuma se
        encaixar não selecione nada.
      </p>

      <Grid container spacing={2} className='conditions'>
        {conditionsInfection.map((image, index) => {
          return (
            <Grid item xs={3} key={index}>
              <div className='center-content condition-container'>
                <img
                  src={image.source}
                  alt={image.label}
                  className='image-condition'
                />
                <span className='image-label'>{image.label}</span>
              </div>
            </Grid>
          );
        })}
      </Grid>

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
              sx={{ ...formControlLabelStyle }}
            />
            <FormControlLabel
              control={<Checkbox name='name1' onChange={handleChange} />}
              label={INFECTION_OPTIONS.OPTION_2}
              sx={{ ...formControlLabelStyle }}
            />
            <FormControlLabel
              control={<Checkbox name='name1' onChange={handleChange} />}
              label={INFECTION_OPTIONS.OPTION_3}
              sx={{ ...formControlLabelStyle }}
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

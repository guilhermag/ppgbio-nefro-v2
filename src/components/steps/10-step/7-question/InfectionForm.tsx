// Step 10

import React, { useEffect, useState } from 'react';
import './InfectionForm.css';
import { CheckerNextStep } from 'shared/interfaces/form';
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
import { Transition } from 'shared/elements/Transition';
import {
  INFECTION_OPTIONS,
  LABELS,
  PROPHYLAXIS_TABLE,
  formControlLabelStyle,
} from 'shared/constants/questions';
import { conditionsInfection } from 'shared/assets/infection';
import { Option, Question } from 'shared/interfaces/firestore-db';
import { setQuestion } from 'shared/util/questions';

export const InfectionForm = ({ selectSteps }: CheckerNextStep) => {
  const checkOptions = INFECTION_OPTIONS;
  const [options, setOptions] = useState<Option[]>([
    { label: checkOptions[0].LABEL, selected: false },
    { label: checkOptions[1].LABEL, selected: false },
    { label: checkOptions[2].LABEL, selected: false },
  ]);
  const [counterSelected, setCounterSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    const question: Question = {
      label: LABELS.QUESTION_7.TITLE,
      number: 7,
      options,
      result: false,
    };

    if (counterSelected >= 3) {
      localStorage.setItem('previousStep', '10');
      question.result = true;
      selectSteps(13, 9);
    } else {
      selectSteps(11, 9);
    }
    setQuestion(question, 'question7');
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

      <h2 className='step-title'>{LABELS.QUESTION_7.TITLE}</h2>
      <p className='subtitle'>{LABELS.QUESTION_7.SUBTITLE}</p>

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
            {checkOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox name={option.NAME} onChange={handleChange} />
                }
                label={option.LABEL}
                sx={{ ...formControlLabelStyle }}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

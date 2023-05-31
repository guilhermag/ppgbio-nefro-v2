import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from 'shared/interfaces/form';
import {
  Collapse,
  FormControl,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
  Radio,
  RadioGroup,
} from '@mui/material';
import { LABELS, NEFROLIT_OPTIONS } from 'shared/constants/questions';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Option } from 'shared/interfaces/firestore-db';
import { saveQuestionLocalStorage } from 'shared/util/util';

export const NefrolitForm = ({ selectSteps }: CheckerNextStep) => {
  const checkOptions = NEFROLIT_OPTIONS;
  const [options, setOptions] = useState<Option[]>([
    { label: checkOptions[0].LABEL, selected: false },
    { label: checkOptions[1].LABEL, selected: false },
    { label: checkOptions[2].LABEL, selected: false },
  ]);
  const [nextState, setNextState] = useState(9);
  useEffect(() => {
    selectSteps(nextState, 8);
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

    if (event.target.value === 'option3') {
      saveQuestionLocalStorage(6, LABELS.QUESTION_6.TITLE, false, options);
      setNextState(10);
    } else {
      localStorage.setItem('previousStep', '9');
      saveQuestionLocalStorage(6, LABELS.QUESTION_6.TITLE, true, options);
      setNextState(13);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const label = 'Causa metabólica';
  const detail =
    'Avaliação em urina 24 horas: cálcio, fosforo, citrato, oxalato, acido urico, sódio e creatinina.';

  return (
    <div>
      <h2 className='step-title'>{LABELS.QUESTION_6.TITLE}</h2>
      <p className='subtitle'>{LABELS.QUESTION_6.SUBTITLE}</p>
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

      <div className='left-content'>
        <FormControl>
          <RadioGroup name='history' onChange={handleChange}>
            {checkOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.NAME}
                control={<Radio required />}
                label={option.LABEL}
              />
            ))}
          </RadioGroup>

          {/* <RadioGroup name='history' onChange={handleChange}>
            <FormControlLabel
              value='option1'
              control={<Radio required />}
              label={NEFROLIT_OPTIONS.IDENTIFIED}
            />

            <FormControlLabel
              value='option2'
              control={<Radio required />}
              label={NEFROLIT_OPTIONS.NOT_IDENTIFIED}
            />
            <FormControlLabel
              value='option3'
              control={<Radio required />}
              label={NEFROLIT_OPTIONS.TREATED}
            />
          </RadioGroup> */}
        </FormControl>
      </div>
    </div>
  );
};

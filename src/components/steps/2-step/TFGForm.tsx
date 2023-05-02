// Step 2

import React, { useEffect, useState } from 'react';
import { CheckerNextStep, FormData } from '../../../shared/interfaces/form';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { checkFormDataIsPopulated, getTFG } from '../../../shared/util/util';
import './TFGForm.css';

export const TFGForm = ({ selectNextStep }: CheckerNextStep) => {
  const [age, setAge] = useState('');
  const [creatinine, setCreatinine] = useState('');
  const [gender, setGender] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setEthnicity(event.target.value);
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'creatinine') {
      setCreatinine(event.target.value);
    } else if (event.target.name === 'age') {
      setAge(event.target.value);
    } else if (event.target.name === 'gender') {
      setGender(event.target.value);
    }
  };

  useEffect(() => {
    const formData: FormData = {
      age: age,
      creatinine: creatinine,
      gender: gender,
      ethnicity: ethnicity,
    };

    const dataCheck = checkFormDataIsPopulated(formData);

    if (dataCheck) {
      const tfg = getTFG(ethnicity, gender, creatinine, age);
      localStorage.setItem('tfgValue', tfg);
      selectNextStep(3);
    }
  });

  return (
    <div className='center-content'>
      <div className='header-form'>
        <h2 className='step-title'>
          Calculadora da Taxa de Filtração Glomerular(TFG)
        </h2>
        <p className='subtitle'>Preencha todos os dados para calcular a TFG!</p>
      </div>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <div>
          <TextField
            error={false}
            id='outlined-error'
            label='Idade'
            name='age'
            type='number'
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>anos</InputAdornment>
              ),
            }}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <TextField
            error={false}
            id='outlined-error'
            label='Creatinina'
            name='creatinine'
            type='number'
            inputProps={{
              step: 0.01,
            }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>mg/dL</InputAdornment>
              ),
            }}
            onChange={handleChangeInput}
          />
        </div>
        <div className='center-content'>
          <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>Gênero</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='gender'
              row
              onChange={handleChangeInput}
            >
              <FormControlLabel
                value='female'
                control={<Radio required />}
                label='Feminino'
              />
              <FormControlLabel
                value='male'
                control={<Radio required />}
                label='Masculino'
              />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Etnia</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={ethnicity}
              label='Etnia'
              onChange={handleChangeSelect}
              required
            >
              <MenuItem value={'white'}>Branco</MenuItem>
              <MenuItem value={'afro-american'}>Negro ou pardo</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
    </div>
  );
};

export default TFGForm;

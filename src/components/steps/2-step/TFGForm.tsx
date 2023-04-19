// Step 2

import React, { useEffect, useState } from 'react';
import { CheckerNextStep, FormData } from '../../../shared/interfaces/form';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { checkFormDataIsPopulated, getTFG } from '../../../shared/util/util';

export const TFGForm = ({ disableNextStep }: CheckerNextStep) => {
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
      disableNextStep!(false);
    } else {
      disableNextStep!(true);
    }
  });

  return (
    <div className='center-content'>
      <h2>Calcular TFG</h2>
      <p>Preencha todos os dados para calcular a TFG!</p>
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
            required
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <TextField
            error={false}
            id='outlined-error'
            label='Creatinina'
            name='creatinine'
            required
            onChange={handleChangeInput}
          />
        </div>
        <div>
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

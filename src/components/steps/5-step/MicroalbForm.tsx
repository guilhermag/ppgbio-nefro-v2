// Step 5

import React from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const MicroalbForm = ({ selectNextStep }: CheckerNextStep) => {
  const rowData = {
    examFirstLine: 'Relação Albuminuria/Creatinuria',
    examSecondLine: '(amostra isolada)',
    normal: '< 30 mg/g',
    micro: '30 mg/g a 299 mg/g',
    macro: '>= 300 mg/g',
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      selectNextStep(12);
    } else {
      selectNextStep(5);
    }
  };

  return (
    <div className='center-content'>
      <h2 className='step-title'>Aprensenta microalbuminuria ?</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Exame</TableCell>
              <TableCell align='center'>Normoalbuminuria</TableCell>
              <TableCell align='center'>Microalbuminuria</TableCell>
              <TableCell align='center'>Macroalbuminuria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row' align='center'>
                <p>{rowData.examFirstLine}</p>
                <p>{rowData.examSecondLine}</p>
              </TableCell>
              <TableCell align='center'>{rowData.normal}</TableCell>
              <TableCell align='left'>{rowData.micro}</TableCell>
              <TableCell align='left'>{rowData.macro}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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

// Step 5

import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from 'shared/interfaces/form';
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
import './MicroalbForm.css';

export const MicroalbForm = ({ selectSteps }: CheckerNextStep) => {
  const [nextState, setNextState] = useState(5);
  useEffect(() => {
    selectSteps(nextState, 4);
  });
  const rowData = {
    normal: '< 30 mg/g',
    micro: '30 mg/g a 299 mg/g',
    macro: '>= 300 mg/g',
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      localStorage.setItem('previousStep', '5');
      setNextState(13);
    } else {
      setNextState(6);
    }
  };

  return (
    <div className='center-content'>
      <h2 className='step-title'>Proteinúria</h2>
      <p className='subtitle'>
        Exames da relação Albuminúria/Creatinuria (amostra isolada).
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Normoalbuminúria</TableCell>
              <TableCell align='center'>Microalbuminúria</TableCell>
              <TableCell align='center'>Macroalbuminúria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>{rowData.normal}</TableCell>
              <TableCell align='left'>{rowData.micro}</TableCell>
              <TableCell align='left'>{rowData.macro}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <p className='subtitle-micro'>O paciente possui proteinúria ?</p>
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

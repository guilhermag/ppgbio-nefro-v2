import { useEffect } from 'react';
import './TFGResult.css';
import { CheckerNextStep, FormData } from 'shared/interfaces/form';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { getFormResult, selectStageByTFG } from 'shared/util/util';
import { CreateUser } from 'shared/interfaces/firestore-db';

function createData(stage: string, tfg: string, renalInsufficiency: string) {
  return { stage, tfg, renalInsufficiency };
}

const rows = [
  createData('0', '> 90', 'Ausência de Lesão Renal'),
  createData('1', '> 90', 'Lesão Renal com Função Renal Normal'),
  createData('2', '60 - 89', 'IR Leve ou Funcional'),
  createData('3', '30 - 59', 'IR Moderada ou Laboratorial'),
  createData('4', '15 - 29', 'IR Severa ou Clínica'),
  createData('5', '< 15', 'IR Terminal ou Dialítica'),
];

export const TFGResult = ({ selectSteps }: CheckerNextStep) => {
  localStorage.setItem('previousStep', '3');
  const formResult: CreateUser = getFormResult();
  const tfgValue = formResult.tfgValue || 0;

  useEffect(() => {
    if (tfgValue > 60) {
      selectSteps(8, 2);
    } else if (tfgValue >= 30) {
      selectSteps(4, 2);
    } else if (tfgValue < 30) {
      selectSteps(13, 2);
    }
  }, []);

  return (
    <div className='center-content'>
      <h2 className='step-title'>Resultado Taxa de filtração glomerular</h2>
      <p className='tfg-result'>
        TFG = {tfgValue.toFixed(2)} ml/min/1,73m²{' '}
        <span className='ckd-epi'>[ckd-epi]</span>
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Estágio</TableCell>
              <TableCell align='center'>Taxa de filtração glomerular</TableCell>
              <TableCell align='center'>Grau de insuficiência renal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.stage}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className={selectStageByTFG(tfgValue, row.stage)}
              >
                <TableCell component='th' scope='row'>
                  {row.stage}
                </TableCell>
                <TableCell align='center'>{row.tfg}</TableCell>
                <TableCell align='left'>{row.renalInsufficiency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

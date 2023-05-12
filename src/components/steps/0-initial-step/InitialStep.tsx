// Step 1
import './InitialStep.css';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import { useEffect } from 'react';
import initialImage from '../../../shared/assets/initial-img.jpeg';

export const InitialStep = ({ selectNextStep }: CheckerNextStep) => {
  useEffect(() => {
    selectNextStep(1);
  });
  return (
    <>
      <h2 className='initial'>
        Calculadora para triagem de paciente com doença renal crônica
      </h2>
      <div className='step-content'>
        <div className='subtitle-initial'>
          <p className='subtitle-initial'>
            NefroCheck, a sua fonte rápida de auxílio para encaminhamento
            nefrologico.
          </p>
        </div>

        <img src={initialImage} alt='initial-image' className='initial-image' />
      </div>
      <div className='last-container'>
        <div className='names'>
          <ul className='list'>
            <li>Consultores</li>
            <li>Karina Litchteneker</li>
            <li>Guilherme de Araujo Gabriel</li>
            <li>Jefferson Gustavo Martins</li>
          </ul>
        </div>
      </div>
    </>
  );
};

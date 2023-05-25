import { useEffect } from 'react';
import './FinalNephroStep.css';
import { CheckerNextStep } from 'shared/interfaces/form';
import highRisk from 'shared/assets/high-risk.png';

export const FinalNephroStep = ({ selectSteps }: CheckerNextStep) => {
  const previousStep = Number(localStorage.getItem('previousStep'));
  useEffect(() => {
    selectSteps(13, previousStep);
  });

  return (
    <div>
      <div className='center-content'>
        <h2 className='step-title'>Encaminhamento recomendado.</h2>
        <p className='subtitle'>
          Encaminhamento recomendado para serviço de nefrologia.
        </p>

        <img src={highRisk} alt='high-risk' className='risk-image' />
      </div>
    </div>
  );
};

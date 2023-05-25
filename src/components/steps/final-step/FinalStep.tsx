import { useEffect } from 'react';
import { CheckerNextStep } from 'shared/interfaces/form';

export const FinalStep = ({ selectSteps }: CheckerNextStep) => {
  useEffect(() => {
    selectSteps(14, 12);
  });

  return (
    <div>
      <h2 className='step-title'>Sem encaminhamento.</h2>
      <p className='subtitle'>
        Encaminhamento não recomendado para o serviço de nefrologia.
      </p>
    </div>
  );
};

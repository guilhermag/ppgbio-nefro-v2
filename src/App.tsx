import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import footer from './shared/assets/apoio-utfpr.png';

import './App.css';
import { FormComponent } from './shared/interfaces/form';
import { useForm } from './hooks/useForm';
import { Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  ExamsForm,
  TFGForm,
  TFGResult,
  RenalFunctionForm,
  MicroalbForm,
  HematForm,
  CilinderForm,
  DPRForm,
  NefrolitForm,
  InfectionForm,
  HypertensionForm,
  DiabetesForm,
  FinalNephroStep,
  FinalStep,
} from './components/steps/';
import { InitialStep } from './components/steps/0-initial-step/InitialStep';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

function App() {
  const [nextStep, setNextStep] = useState(0);
  const [click, setClick] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const selectSteps = (nextStep: number, previousStep: number) => {
    setNextStep(nextStep);
    setPreviousStep(previousStep);
  };

  const components = [
    <InitialStep selectSteps={selectSteps} />,
    <ExamsForm selectSteps={selectSteps} />,
    <TFGForm selectSteps={selectSteps} />,
    <TFGResult selectSteps={selectSteps} />,
    <RenalFunctionForm selectSteps={selectSteps} />,
    <MicroalbForm selectSteps={selectSteps} />,
    <HematForm selectSteps={selectSteps} />,
    <CilinderForm selectSteps={selectSteps} />,
    <DPRForm selectSteps={selectSteps} />,
    <NefrolitForm selectSteps={selectSteps} />,
    <InfectionForm selectSteps={selectSteps} />,
    <HypertensionForm selectSteps={selectSteps} />,
    <DiabetesForm selectSteps={selectSteps} />,
    <FinalNephroStep selectSteps={selectSteps} />,
    <FinalStep selectSteps={selectSteps} />,
  ];

  const formComponents: FormComponent[] = components.map((component) => ({
    component,
  }));

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeStep(nextStep);
  };

  const nextButton = currentStep === 0 ? 'Começar' : 'Avançar';
  const classInitial = currentStep === 0 ? '' : 'center-content';

  return (
    <div className='screen-container'>
      <div className='border-div'>
        <div className='app-container'>
          <div className='form-container '>
            <form onSubmit={handleSubmit}>
              <div className='inputs-container'>
                {currentComponent.component}
              </div>

              <div className={`actions ${classInitial}`}>
                {isFirstStep ? (
                  <></>
                ) : (
                  <Button
                    variant='outlined'
                    startIcon={<RefreshIcon />}
                    onClick={(e) => changeStep(previousStep)}
                  >
                    Voltar
                  </Button>
                )}

                {isLastStep ? (
                  <></>
                ) : (
                  <div>
                    <Button
                      variant='outlined'
                      endIcon={<NavigateNextIcon />}
                      type='submit'
                      onClick={() => {
                        setClick(click + 1);
                      }}
                    >
                      {nextButton}
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </div>
          <footer className='center-content'>
            <img src={footer} alt='utfpr-footer' />
          </footer>
        </div>
      </div>
      <div className='disclaimer center-content'>
        <div className=''>
          <h3>Avisos legais e isenção de responsabilidades</h3>
          <p>
            Todas as informações contidas aqui e produzidas pelo sistema
            NefroCheck são fornecidas{' '}
            <span className='not'>apenas com propósitos educacionais</span>.
          </p>
          <p>
            Estas informações <span className='not'>não devem ser usadas</span>{' '}
            para diagnóstico ou tratamento de quaisquer problemas de saúde ou
            doenças.
          </p>
          <p>
            ESTAS INFORMAÇÕES <span className='not'>NÃO DEVEM SUBSTITUIR</span>{' '}
            O JULGAMENTO CLÍNICO OU ORIENTAR DE ALGUMA FORMA O TRATAMENTO
            INDIVIDUAL DOS PACIENTES.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

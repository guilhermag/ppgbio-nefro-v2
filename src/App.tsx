import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  HermatForm,
  CilinderForm,
  DPRForm,
  NefrolitForm,
  InfectionForm,
  HypertensionForm,
  DiabetesForm,
  FinalNephroStep,
  FinalStep,
} from './components/steps/';

function App() {
  const [disableNextStep, setDisableNextStep] = useState(true);
  const [nextStep, setNextStep] = useState(2);

  const disableNextStepButton = (check: boolean) => {
    setDisableNextStep(check);
  };

  const components = [
    <ExamsForm disableNextStep={disableNextStepButton} />,
    <TFGForm disableNextStep={disableNextStepButton} />,
    <TFGResult />,
    <RenalFunctionForm disableNextStep={disableNextStepButton} />,
    <MicroalbForm disableNextStep={disableNextStepButton} />,
    <HermatForm disableNextStep={disableNextStepButton} />,
    <CilinderForm disableNextStep={disableNextStepButton} />,
    <DPRForm disableNextStep={disableNextStepButton} />,
    <NefrolitForm disableNextStep={disableNextStepButton} />,
    <InfectionForm disableNextStep={disableNextStepButton} />,
    <HypertensionForm disableNextStep={disableNextStepButton} />,
    <DiabetesForm disableNextStep={disableNextStepButton} />,
    <FinalNephroStep />,
    <FinalStep />,
  ];

  const formComponents: FormComponent[] = components.map((component) => ({
    component,
  }));

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  useEffect(() => {
    const nextStepStorage = Number(localStorage.getItem('nextStep'));
    localStorage.removeItem('nextStep');
    setNextStep(nextStepStorage);
  });

  return (
    <div className='screen-container'>
      <div className='app-container'>
        <div className='header'></div>
        <div className='form-container '>
          <form
            onSubmit={(e) => {
              if (currentStep < 2) {
                changeStep(currentStep + 1, e);
              } else {
                changeStep(nextStep, e);
              }
            }}
          >
            <div className='inputs-container'>{currentComponent.component}</div>

            <div className='actions center-content'>
              {isFirstStep ? (
                <></>
              ) : (
                <IconButton
                  aria-label='refresh'
                  color='primary'
                  onClick={(e) => changeStep(0, e)}
                >
                  <RefreshIcon />
                </IconButton>
              )}

              {isLastStep ? (
                <></>
              ) : (
                <Button
                  variant='outlined'
                  endIcon={<NavigateNextIcon />}
                  type='submit'
                  disabled={disableNextStep}
                >
                  Avançar
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

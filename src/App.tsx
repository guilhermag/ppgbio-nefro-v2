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
  const [clicked, setClicked] = useState(false);

  const disableNextStepButton = (check: boolean) => {
    setDisableNextStep(check);
  };

  const components = [
    <ExamsForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <TFGForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <TFGResult />,
    <RenalFunctionForm
      disableNextStep={disableNextStepButton}
      clicked={clicked}
    />,
    <MicroalbForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <HermatForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <CilinderForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <DPRForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <NefrolitForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <InfectionForm disableNextStep={disableNextStepButton} clicked={clicked} />,
    <HypertensionForm
      disableNextStep={disableNextStepButton}
      clicked={clicked}
    />,
    <DiabetesForm disableNextStep={disableNextStepButton} clicked={clicked} />,
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setClicked(true);
    if (disableNextStep) {
      setTimeout(() => {
        setClicked(false);
      }, 5000);
      return;
    } else {
      if (currentStep < 2) {
        changeStep(currentStep + 1);
      } else {
        changeStep(nextStep);
      }
    }
  };

  return (
    <div className='screen-container'>
      <div className='app-container'>
        <div className='header'></div>
        <div className='form-container '>
          <form onSubmit={handleSubmit}>
            <div className='inputs-container'>{currentComponent.component}</div>

            <div className='actions center-content'>
              {isFirstStep ? (
                <></>
              ) : (
                <IconButton
                  aria-label='refresh'
                  color='primary'
                  onClick={(e) => changeStep(0)}
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

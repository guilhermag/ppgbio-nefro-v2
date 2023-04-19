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
  const [nextStep, setNextStep] = useState(0);
  const [click, setClick] = useState(0);

  const selectNextStep = (nextStep: number) => {
    setNextStep(nextStep);
  };

  const components = [
    <ExamsForm selectNextStep={selectNextStep} />,
    <TFGForm selectNextStep={selectNextStep} />,
    <TFGResult selectNextStep={selectNextStep} />,
    <RenalFunctionForm selectNextStep={selectNextStep} />,
    <MicroalbForm selectNextStep={selectNextStep} />,
    <HermatForm selectNextStep={selectNextStep} />,
    <CilinderForm selectNextStep={selectNextStep} />,
    <DPRForm selectNextStep={selectNextStep} />,
    <NefrolitForm selectNextStep={selectNextStep} />,
    <InfectionForm selectNextStep={selectNextStep} />,
    <HypertensionForm selectNextStep={selectNextStep} />,
    <DiabetesForm selectNextStep={selectNextStep} />,
    <FinalNephroStep selectNextStep={selectNextStep} />,
    <FinalStep selectNextStep={selectNextStep} />,
  ];

  const formComponents: FormComponent[] = components.map((component) => ({
    component,
  }));

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  // useEffect(() => {
  //   setNextStep(Number(localStorage.getItem('nextStep')));
  //   console.log('useEffect');
  // }, [click]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeStep(nextStep);
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
                  onClick={() => {
                    setClick(click + 1);
                  }}
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

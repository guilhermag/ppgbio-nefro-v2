import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './App.css';
import { formSteps } from './components/steps';
import { FormComponent } from './shared/interfaces/form';
import { useForm } from './hooks/useForm';
import { Box, Button, IconButton } from '@mui/material';
import { useState } from 'react';
import ExamsForm from './components/steps/1-step/ExamsForm';
import TFGResult from './components/steps/3-step/TFGResult';
import TFGForm from './components/steps/2-step/TFGForm';
import RenalFunctionForm from './components/steps/4-step/RenalFunctionForm';
import MicroalbForm from './components/steps/5-step/MicroalbForm';
import HermatForm from './components/steps/6-step/HermatForm';
import CilinderForm from './components/steps/7-step/CilinderForm';
import DPRForm from './components/steps/8-step/DPRForm';
import NefrolitForm from './components/steps/9-step/NefrolitForm';
import InfectionForm from './components/steps/10-step/InfectionForm';
import HypertensionForm from './components/steps/11-step/HypertensionForm';
import DiabetesForm from './components/steps/12-step/DiabetesForm';
import FinalStep from './components/steps/final-step/FinalStep';

function App() {
  const [nextStepChecker, setNextStepChecker] = useState(true);
  const checkForNextStep = (check: boolean) => {
    setNextStepChecker(check);
  };

  const components = [
    // <ExamsForm checkForNextStep={checkForNextStep} />,
    <TFGForm checkForNextStep={checkForNextStep} />,
    <TFGResult checkForNextStep={checkForNextStep} />,
    <RenalFunctionForm checkForNextStep={checkForNextStep} />,
    <MicroalbForm checkForNextStep={checkForNextStep} />,
    <HermatForm checkForNextStep={checkForNextStep} />,
    <CilinderForm checkForNextStep={checkForNextStep} />,
    <DPRForm checkForNextStep={checkForNextStep} />,
    <NefrolitForm checkForNextStep={checkForNextStep} />,
    <InfectionForm checkForNextStep={checkForNextStep} />,
    <HypertensionForm checkForNextStep={checkForNextStep} />,
    <DiabetesForm checkForNextStep={checkForNextStep} />,
    <FinalStep checkForNextStep={checkForNextStep} />,
  ];

  const formComponents: FormComponent[] = components.map((component) => ({
    component,
  }));

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className='app'>
      <div className='header'></div>
      <div className='form-container'>
        <form
          onSubmit={(e) => {
            changeStep(currentStep + 1, e);
          }}
        >
          <div className='inputs-container'>{currentComponent.component}</div>

          <div className='actions'>
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
                disabled={nextStepChecker}
              >
                Avançar
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

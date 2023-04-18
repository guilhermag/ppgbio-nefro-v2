import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './App.css';
import { FormComponent } from './shared/interfaces/form';
import { useForm } from './hooks/useForm';
import { Box, Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
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
import TFGResult from './components/steps/3-step/TFGResult';
import ExamsForm from './components/steps/1-step/ExamsForm';
import FinalNephroStep from './components/steps/final-nephro-step/FinalNephroStep';

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
    <RenalFunctionForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <MicroalbForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <HermatForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <CilinderForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <DPRForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <NefrolitForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <InfectionForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <HypertensionForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
    <DiabetesForm
      disableNextStep={disableNextStepButton}
      setNextStep={setNextStep}
    />,
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
    setNextStep(nextStepStorage);
  });

  return (
    <div className='app'>
      <div className='header'></div>
      <div className='form-container'>
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
                disabled={disableNextStep}
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

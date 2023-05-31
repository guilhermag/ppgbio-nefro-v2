import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SaveIcon from '@mui/icons-material/Save';
import footer from 'shared/assets/apoio-utfpr.png';

import './Form-view.css';

import {
  AlertColor,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  ExamsForm,
  TFGForm,
  TFGResult,
  RenalFunctionForm,
  ProteinuriaForm,
  HematForm,
  CilinderForm,
  DPRForm,
  NefrolitForm,
  InfectionForm,
  HypertensionForm,
  DiabetesForm,
  FinalNephroStep,
  FinalStep,
} from 'components/steps/';
import { InitialStep } from 'components/steps/0-initial-step/InitialStep';
import { Alert } from 'shared/elements/Alert';
import { saveUserData } from 'services/firebase-config';
import { FormComponent } from 'shared/interfaces/form';
import { useForm } from 'hooks/useForm';
import { TabsControl } from 'shared/interfaces/table';

export const FormView = ({ controlTab }: TabsControl) => {
  const [nextStep, setNextStep] = useState(0);
  const [click, setClick] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('consultar suporte' as string);
  const [status, setStatus] = useState('info' as AlertColor);
  const [hideButton, setHideButton] = useState(true);
  const [loading, setLoading] = useState(true);
  const [disableSaveButton, setDisableSaveButton] = useState(false);

  const updateStatusMessage = (status: AlertColor, message: string) => {
    setMessage(message);
    setStatus(status);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
    <ProteinuriaForm selectSteps={selectSteps} />,
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
    setLoading(true);
    changeStep(nextStep);
  };

  const nextButton = currentStep === 0 ? 'Começar' : 'Avançar';
  const classInitial = currentStep === 0 ? '' : 'center-content';

  useEffect(() => {
    const checkShowButton = currentStep === 0 || currentStep > 12;
    setHideButton(checkShowButton);
    setLoading(false);
    if (currentStep !== 0) {
      controlTab(true, true);
    } else {
      controlTab(false, false);
    }
  }, [currentComponent.component]);

  return (
    <div className='screen-container'>
      <div className='border-div'>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        <div className='app-container'>
          {loading ? (
            <CircularProgress />
          ) : (
            <div className='form-container '>
              <form onSubmit={handleSubmit}>
                <div className='inputs-container'>
                  {currentComponent.component}
                </div>

                <div className={`actions ${classInitial}`}>
                  {hideButton ? (
                    <></>
                  ) : (
                    <Button
                      variant='outlined'
                      startIcon={<NavigateBeforeIcon />}
                      onClick={(e) => changeStep(previousStep)}
                    >
                      Voltar
                    </Button>
                  )}

                  {isLastStep ? (
                    <>
                      <Button
                        variant='outlined'
                        startIcon={<RefreshIcon />}
                        onClick={() => {
                          changeStep(0);
                        }}
                      >
                        Recomeçar
                      </Button>
                      <Button
                        variant='outlined'
                        endIcon={<SaveIcon />}
                        disabled={disableSaveButton}
                        type='submit'
                        onClick={() => {
                          saveUserData(currentStep)
                            .then(() => {
                              updateStatusMessage('success', 'Dados salvos');
                              setDisableSaveButton(true);
                            })
                            .catch((e) => {
                              console.error(e);
                              updateStatusMessage(
                                'error',
                                'Falha ao salvar os dados!'
                              );
                            });
                        }}
                      >
                        Salvar dados
                      </Button>
                    </>
                  ) : (
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
                  )}
                </div>
              </form>
            </div>
          )}
          <footer className='center-content'>
            <img src={footer} alt='utfpr-footer' />
          </footer>
        </div>
      </div>
    </div>
  );
};

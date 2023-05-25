import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SaveIcon from '@mui/icons-material/Save';
import footer from './shared/assets/apoio-utfpr.png';

import './App.css';
import { FormComponent } from './shared/interfaces/form';
import { useForm } from './hooks/useForm';
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
} from './components/steps/';
import { InitialStep } from './components/steps/0-initial-step/InitialStep';

import { CreateUser } from './shared/interfaces/firestore-db';
import { createUser, getUsers } from 'services/firebase-config';
import { Alert } from 'shared/elements/Alert';

function App() {
  const [nextStep, setNextStep] = useState(0);
  const [click, setClick] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('consultar suporte' as String);
  const [status, setStatus] = useState('info' as AlertColor);
  const [hideButton, setHideButton] = useState(true);
  const [loading, setLoading] = useState(true);

  const updateStatusMessage = (status: AlertColor, message: String) => {
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
          {/* <button
            onClick={() => {
              getUsers()
                .then(() => {
                  updateStatusMessage('success', 'Informações recuperadas com sucesso!');
                })
                .catch((e) => {
                  console.error(e);
                  updateStatusMessage('error', 'Falha ao recuperar as informações do banco de dados!');
                });
              // createUser(mockUserNefroData);
            }}
          >
            Create User
          </button> */}
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
                          localStorage.clear();
                          changeStep(0);
                        }}
                      >
                        Recomeçar
                      </Button>
                      <Button
                        variant='outlined'
                        endIcon={<SaveIcon />}
                        type='submit'
                        onClick={() => {
                          updateStatusMessage('success', 'Dados salvos');
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

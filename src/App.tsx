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
import { db } from './firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { UserForm } from './shared/interfaces/firestore-db';

function App() {
  const [nextStep, setNextStep] = useState(0);
  const [click, setClick] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const [users, setUsers] = useState([] as any);
  const usersCollection = collection(db, 'users');

  const selectSteps = (nextStep: number, previousStep: number) => {
    setNextStep(nextStep);
    setPreviousStep(previousStep);
  };

  const mockUserSaveData: UserForm = {
    resultForm: false,
    tfgData: {
      age: 18,
      ethnicity: 'white',
      value: 109.39,
      gender: 'male',
      creatinine: 1,
    },
    question1: {
      result: false,
    },
    question2: {
      result: false,
    },
    question3: {
      options: [
        {
          selected: false,
          label:
            'Sim, confirmada com dois exames de Urina I, com intervalo de 8 semanas entre os mesmos',
        },
        {
          selected: false,
          label: 'Pesquisa de hemacias dismorficas positivo',
        },
      ],
      result: false,
    },
    question4: {
      result: false,
    },
    question5: {
      options: [
        {
          label:
            'Paciente com idade entre 40 e 59 anos com dois ou mais cistos em cada rim',
          selected: false,
        },
        {
          selected: false,
          label:
            '10 ou mais cistos em cada rim, principalmente se rins aumentados bilateralmente',
        },
        {
          selected: false,
          label:
            'Pacientes com idade entre 15 e 39 anos com três ou mais cistos uni ou bilaterais',
        },
        {
          label:
            'Presenca concomitante de cistos hepaticos, pancreaticos ou esplenicos',
          selected: true,
        },
        {
          label:
            'Paciente com idade igual ou superior a 60 anos com quatro ou mais cistos em cada rim',
          selected: false,
        },
      ],
      result: false,
    },
    question6: {
      options: [
        {
          selected: false,
          label: 'Nao conseguiu identificar a causa metabolica',
        },
        {
          selected: true,
          label: 'Identificou e tratou a causa metabolica',
        },
        {
          selected: false,
          label: 'Identificou causa metabolica, mas nao conseguiu tratar',
        },
      ],
      result: false,
    },
    question7: {
      options: [
        {
          label: 'Exclusao de causas anatomicas urologicas ou ginecologicas',
          selected: false,
        },
        {
          selected: false,
          label: 'Profilaxia realizada corretamente',
        },
        {
          selected: false,
          label:
            'Tres ou mais infeccoes urinarias no periodo de um ano, mesmo com profilaxia adequada',
        },
      ],
      result: false,
    },
    question8: {
      options: [
        {
          selected: false,
          label: 'Suspeita de HAS Secundaria',
        },
        {
          selected: false,
          label:
            'Falta de controle da pressao com no minimo tres medicacoes anti-hipertensivas em dose plena, apos avaliacao da adesao',
        },
      ],
      result: false,
    },
    question9: {
      result: false,
    },

    id: 'VIpYUo4AVSELF6OG9pfo',
  };

  const createUser = async () => {
    await addDoc(usersCollection, mockUserSaveData);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as any)));
    };
    // getUsers();
  }, []);

  console.log(users);

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
            {/* <button onClick={createUser}>Create User</button> */}
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

import { CreateUser, Question, UserData } from 'shared/interfaces/firestore-db';

const mockUserSaveData: CreateUser = {
  resultForm: true,
  age: 18,
  ethnicity: 'white',
  tfgValue: 109.39,
  gender: 'male',
  creatinine: 1,
  questions: [
    {
      number: 1,
      label: '',
      result: false,
      options: [],
    },
    {
      number: 2,
      label: '',
      result: true,
      options: [],
    },
  ],
};

export const mockQuestions4: Question[] = [
  {
    number: 1,
    label: 'Perda rápida da função renal',
    options: [],
    result: false,
  },
  {
    number: 2,
    label: 'Proteinúria',
    options: [],
    result: false,
  },
  {
    number: 3,
    label: 'Hematúria persistente',
    options: [
      {
        label:
          'Sim, confirmada com dois exames de Urina I, com intervalo de 8 semanas entre os mesmos.',
        selected: false,
      },
      {
        label: 'Pesquisa de hemácias dismórficas positivo.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 4,
    label: 'Cilindros',
    options: [],
    result: false,
  },
  {
    number: 5,
    label: 'Doença policística renal',
    options: [
      {
        label:
          'Pacientes com idade entre 15 e 39 anos com três ou mais cistos uni ou bilaterais.',
        selected: false,
      },
      {
        label:
          'Paciente com idade entre 40 e 59 anos com dois ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          'Paciente com idade igual ou superior a 60 anos com quatro ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          '10 ou mais cistos em cada rim, principalmente se rins aumentados bilateralmente.',
        selected: false,
      },
      {
        label:
          'Presença concomitante de cistos hepáticos, pancreáticos ou esplênicos.',
        selected: false,
      },
      {
        label: 'Nenhum histórico e sem presença de cistos.',
        selected: true,
      },
    ],
    result: false,
  },
  {
    number: 6,
    label: 'Nefrolitíase recorrente',
    options: [
      {
        label: 'Identificou causa metabólica, mas não conseguiu tratar.',
        selected: false,
      },
      {
        label: 'Não conseguiu identificar a causa metabólica.',
        selected: false,
      },
      {
        label: 'Identificou e tratou a causa metabólica.',
        selected: true,
      },
    ],
    result: false,
  },
  {
    number: 7,
    label: 'Infecção recorrente',
    options: [
      {
        label:
          'Três ou mais infecções urinárias no período de um ano, mesmo com profilaxia adequada.',
        selected: false,
      },
      {
        label: 'Exclusão de causas anatômicas urológicas ou ginecológicas.',
        selected: false,
      },
      {
        label: 'Profilaxia realizada corretamente.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 8,
    label: 'Hipertensão Secundária',
    options: [
      {
        label: 'Suspeita de HAS Secundária.',
        selected: false,
      },
      {
        label:
          'Falta de controle da pressão com no mínimo três medicações anti-hipertensivas em dose plena, após avaliação da adesão.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 9,
    label: '',
    options: [],
    result: false,
  },
];

export const mockQuestions1: Question[] = [
  {
    number: 1,
    label: 'Perda rápida da função renal',
    options: [],
    result: false,
  },
  {
    number: 2,
    label: 'Proteinúria',
    options: [],
    result: false,
  },
  {
    number: 3,
    label: 'Hematúria persistente',
    options: [
      {
        label:
          'Sim, confirmada com dois exames de Urina I, com intervalo de 8 semanas entre os mesmos.',
        selected: false,
      },
      {
        label: 'Pesquisa de hemácias dismórficas positivo.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 4,
    label: 'Cilindros',
    options: [],
    result: false,
  },
  {
    number: 5,
    label: 'Doença policística renal',
    options: [
      {
        label:
          'Pacientes com idade entre 15 e 39 anos com três ou mais cistos uni ou bilaterais.',
        selected: false,
      },
      {
        label:
          'Paciente com idade entre 40 e 59 anos com dois ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          'Paciente com idade igual ou superior a 60 anos com quatro ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          '10 ou mais cistos em cada rim, principalmente se rins aumentados bilateralmente.',
        selected: false,
      },
      {
        label:
          'Presença concomitante de cistos hepáticos, pancreáticos ou esplênicos.',
        selected: false,
      },
      {
        label: 'Nenhum histórico e sem presença de cistos.',
        selected: true,
      },
    ],
    result: false,
  },
  {
    number: 6,
    label: 'Nefrolitíase recorrente',
    options: [
      {
        label: 'Identificou causa metabólica, mas não conseguiu tratar.',
        selected: false,
      },
      {
        label: 'Não conseguiu identificar a causa metabólica.',
        selected: false,
      },
      {
        label: 'Identificou e tratou a causa metabólica.',
        selected: true,
      },
    ],
    result: false,
  },
  {
    number: 7,
    label: 'Infecção recorrente',
    options: [
      {
        label:
          'Três ou mais infecções urinárias no período de um ano, mesmo com profilaxia adequada.',
        selected: false,
      },
      {
        label: 'Exclusão de causas anatômicas urológicas ou ginecológicas.',
        selected: false,
      },
      {
        label: 'Profilaxia realizada corretamente.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 8,
    label: 'Hipertensão Secundária',
    options: [
      {
        label: 'Suspeita de HAS Secundária.',
        selected: true,
      },
      {
        label:
          'Falta de controle da pressão com no mínimo três medicações anti-hipertensivas em dose plena, após avaliação da adesão.',
        selected: true,
      },
    ],
    result: true,
  },
];

export const mockQuestions2: Question[] = [
  {
    number: 1,
    label: 'Perda rápida da função renal',
    options: [],
    result: false,
  },
  {
    number: 2,
    label: 'Proteinúria',
    options: [],
    result: false,
  },
  {
    number: 3,
    label: 'Hematúria persistente',
    options: [
      {
        label:
          'Sim, confirmada com dois exames de Urina I, com intervalo de 8 semanas entre os mesmos.',
        selected: false,
      },
      {
        label: 'Pesquisa de hemácias dismórficas positivo.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 4,
    label: 'Cilindros',
    options: [],
    result: false,
  },
  {
    number: 5,
    label: 'Doença policística renal',
    options: [
      {
        label:
          'Pacientes com idade entre 15 e 39 anos com três ou mais cistos uni ou bilaterais.',
        selected: false,
      },
      {
        label:
          'Paciente com idade entre 40 e 59 anos com dois ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          'Paciente com idade igual ou superior a 60 anos com quatro ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          '10 ou mais cistos em cada rim, principalmente se rins aumentados bilateralmente.',
        selected: false,
      },
      {
        label:
          'Presença concomitante de cistos hepáticos, pancreáticos ou esplênicos.',
        selected: false,
      },
      {
        label: 'Nenhum histórico e sem presença de cistos.',
        selected: true,
      },
    ],
    result: false,
  },
  {
    number: 6,
    label: 'Nefrolitíase recorrente',
    options: [
      {
        label: 'Identificou causa metabólica, mas não conseguiu tratar.',
        selected: false,
      },
      {
        label: 'Não conseguiu identificar a causa metabólica.',
        selected: false,
      },
      {
        label: 'Identificou e tratou a causa metabólica.',
        selected: true,
      },
    ],
    result: false,
  },
  {
    number: 7,
    label: 'Infecção recorrente',
    options: [
      {
        label:
          'Três ou mais infecções urinárias no período de um ano, mesmo com profilaxia adequada.',
        selected: true,
      },
      {
        label: 'Exclusão de causas anatômicas urológicas ou ginecológicas.',
        selected: true,
      },
      {
        label: 'Profilaxia realizada corretamente.',
        selected: true,
      },
    ],
    result: true,
  },
];

export const mockQuestions3: Question[] = [
  {
    number: 1,
    label: 'Perda rápida da função renal',
    options: [],
    result: false,
  },
  {
    number: 2,
    label: 'Proteinúria',
    options: [],
    result: false,
  },
  {
    number: 3,
    label: 'Hematúria persistente',
    options: [
      {
        label:
          'Sim, confirmada com dois exames de Urina I, com intervalo de 8 semanas entre os mesmos.',
        selected: false,
      },
      {
        label: 'Pesquisa de hemácias dismórficas positivo.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 4,
    label: 'Cilindros',
    options: [],
    result: false,
  },
  {
    number: 5,
    label: 'Doença policística renal',
    options: [
      {
        label:
          'Pacientes com idade entre 15 e 39 anos com três ou mais cistos uni ou bilaterais.',
        selected: false,
      },
      {
        label:
          'Paciente com idade entre 40 e 59 anos com dois ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          'Paciente com idade igual ou superior a 60 anos com quatro ou mais cistos em cada rim.',
        selected: false,
      },
      {
        label:
          '10 ou mais cistos em cada rim, principalmente se rins aumentados bilateralmente.',
        selected: false,
      },
      {
        label:
          'Presença concomitante de cistos hepáticos, pancreáticos ou esplênicos.',
        selected: false,
      },
      {
        label: 'Nenhum histórico e sem presença de cistos.',
        selected: false,
      },
    ],
    result: false,
  },
  {
    number: 6,
    label: 'Nefrolitíase recorrente',
    options: [
      {
        label: 'Identificou causa metabólica, mas não conseguiu tratar.',
        selected: true,
      },
      {
        label: 'Não conseguiu identificar a causa metabólica.',
        selected: false,
      },
      {
        label: 'Identificou e tratou a causa metabólica.',
        selected: false,
      },
    ],
    result: true,
  },
];

export const mockUser1: UserData = {
  id: 'fsdfds',
  resultForm: true,
  age: 18,
  ethnicity: 'white',
  tfgValue: 40,
  gender: 'male',
  creatinine: 3,
  questions: mockQuestions1,
};

export const mockUser2: UserData = {
  id: 'fsdfds1',
  resultForm: true,
  age: 35,
  ethnicity: 'black',
  tfgValue: 60,
  gender: 'female',
  creatinine: 3,
  questions: mockQuestions2,
};

export const mockUser3: UserData = {
  id: 'fsdfds2',
  resultForm: true,
  age: 67,
  ethnicity: 'white',
  tfgValue: 60,
  gender: 'male',
  creatinine: 1.54,
  questions: mockQuestions3,
};

export const mockUser4: UserData = {
  id: 'fsdfds2',
  resultForm: false,
  age: 67,
  ethnicity: 'black',
  tfgValue: 100,
  gender: 'female',
  creatinine: 1.54,
  questions: mockQuestions4,
};

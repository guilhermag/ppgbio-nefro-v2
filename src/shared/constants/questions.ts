export const HEMAT_OPTIONS = [
  {
    NAME: 'exams',
    LABEL:
      'Sim, confirmada com dois exames de Urina I, com intervalo de 8 semanas entre os mesmos.',
  },
  { NAME: 'dysmorphic', LABEL: 'Pesquisa de hemácias dismórficas positivo.' },
];

export const DPR_OPTIONS = {
  POSITIVE_1:
    'Pacientes com idade entre 15 e 39 anos com três ou mais cistos uni ou bilaterais.',
  POSITIVE_2:
    'Paciente com idade entre 40 e 59 anos com dois ou mais cistos em cada rim.',
  POSITIVE_3:
    'Paciente com idade igual ou superior a 60 anos com quatro ou mais cistos em cada rim.',
  NEGATIVE_1:
    '10 ou mais cistos em cada rim, principalmente se rins aumentados bilateralmente.',
  NEGATIVE_2:
    'Presença concomitante de cistos hepáticos, pancreáticos ou esplênicos.',
  OPTION_NONE: 'Nenhum histórico e sem presença de cistos',
};

export const NEFROLIT_OPTIONS = {
  IDENTIFIED: 'Identificou, mas não conseguiu tratar.',
  NOT_IDENTIFIED: 'Não conseguiu identificar.',
  TREATED: 'Identificou e tratou.',
};

export const INFECTION_OPTIONS = {
  OPTION_1:
    'Três ou mais infecções urinárias no período de um ano, mesmo com profilaxia adequada.',
  OPTION_2: 'Exclusão de causas anatômicas urológicas ou ginecológicas.',
  OPTION_3: 'Profilaxia realizada corretamente.',
};

export const PROPHYLAXIS_TABLE = {
  TITLE: 'Profilaxia para Infecção do Trato Urinário Recorrente em mulheres',
  STEP_1:
    '1. Pode ser fornecida durante 3 a 12 meses de maneira continua (todas as noites) ou pós coital.',
  STEP_2:
    '2. 1 semana antes de inicia profilaxia, deve-se solicitar urocultura para confirmar a erradicação de ITU prévia.',
  STEP_3: {
    TITLE: 'Escolha do antibiótico baseado em antibiograma prévio:',
    OPTION_1: '1. Sulfametoxazol + Trimetoprima (200/40mg dia); ou',
    OPTION_2: '2. Nitrofurantoina (100mg dia); ou',
    OPTION_3: '3. Cerfalexina (250mg dia); ou',
    OPTION_4: '4. Norfloxacino (400mg dia).',
  },
};

export const HYPERTENSION_OPTIONS = [
  {
    NAME: 'hasSecund',
    LABEL: 'Suspeita de HAS Secundária.',
  },
  {
    NAME: 'control',
    LABEL:
      'Falta de controle da pressão com no mínimo três medicações anti-hipertensivas em dose plena, após avaliação da adesão.',
  },
];

export const HEMAT_OPTIONS = [
  {
    NAME: 'exams',
    LABEL:
      'Sim, confirmada com dois exames de Urina I, com intervalo de 8 semanas entre os mesmos.',
  },
  { NAME: 'dysmorphic', LABEL: 'Pesquisa de hemácias dismórficas positivo.' },
];

export const DPR_OPTIONS = [
  {
    NAME: 'option1',
    LABEL:
      'Pacientes com idade entre 15 e 39 anos com três ou mais cistos uni ou bilaterais.',
  },
  {
    NAME: 'option2',
    LABEL:
      'Paciente com idade entre 40 e 59 anos com dois ou mais cistos em cada rim.',
  },
  {
    NAME: 'option3',
    LABEL:
      'Paciente com idade igual ou superior a 60 anos com quatro ou mais cistos em cada rim.',
  },
  {
    NAME: 'option4',
    LABEL:
      '10 ou mais cistos em cada rim, principalmente se rins aumentados bilateralmente.',
  },
  {
    NAME: 'option5',
    LABEL:
      'Presença concomitante de cistos hepáticos, pancreáticos ou esplênicos.',
  },
  { NAME: 'option6', LABEL: 'Nenhum histórico e sem presença de cistos.' },
];

export const NEFROLIT_OPTIONS = [
  {
    NAME: 'option1',
    LABEL: 'Identificou causa metabólica, mas não conseguiu tratar.',
  },
  { NAME: 'option2', LABEL: 'Não conseguiu identificar a causa metabólica.' },
  { NAME: 'option3', LABEL: 'Identificou e tratou a causa metabólica.' },
];

export const INFECTION_OPTIONS = [
  {
    NAME: 'option1',
    LABEL:
      'Três ou mais infecções urinárias no período de um ano, mesmo com profilaxia adequada.',
  },
  {
    NAME: 'option2',
    LABEL: 'Exclusão de causas anatômicas urológicas ou ginecológicas.',
  },
  {
    NAME: 'option3',
    LABEL: 'Profilaxia realizada corretamente.',
  },
];

export const formControlLabelStyle = {
  '& .MuiFormControlLabel-label': {
    fontSize: '15px',
  },
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

export const HYPERTENSION_TABLE = {
  TITLE: 'Causas de Hipertensão Secundaria',
  STEP_1: {
    TITLE: '1. Feocromocitoma',
    OPTION_1:
      '- Tumor secretor de hormônio, podem ocorrer nas glândulas adrenais.',
  },
  STEP_2: {
    TITLE: '2. Tireoidopatia',
    OPTION_1: '- Hipotireoidismo.',
    OPTION_2: '- Hipertireoidismo.',
  },
  STEP_3: {
    TITLE: '3. Apnéia obstrutiva do sono',
    OPTION_1:
      '- Apneia obstrutiva do sono/ múltiplos episódios de fechamento completo ou parcial das vias respiratórias superiores durante o sono.',
  },
  STEP_4: {
    TITLE: '4. Hipertensão renovascular',
    OPTION_1:
      '- É a elevação da pressão arterial decorrente da oclusão parcial ou total de uma ou mais artérias renais e seus Ramos.',
  },
  STEP_5: {
    TITLE: '5. Aldosteronismo primario',
    OPTION_1: '- Produção autônoma de aldosterona pelo córtex adrenal.',
  },
};

export const LABELS = {
  QUESTION_1: {
    TITLE: 'Perda rápida da função renal',
    SUBTITLE:
      'O paciente possui Perda rápida da função renal ? Maior que 5 ml/min/ 1.73 m2, confirmados em dois exames em um intervalo de 6 meses.',
  },
  QUESTION_2: {
    TITLE: 'Proteinúria',
    SUBTITLE: 'O paciente possui proteinúria ?',
  },
  QUESTION_3: {
    TITLE: 'Hematúria persistente',
    SUBTITLE:
      'O paciente possui hematúria persistente ?. Selecione uma, duas ou nenhuma opção.',
  },
  QUESTION_4: {
    TITLE: 'Cilindros',
    SUBTITLE: 'Apresenta cilindros com potencial patológico ?',
  },
  QUESTION_5: {
    TITLE: 'Doença policística renal',
    SUBTITLE:
      'Selecione a situação que mais se adeque com o histórico do paciente:',
  },
  QUESTION_6: {
    TITLE: 'Nefrolitíase recorrente',
    SUBTITLE: 'Sobre litíase renal considere: ',
  },
  QUESTION_7: {
    TITLE: 'Infecção recorrente',
    SUBTITLE:
      'O paciente possui infecção recorrente ?. Selecione uma, duas ou nenhuma opção.',
  },
  QUESTION_8: {
    TITLE: 'Hipertensão Secundária',
    SUBTITLE:
      'O paciente possui hipertensão Secundária ?. Selecione uma, duas ou nenhuma opção.',
  },
  QUESTION_9: {
    TITLE: 'Diabetes e Macroalbuminúria',
    SUBTITLE: 'O paciente possui diabetes e macroalbuminúria ?',
  },
};

import {
  GridColDef,
  GridLocaleText,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { LABELS } from './questions';

export function generateQuestions(params: GridValueGetterParams) {
  const question1 = `${params.row.question1}; `;
  const question2 = `${params.row.question2}; `;
  const question3 = `${params.row.question3}; `;
  const question4 = `${params.row.question4}; `;
  const question5 = `${params.row.question5}; `;
  const question6 = `${params.row.question6}; `;
  const question7 = `${params.row.question7}; `;
  const question8 = `${params.row.question8}; `;
  const question9 = `${params.row.question9};`;

  return (
    question1 +
    question2 +
    question3 +
    question4 +
    question5 +
    question6 +
    question7 +
    question8 +
    question9
  );
}

export const COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'gender', headerName: 'Gênero', width: 100, editable: false },
  {
    field: 'tfgValue',
    headerName: 'TFG',
    type: 'number',
    width: 100,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 140,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'creatinine',
    headerName: 'Creatinina',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'ethnicity',
    headerName: 'Raça',
    width: 100,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'resultForm',
    headerName: 'Encaminhamento',
    align: 'center',
    width: 180,
    editable: true,
  },
  {
    field: 'question1',
    headerName: 'P1',
    width: 90,
    description: LABELS.QUESTION_1.TITLE,
  },
  {
    field: 'question2',
    headerName: 'P2',
    width: 90,
    description: LABELS.QUESTION_2.TITLE,
  },
  {
    field: 'question3',
    headerName: 'P3',
    width: 90,
    description: LABELS.QUESTION_3.TITLE,
  },
  {
    field: 'question4',
    headerName: 'P4',
    width: 90,
    description: LABELS.QUESTION_4.TITLE,
  },
  {
    field: 'question5',
    headerName: 'P5',
    width: 90,
    description: LABELS.QUESTION_5.TITLE,
  },
  {
    field: 'question6',
    headerName: 'P6',
    width: 90,
    description: LABELS.QUESTION_6.TITLE,
  },
  {
    field: 'question7',
    headerName: 'P7',
    width: 90,
    description: LABELS.QUESTION_7.TITLE,
  },
  {
    field: 'question8',
    headerName: 'P8',
    width: 90,
    description: LABELS.QUESTION_8.TITLE,
  },
  {
    field: 'question9',
    headerName: 'P9',
    width: 90,
    description: LABELS.QUESTION_9.TITLE,
  },
];

export const LOCALE_TEXT_PT: Partial<GridLocaleText> = {
  columnMenuManageColumns: 'Editar colunas',
  columnMenuFilter: 'Filtro',
  columnMenuHideColumn: 'Ocultar coluna',
  filterPanelOperator: 'Operador',
  columnsPanelShowAllButton: 'Mostrar todas',
  columnsPanelHideAllButton: 'Ocultar todas',
  columnMenuSortAsc: 'Ordenar por ASC',
  columnMenuSortDesc: 'Ordenar por DESC',
  columnMenuUnsort: 'Reiniciar ordenação',
  filterOperatorContains: 'contém',
  filterOperatorEquals: 'igual',
  filterOperatorStartsWith: 'começa com',
  filterOperatorEndsWith: 'termina com',
  filterOperatorIsEmpty: 'é vazio',
  filterOperatorIsNotEmpty: 'não é vazio',
  filterOperatorIsAnyOf: 'possui algum de ',

  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Valor filtrado',
};

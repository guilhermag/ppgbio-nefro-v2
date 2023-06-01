export interface FormComponent {
  component: JSX.Element;
}

export interface CheckerNextStep {
  selectSteps: (nextStep: number, previousStep: number) => void;
}

export type QuestionKey =
  | 'question1'
  | 'question2'
  | 'question3'
  | 'question4'
  | 'question5'
  | 'question6'
  | 'question7'
  | 'question8'
  | 'question9';

export const questionMap = [
  'question1',
  'question2',
  'question3',
  'question4',
  'question5',
  'question6',
  'question7',
  'question8',
  'question9',
];

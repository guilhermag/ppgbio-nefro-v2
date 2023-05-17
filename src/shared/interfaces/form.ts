export interface FormComponent {
  component: JSX.Element;
}

export interface CheckerNextStep {
  selectSteps: (nextStep: number, previousStep: number) => void;
}

export interface FormData {
  age: string;
  creatinine: string;
  gender: string;
  ethnicity: string;
}

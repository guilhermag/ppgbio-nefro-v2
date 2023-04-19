export interface FormComponent {
  component: JSX.Element;
}

export interface CheckerNextStep {
  selectNextStep: (nextStep: number) => void;
}

export interface FormData {
  age: string;
  creatinine: string;
  gender: string;
  ethnicity: string;
}

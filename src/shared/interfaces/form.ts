export interface FormComponent {
  component: JSX.Element;
}

export interface CheckerNextStep {
  disableNextStep?: (check: boolean) => void;
  setNextStep?: React.Dispatch<React.SetStateAction<number>>;
  currentStep?: number;
}

export interface FormData {
  age: string;
  creatinine: string;
  gender: string;
  ethnicity: string;
}

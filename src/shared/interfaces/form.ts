export interface FormComponent {
  component: JSX.Element;
}

export interface CheckerNextStep {
  disableNextStep?: (check: boolean) => void;
  clicked?: boolean;
}

export interface FormData {
  age: string;
  creatinine: string;
  gender: string;
  ethnicity: string;
}

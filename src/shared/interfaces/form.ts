export interface FormComponent {
  component: JSX.Element;
}

export interface CheckerNextStep {
  checkForNextStep: (check: boolean) => void;
}

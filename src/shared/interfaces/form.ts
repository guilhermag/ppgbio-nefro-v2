export interface FormComponent {
  component: JSX.Element;
}

export interface CheckerNextStep {
  selectSteps: (nextStep: number, previousStep: number) => void;
}

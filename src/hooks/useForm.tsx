import { useState } from 'react';
import { FormComponent } from '../shared/interfaces/form';

export function useForm(steps: FormComponent[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep + 1 >= 14 ? true : false;
  const isFirstStep = currentStep === 0 ? true : false;

  function changeStep(index: number) {
    if (index < 0 || index >= steps.length) return;
    setCurrentStep(index);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isFirstStep,
    isLastStep,
  };
}

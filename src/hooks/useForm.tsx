import { useState } from 'react';
import { FormComponent } from '../shared/interfaces/form';

export function useForm(steps: FormComponent[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep + 1 >= 12 ? true : false;
  const isFirstStep = currentStep === 0 ? true : false;

  function changeStep(index: number, event: React.FormEvent) {
    event.preventDefault();
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

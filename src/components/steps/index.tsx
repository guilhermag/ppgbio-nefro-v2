import { FormComponent } from '../../shared/interfaces/form';
import ExamsForm from './1-step/ExamsForm';
import InfectionForm from './10-step/InfectionForm';
import HypertensionForm from './11-step/HypertensionForm';
import DiabetesForm from './12-step/DiabetesForm';
import TFGForm from './2-step/TFGForm';
import TFGResult from './3-step/TFGResult';
import RenalFunctionForm from './4-step/RenalFunctionForm';
import MicroalbForm from './5-step/MicroalbForm';
import HermatForm from './6-step/HermatForm';
import CilinderForm from './7-step/CilinderForm';
import DPRForm from './8-step/DPRForm';
import NefrolitForm from './9-step/NefrolitForm';
import FinalStep from './final-step/FinalStep';

const components = [
  <ExamsForm />,
  <TFGForm />,
  <TFGResult />,
  <RenalFunctionForm />,
  <MicroalbForm />,
  <HermatForm />,
  <CilinderForm />,
  <DPRForm />,
  <NefrolitForm />,
  <InfectionForm />,
  <HypertensionForm />,
  <DiabetesForm />,
  <FinalStep />,
];

export const formSteps: FormComponent[] = components.map((component) => ({
  component,
}));

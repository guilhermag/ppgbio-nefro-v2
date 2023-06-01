import { FormData } from 'shared/interfaces/firestore-db';
import * as CONSTS from '../constants';

export function checkFormDataIsPopulated(data: FormData): boolean {
  const values = Object.values(data);
  return values.every((value) => value !== '');
}

export function getTFG(
  ethnicity: string,
  gender: string,
  creatinine: string,
  age: string
): string {
  const checkMale = gender === 'male';
  const checkEthnicity = ethnicity === 'afro-american';

  const divGender = checkMale ? CONSTS.DIV_MALE : CONSTS.DIV_FEMALE;
  const powMinGender = checkMale ? CONSTS.POW_MIN_MALE : CONSTS.POW_MIN_FEMALE;
  const genderMultiplier = checkMale ? 1 : CONSTS.FEMALE_MULTIPLIER;
  const ethnicityMultiplier = checkEthnicity
    ? CONSTS.AFRO_AMERICAN_MULTIPLIER
    : 1;
  const finalMultiplier =
    CONSTS.BASE_MULTIPLIER * ethnicityMultiplier * genderMultiplier;

  const minValue = Math.pow(
    Math.min(Number(creatinine) / divGender, 1),
    powMinGender
  );
  const maxValue = Math.pow(
    Math.max(Number(creatinine) / divGender, 1),
    CONSTS.POW_MAX
  );

  const ageValue = Math.pow(CONSTS.AGE_BASE, Number(age));

  return (finalMultiplier * minValue * maxValue * ageValue).toFixed(2);
}

export function selectStageByTFG(tfgValue: number, stage: string): string {
  if (stage === '1') stage = '0';
  if (getTFGStage(tfgValue) === stage) {
    if (stage === '3' || stage === '4' || stage === '5') {
      return 'high-risk-row';
    } else {
      return 'selected-row';
    }
  } else {
    return '';
  }
}

function getTFGStage(tfgNumber: number) {
  if (tfgNumber >= 90) {
    return '0';
  } else if (tfgNumber >= 60) {
    return '2';
  } else if (tfgNumber >= 30) {
    return '3';
  } else if (tfgNumber >= 15) {
    return '4';
  } else {
    return '5';
  }
}

export function saveFormDataLocalStorage(data: FormData) {
  localStorage.setItem('formData', JSON.stringify(data));
  localStorage.setItem('tfgValue', `${data.tfgValue}`);
}

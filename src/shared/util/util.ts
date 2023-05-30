import {
  CreateUser,
  DataStorage,
  Option,
  OptionStorage,
  Question,
  QuestionStorage,
} from 'shared/interfaces/firestore-db';
import * as CONSTS from '../constants';
import { FormData } from '../interfaces/form';

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

export function getFormResult(): CreateUser {
  const formData: FormData = JSON.parse(
    localStorage.getItem('formData') || '{}'
  );
  return {
    age: Number(formData.age),
    creatinine: Number(formData.creatinine),
    ethnicity: formData.ethnicity,
    gender: formData.gender,
    tfgValue: Number(formData.tfgValue),
    resultForm: false,
    questions: [],
  };
}

export function saveUserDataLocalStorage(formData: CreateUser) {
  localStorage.setItem('userData', JSON.stringify(formData));
}

export function getUserDataLocalStorage(): CreateUser {
  const userData: DataStorage = JSON.parse(
    localStorage.getItem('userData') || '{}'
  );
  const user: CreateUser = mapLocalStorageUser(userData);

  if (userData.questions) {
    userData.questions.forEach((questionStorage) => {
      const questionData: Question = mapLocalStorageQuestion(questionStorage);

      if (questionStorage.options) {
        questionStorage.options.forEach((optionStorage) => {
          const optionData: Option = mapLocalStorageOption(optionStorage);
          questionData.options.push(optionData);
        });
      }
      user.questions.push(questionData);
    });
  }
  return user;
}

function mapLocalStorageUser(userData: DataStorage): CreateUser {
  return {
    age: Number(userData.age),
    ethnicity: userData.ethnicity,
    tfgValue: Number(userData.tfgValue),
    gender: userData.gender,
    creatinine: Number(userData.creatinine),
    questions: [],
    resultForm: userData.resultForm === 'true' ? true : false,
  };
}

function mapLocalStorageQuestion(questionStorage: QuestionStorage): Question {
  return {
    number: Number(questionStorage.number),
    label: questionStorage.label,
    options: [],
    result: questionStorage.result === 'true' ? true : false,
  };
}

function mapLocalStorageOption(optionStorage: OptionStorage): Option {
  return {
    label: optionStorage.label,
    selected: optionStorage.selected === 'true' ? true : false,
  };
}

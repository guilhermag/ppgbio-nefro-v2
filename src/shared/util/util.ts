import {
  CreateUser,
  FormData,
  Option,
  OptionStorage,
  Question,
  QuestionStorage,
} from 'shared/interfaces/firestore-db';
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

export function getFormResult(result: boolean): CreateUser | null {
  if (localStorage.getItem('formData') !== null) {
    const formData: FormData = JSON.parse(localStorage.getItem('formData')!);
    const userData = mapLocalStorageUser(formData);
    const questions = getQuestions();
    userData.questions.push(...questions);
    userData.resultForm = result;
    return userData;
  } else {
    return null;
  }
}

export function saveQuestionLocalStorage(
  number: number,
  label: string,
  result: boolean,
  options: Option[] = []
) {
  let questions: Question[] = getQuestions();
  const index = questions.findIndex((question) => question.number === number);
  const question = {
    number: number,
    label: label,
    options: options,
    result: result,
  };
  if (index === -1) {
    questions.push(question);
  } else {
    questions[index] = question;
  }

  updateQuestionsLocalStorage(questions);
}

function updateQuestionsLocalStorage(questions: Question[]) {
  localStorage.removeItem('questions');
  localStorage.setItem('questions', JSON.stringify(questions));
}

function getQuestions(): Question[] {
  let questions: Question[] = [];
  if (localStorage.getItem('questions')) {
    const storageQuestions: QuestionStorage[] = JSON.parse(
      localStorage.getItem('questions')!
    );
    storageQuestions.forEach((questionStorage) => {
      questions.push(mapLocalStorageQuestion(questionStorage));
    });
  }
  return questions;
}

function mapLocalStorageUser(userData: FormData): CreateUser {
  return {
    age: Number(userData.age),
    ethnicity: userData.ethnicity,
    tfgValue: Number(userData.tfgValue),
    gender: userData.gender,
    creatinine: Number(userData.creatinine),
    questions: [],
    resultForm: false,
  };
}

function mapLocalStorageQuestion(questionStorage: QuestionStorage): Question {
  const questionMapped: Question = {
    number: Number(questionStorage.number),
    label: questionStorage.label,
    options: [],
    result: questionStorage.result === 'true' ? true : false,
  };

  if (questionStorage.options.length > 0) {
    questionStorage.options.forEach((optionStorage) => {
      const optionData: Option = mapLocalStorageOption(optionStorage);
      questionMapped.options.push(optionData);
    });
  }

  return questionMapped;
}

function mapLocalStorageOption(optionStorage: OptionStorage): Option {
  return {
    label: optionStorage.label,
    selected: optionStorage.selected === 'true' ? true : false,
  };
}

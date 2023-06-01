import {
  CreateUser,
  FormData,
  Option,
  Question,
} from 'shared/interfaces/firestore-db';
import { QuestionKey, questionMap } from 'shared/interfaces/form';

export function getFormResult(result: boolean): CreateUser | null {
  if (localStorage.getItem('formData') !== null) {
    const formData: FormData = JSON.parse(localStorage.getItem('formData')!);
    const userData = mapLocalStorageUser(formData);
    const questions = getQuestionsFromLocalStorage();
    userData.questions.push(...questions);
    userData.resultForm = result;
    return userData;
  } else {
    return null;
  }
}

export function getQuestion(questionNumber: QuestionKey): Question {
  const result: Question = JSON.parse(localStorage.getItem(questionNumber)!);
  return mapLocalStorageQuestion(result);
}

export function setQuestion(question: Question, questionKey: QuestionKey) {
  const optionsString = JSON.stringify(question);
  localStorage.setItem(questionKey, optionsString);
}

function getQuestionsFromLocalStorage(): Question[] {
  let questions: Question[] = [];
  for (let i = 0; i < 9; i++) {
    const mappedQuestionTitle = questionMap[i] as QuestionKey;
    if (questionExistInStorage(mappedQuestionTitle)) {
      questions.push(getQuestion(mappedQuestionTitle));
    }
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

function mapLocalStorageQuestion(questionStorage: Question): Question {
  const questionMapped: Question = {
    number: questionStorage.number,
    label: questionStorage.label,
    options: [],
    result: questionStorage.result,
  };

  if (questionStorage.options.length > 0) {
    questionStorage.options.forEach((optionStorage) => {
      const optionData: Option = mapLocalStorageOption(optionStorage);
      questionMapped.options.push(optionData);
    });
  }

  return questionMapped;
}

function mapLocalStorageOption(optionStorage: Option): Option {
  return {
    label: optionStorage.label,
    selected: optionStorage.selected,
  };
}

function questionExistInStorage(questionKey: QuestionKey): boolean {
  return localStorage.getItem(questionKey) ? true : false;
}

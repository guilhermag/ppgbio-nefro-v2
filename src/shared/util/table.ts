import { Question, UserData } from 'shared/interfaces/firestore-db';
import { DataTable } from 'shared/interfaces/table';

export function findQuestion(
  questionNumber: number,
  questions: Question[]
): string {
  const result = questions.find(
    (question) => question.number === questionNumber
  );
  if (result) {
    return result.result ? 'Sim' : 'Não';
  }
  return '-';
}

export function convertToDataTable(user: UserData, index: number): DataTable {
  return {
    id: index,
    age: user.age,
    creatinine: user.creatinine,
    ethnicity: user.ethnicity === 'white' ? 'Branca' : 'Negra',
    gender: user.gender === 'male' ? 'Masculino' : 'Feminino',
    tfgValue: user.tfgValue,
    resultForm: user.resultForm ? 'Sim' : 'Não',
    question1: findQuestion(1, user.questions),
    question2: findQuestion(2, user.questions),
    question3: findQuestion(3, user.questions),
    question4: findQuestion(4, user.questions),
    question5: findQuestion(5, user.questions),
    question6: findQuestion(6, user.questions),
    question7: findQuestion(7, user.questions),
    question8: findQuestion(8, user.questions),
    question9: findQuestion(9, user.questions),
  };
}

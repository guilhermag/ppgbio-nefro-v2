export interface CreateUser {
  age: number;
  ethnicity: string;
  tfgValue: number;
  gender: string;
  creatinine: number;
  question1?: Question;
  question2?: Question;
  question3?: Question;
  question4?: Question;
  question5?: Question;
  question6?: Question;
  question8?: Question;
  question7?: Question;
  question9?: Question;
  resultForm: boolean;
}

export interface UserData {
  id: string;
  age: number;
  ethnicity: string;
  tfgValue: number;
  gender: string;
  creatinine: number;
  question1?: Question;
  question2?: Question;
  question3?: Question;
  question4?: Question;
  question5?: Question;
  question6?: Question;
  question8?: Question;
  question7?: Question;
  question9?: Question;
  resultForm: boolean;
}

export interface Question {
  options?: Option[];
  result: boolean;
}

export interface Option {
  selected: boolean;
  label: string;
}

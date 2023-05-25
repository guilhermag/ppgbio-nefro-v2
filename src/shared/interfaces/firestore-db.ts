export interface UserForm {
  id?: string;
  question1: Question;
  question2: Question;
  question3: Question;
  question4: Question;
  question5: Question;
  question6: Question;
  question8: Question;
  question7: Question;
  question9: Question;
  resultForm: boolean;
  tfgData: TfgData;
}

export interface TfgData {
  age: number;
  ethnicity: string;
  value: number;
  gender: string;
  creatinine: number;
}

export interface Question {
  options?: Option[];
  result: boolean;
}

export interface Option {
  selected: boolean;
  label: string;
}

export interface CreateUser {
  age: number;
  ethnicity: string;
  tfgValue: number;
  gender: string;
  creatinine: number;
  questions: Question[];
  resultForm: boolean;
}

export interface UserData {
  id: string;
  age: number;
  ethnicity: string;
  tfgValue: number;
  gender: string;
  creatinine: number;
  questions: Question[];
  resultForm: boolean;
}

export interface Question {
  number: number;
  label: string;
  options: Option[];
  result: boolean;
}

export interface Option {
  selected: boolean;
  label: string;
}

export interface DataStorage {
  age: string;
  ethnicity: string;
  tfgValue: string;
  gender: string;
  creatinine: string;
  questions: QuestionStorage[];
  resultForm: string;
}

export interface QuestionStorage {
  number: string;
  label: string;
  options: OptionStorage[];
  result: string;
}

export interface OptionStorage {
  selected: string;
  label: string;
}

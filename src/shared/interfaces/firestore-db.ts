export interface CreateUser {
  age: number;
  ethnicity: string;
  tfgValue: number;
  gender: string;
  creatinine: number;
  questions?: Question[];
  resultForm: boolean;
}

export interface UserData {
  id: string;
  age: number;
  ethnicity: string;
  tfgValue: number;
  gender: string;
  creatinine: number;
  questions?: Question[];
  resultForm: boolean;
}

export interface Question {
  number: String;
  label: String;
  options?: Option[];
  result: boolean;
}

export interface Option {
  selected: boolean;
  label: string;
}

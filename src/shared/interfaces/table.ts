export interface TabsControl {
  controlTab: (disableTableTab: boolean, disableFormTab: boolean) => void;
}

export interface DataTable {
  id: number;
  age: number;
  ethnicity: string;
  tfgValue: number;
  gender: string;
  creatinine: number;
  resultForm: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
}

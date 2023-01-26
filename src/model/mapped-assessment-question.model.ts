export interface IMappedAssessmentQuestion {
  id: number;
  category: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  label: string;
  question: string;
  answer: string;
  date: string;
  category: string;
}

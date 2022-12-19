export interface IMappedAssessmentQuestion {
  id: number;
  category: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  label: string;
  answer: string;
}

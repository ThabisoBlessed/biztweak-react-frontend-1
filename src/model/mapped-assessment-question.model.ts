export interface IMappedAssessmentQuestion {
  id: number;
  category: string;
  questions: IQuestion[];
}

export interface IQuestion {
  label: string;
  answer: string;
}

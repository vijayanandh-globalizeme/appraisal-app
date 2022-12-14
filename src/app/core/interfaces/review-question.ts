export interface ReviewQuestions {
  data: Question[];
}

export interface Question {
  id: number;
  name: string;
  label: string;
  type: string;
  options: any;
  isRequired: boolean;
}

export type gradeType = {
  id: number;
  name: string;
  sequence: number;
  medium: string[];
};

export type mediumType = {
  id: number;
  name: string;
};

export type subjectType = {
  id: number;
  name: string;
  description: string;
  subject_code: string;
  grade: string;
};


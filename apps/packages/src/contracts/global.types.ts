export type Question = {
  _id: string;
  text: string;
  options: [string, string, string, string];
  correctOptionIndex: Options;
};

export type Options = 0 | 1 | 2 | 3;

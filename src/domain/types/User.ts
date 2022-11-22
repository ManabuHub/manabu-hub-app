export enum AccountType {
  MENTOR = "mentor",
  MENTEE = "mentee",
}

export interface User {
  id: string;
  type: AccountType | null;
  email: string;
  userName: string | null;
  school: string;
  grade: string;
  schoolChoice: string;
  description: string;
}

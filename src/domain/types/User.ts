export enum AccountType {
  MENTOR = "mentor",
  MENTEE = "mentee",
}

export interface User {
  id: string;
  email: string;
  type: AccountType | null; // アカウントの種類(高校生またはメンター)
  isProfileFilled: boolean; // プロフィールが埋められているかどうか
  userName: string; // ユーザー名
  grade: string | null; // 学年(選択制)
  currentSchoolArea: string | null; // 高校生限定、学校の地域
  schoolOfChoice: string | null; // 高校生限定、志望校
  college: string | null; // メンター限定
  formerSchoolArea: string | null; // メンター限定、学校の地域
  description: string; // 自己紹介
  followingTags: string[];
  userNameNGrams: string[];
}

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { ScreenName } from "../../../constants/ScreenName";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";
import { getTextLength } from "../../../utils/getTextLength";
import { AccountType } from "../../../domain/types/User";
import { useAuth } from "../../../providers/AuthProvider/hooks";

export enum MenteeGrade {
  GRADE_1 = "grade-1",
  GRADE_2 = "grade-2",
  GRADE_3 = "grade-3",
  PREPARE = "prepare", // 浪人に対応する英語がない...
  BELOW = "below",
}

export enum MentorGrade {
  GRADE_1 = "grade-1",
  GRADE_2 = "grade-2",
  GRADE_3 = "grade-3",
  GRADE_4 = "grade-4",
}

export const MenteeGradeList = [
  MenteeGrade.GRADE_1,
  MenteeGrade.GRADE_2,
  MenteeGrade.GRADE_3,
  MenteeGrade.PREPARE,
  MenteeGrade.BELOW,
];

export const MentorGradeList = [
  MentorGrade.GRADE_1,
  MentorGrade.GRADE_2,
  MentorGrade.GRADE_3,
  MentorGrade.GRADE_4,
];

export const useProfileEdit = (
  navigation: NativeStackNavigationProp<any, any>
) => {
  const { user } = useAuth();
  const { emitAlert } = useAlert();
  const [userName, setUserName] = useState<string>("");
  const [mentorGrade, setMentorGrade] = useState<MentorGrade>();
  const [menteeGrade, setMenteeGrade] = useState<MenteeGrade>();
  const [currentSchoolArea, setCurrentSchoolArea] = useState<string>("");
  const [schoolOfChoice, setSchoolOfChoice] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [formerSchoolArea, setFormerSchoolArea] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // useCallbackは、パフォーマンス改善のために使用しています（これを使わないと、画面が再レンダリングされたとき=自分か子のStateが変更されたときに、関数も毎回定義され直されます）
  const validateInput = useCallback(() => {
    //未入力のアラート
    if (getTextLength(userName) == 0) {
      emitAlert({
        title: "ユーザー名を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }

    if (mentorGrade == null || menteeGrade == null) {
      emitAlert({
        title: "学年を選択してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }

    if (user?.type == AccountType.MENTOR && college == "") {
      emitAlert({
        title: "大学を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }

    if (user?.type == AccountType.MENTOR && schoolOfChoice == "") {
      emitAlert({
        title: "出身校を選択してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }

    if (user?.type == AccountType.MENTEE && schoolOfChoice == "") {
      emitAlert({
        title: "学校を選択してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (user?.type == AccountType.MENTEE && college == "") {
      emitAlert({
        title: "志望校を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (description == "") {
      emitAlert({
        title: "自己紹介を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    //長すぎるときのアラート
    if (getTextLength(userName) > 15) {
      emitAlert({
        title: "ユーザー名が長すぎます！",
        message: "全角15字(半角30字)までです",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (user?.type == AccountType.MENTOR && getTextLength(college) > 60) {
      emitAlert({
        title: "大学が長すぎます！",
        message: "全角60字(半角120字)までです",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (user?.type == AccountType.MENTEE && getTextLength(college) > 60) {
      emitAlert({
        title: "志望校が長すぎます！",
        message: "全角60字(半角120字)までです",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (getTextLength(description) > 500) {
      emitAlert({
        title: "自己紹介が長すぎます！",
        message: "全角500字(半角1000字)までです",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }

    return true;
  }, [
    user,
    userName,
    mentorGrade,
    menteeGrade,
    currentSchoolArea,
    schoolOfChoice,
    college,
    formerSchoolArea,
    description,
    emitAlert,
  ]);

  const onMentorGradeChange = useCallback((grade: string) => {
    for (const refGrade in MentorGradeList) {
      if (grade === refGrade) {
        setMentorGrade(MentorGradeList[grade as any]);
      }
    }
  }, []);

  const onMenteeGradeChange = useCallback((grade: string) => {
    for (const refGrade in MenteeGradeList) {
      if (grade === refGrade) {
        setMenteeGrade(MenteeGradeList[grade as any]);
      }
    }
  }, []);

  const saveProfile = useCallback(() => {
    const isValidate = validateInput();
    if (!isValidate) {
      return;
    }
    navigation.navigate(ScreenName.MAIN, {
      screen: ScreenName.PROFILE,
      params: { screen: ScreenName.PROFILE_MAIN },
    });
  }, [navigation, validateInput]);

  return {
    userName,
    mentorGrade,
    menteeGrade,
    currentSchoolArea,
    schoolOfChoice,
    college,
    formerSchoolArea,
    description,
    isSubmitting,
    setUserName,
    onMentorGradeChange,
    onMenteeGradeChange,
    setCurrentSchoolArea,
    setSchoolOfChoice,
    setCollege,
    setFormerSchoolArea,
    setDescription,
    saveProfile,
  };
};
